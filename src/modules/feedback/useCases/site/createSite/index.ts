import { CreateSite } from "./CreateSite";
import { CreateSiteController } from "./CreateSiteController";
import { SiteRepo } from "../../../repos/siteRepo";

const siteRepo = new SiteRepo();

const createSiteUseCase = new CreateSite(siteRepo);

const createSiteController = new CreateSiteController(createSiteUseCase);

export { createSiteController };
