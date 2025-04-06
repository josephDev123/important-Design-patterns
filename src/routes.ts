import { Router } from "express";
import { CommandController } from "./controllers/commandController";
import { Observer } from "./controllers/ObserverController";
import { strategyController } from "./controllers/strategyController";
import { DecoratorController } from "./controllers/DecoratorController";
import { AdapterController } from "./controllers/AdapterController";
import { BankDetail } from "./utils/bankDetail";

export const Route = Router();
const CommandControllerImp = new CommandController();
const ObserverControllerImpl = new Observer();
const StrategyControllerImpl = new strategyController();
const DecoratorControllerImpl = new DecoratorController();
const BankDetailImpl = new BankDetail();
const AdapterControllerImpl = new AdapterController(BankDetailImpl);

Route.post("/command-pattern", CommandControllerImp.do);
Route.post("/observer-pattern", ObserverControllerImpl.send);
Route.post("/strategy-pattern", StrategyControllerImpl.notify);
Route.post("/decorator-pattern", DecoratorControllerImpl.EditorMessage);
// Route.post("/adapter-pattern", AdapterControllerImpl.processResult);
Route.post(
  "/adapter-pattern",
  AdapterControllerImpl.processResult.bind(AdapterControllerImpl)
);
