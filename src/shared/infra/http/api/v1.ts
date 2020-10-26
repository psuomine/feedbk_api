import express from "express";
import { feedbackRouter } from "../../../../modules/feedback/infra/http/routes/index";

const v1Router = express.Router();

v1Router.get("/", (req, res) => {
  res.send("Express + TypeScript Server1234");
});

// Example of how to use modules routes from infra/http/routes
v1Router.use("/feedback", feedbackRouter);

export { v1Router };
