import Router from "express";
import { ObserverController } from "./controller/ObserverController";

export const ObserverRoute = Router();
const ObserverControllerImpl = new ObserverController();

ObserverRoute.post("/observer-pattern", ObserverControllerImpl.send);
