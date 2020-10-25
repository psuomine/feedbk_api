import { AggregateRoot } from "../../../shared/domain/AggregateRoot";
import { Result } from "../../../shared/core/Result";
import { SiteName } from "./siteName";

interface SiteProps {
  name: SiteName;
}

export type SiteCollection = Site[];

export class Site extends AggregateRoot<SiteProps> {
  get name(): string {
    return this.props.name.value;
  }

  private constructor(props: SiteProps) {
    super(props);
  }

  public static create(props: SiteProps): Result<Site> {
    if (props.name === null || props.name === undefined) {
      return Result.fail<Site>("Must provide a name for the site");
    }

    const site = new Site(props);

    return Result.ok<Site>(site);
  }
}
