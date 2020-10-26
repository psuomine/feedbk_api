import express from "express";
import { createSiteController } from "../../../useCases/site/createSite";

const feedbackRouter = express.Router();

feedbackRouter.post("/", (req, res) => createSiteController.execute(req, res));

export { feedbackRouter };
