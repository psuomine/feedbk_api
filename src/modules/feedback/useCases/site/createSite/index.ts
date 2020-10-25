import { CreateSite } from "./CreateSite";
import { CreateSiteController } from "./CreateSiteController";

const createSiteUseCase = new CreateSite();

const createSiteController = new CreateSiteController(createSiteUseCase);

export { createSiteController };
