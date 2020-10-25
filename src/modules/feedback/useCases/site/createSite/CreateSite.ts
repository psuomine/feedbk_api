import { UseCase } from "../../../../../shared/core/UseCase";
import { CreateSiteDTO } from "./CreateSiteDTO";
import { Result } from "../../../../../shared/core/Result";
import { Site } from "../../../domain/site";
import { SiteName } from "../../../domain/siteName";
import { SiteRepo } from "../../../repos/siteRepo";

const siteRepo = new SiteRepo();

export class CreateSite implements UseCase<CreateSiteDTO, Result<Site>> {
  public async execute(request: CreateSiteDTO): Promise<Result<Site>> {
    const { name } = request;

    const nameOrError = SiteName.create({ name });

    if (nameOrError.isFailure) {
      Result.fail<Site>(nameOrError.error);
    }

    const nameValue = nameOrError.getValue();

    const siteOrError = Site.create({ name: nameValue });

    if (siteOrError.isFailure) {
      return Result.fail<Site>(siteOrError.errorValue());
    }

    const site = siteOrError.getValue();

    await siteRepo.save(site);

    return Result.ok<Site>(site);
  }
}
