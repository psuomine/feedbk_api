
import { ValueObject } from "../../../shared/domain/ValueObject";
import { Result } from "../../../shared/core/Result";

interface SiteNameProps {
  name: string;
}

export class SiteName extends ValueObject<SiteNameProps> {
  public static minLength: number = 2;
  public static maxLength: number = 85;

  get value (): string {
    return this.props.name;
  }

  private constructor (props: SiteNameProps) {
    super(props);
  }

  public static create (props: SiteNameProps): Result<SiteName> {
    if (props.name === null) {
        return Result.fail<SiteName>('SiteName is null or undefined');
    }

    if(props.name.length < this.minLength) {
        return Result.fail<SiteName>(`SiteName is not at least ${this.minLength} chars.`);
    }

    if(props.name.length < this.minLength) {
        return Result.fail<SiteName>(`SiteName is greater than ${this.minLength} chars.`);
    }

    return Result.ok<SiteName>(new SiteName(props));
  }
}