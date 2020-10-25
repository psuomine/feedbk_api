import { BaseController } from "../../../../../shared/infra/http/models/BaseController";
import { CreateSite } from "./CreateSite";
import { CreateSiteDTO } from "./CreateSiteDTO";
import { Site } from "../../../domain/site";
import express from "express";

export class CreateSiteController extends BaseController {
  private useCase: CreateSite;

  constructor(useCase: CreateSite) {
    super();
    this.useCase = useCase;
  }

  async executeImpl(req: express.Request, res: express.Response): Promise<any> {
    const dto: CreateSiteDTO = req.body as CreateSiteDTO;

    try {
      const result = await this.useCase.execute(dto);

      if (result.isFailure) {
        const error = result.errorValue();

        // How to handle errors
        return this.fail(res, "Error");
      } else {
        return this.ok<Site>(res, result.getValue());
      }
    } catch (err) {
      return this.fail(res, err);
    }
  }
}
