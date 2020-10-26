import { BaseController } from "../../../../../shared/infra/http/models/BaseController";
import { CreateSite, CreateSiteResponse } from "./CreateSite";
import { CreateSiteDTO } from "./CreateSiteDTO";
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
        return this.fail(res, error);
      } else {
        return this.ok<CreateSiteResponse>(res, result.getValue());
      }
    } catch (err) {
      return this.fail(res, err);
    }
  }
}
