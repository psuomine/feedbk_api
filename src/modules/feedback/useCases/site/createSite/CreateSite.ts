import { UseCase } from "../../../../../shared/core/UseCase";
import { CreateSiteDTO } from "./CreateSiteDTO";
import { Result } from "../../../../../shared/core/Result";
import { Site } from "../../../domain/site";
import { SiteName } from "../../../domain/siteName";
import { ISiteRepo } from "../../../repos/siteRepo";

export type CreateSiteResponse = {
  id: string;
};

export class CreateSite
  implements UseCase<CreateSiteDTO, Result<CreateSiteResponse>> {
  private siteRepo: ISiteRepo;

  constructor(siteRepo: ISiteRepo) {
    this.siteRepo = siteRepo;
  }

  public async execute(
    request: CreateSiteDTO
  ): Promise<Result<CreateSiteResponse>> {
    const { name } = request;

    const nameOrError = SiteName.create({ name });

    if (nameOrError.isFailure) {
      return Result.fail<CreateSiteResponse>(nameOrError.errorValue());
    }

    const nameValue = nameOrError.getValue();

    const siteOrError = Site.create({ name: nameValue });

    if (siteOrError.isFailure) {
      return Result.fail<CreateSiteResponse>(siteOrError.errorValue());
    }

    const site = siteOrError.getValue();

    await this.siteRepo.save(site);

    return Result.ok<CreateSiteResponse>({ id: site.id.toString() });
  }
}
