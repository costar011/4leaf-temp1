import express from "express";
import globalController from "../controllers/globalController";

const globalRouter = express.Router();

globalRouter.get("/", globalController);
globalRouter.get("/list", globalController);

export default globalRouter;

// router => 이정표
