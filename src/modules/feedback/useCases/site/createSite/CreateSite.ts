import { UseCase } from "../../../../../shared/core/UseCase";
import { CreateSiteDTO } from "./CreateSiteDTO";
import { Either, Result, left, right } from "../../../../../shared/core/Result";
import { Site } from "../../../domain/site";
import { SiteName } from "../../../domain/siteName";

export class CreateSite implements UseCase<CreateSiteDTO, Result<Site>> {
  public async execute(request: CreateSiteDTO): Promise<any> {
    const { name } = request;

    const nameOrError = SiteName.create({ name });

    if (nameOrError.isFailure) {
      Result.fail<Site>(nameOrError.error);
    }

    const nameValue = nameOrError.getValue();

    const site = Site.create({ name: nameValue });

    // call repository

    return null;
  }
}
