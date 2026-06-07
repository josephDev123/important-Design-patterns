import { Router } from "express";
import { CommandController } from "./controllers/commandController";
import { strategyController } from "./controllers/strategyController";
import { DecoratorController } from "./controllers/DecoratorController";
import { AdapterController } from "./controllers/AdapterController";
import { BankDetail } from "./utils/bankDetail";

export const Route = Router();
const CommandControllerImp = new CommandController();
const StrategyControllerImpl = new strategyController();
const DecoratorControllerImpl = new DecoratorController();
const BankDetailImpl = new BankDetail();
const AdapterControllerImpl = new AdapterController(BankDetailImpl);

Route.post("/command-pattern", CommandControllerImp.do);
Route.post("/strategy-pattern", StrategyControllerImpl.notify);
Route.post("/decorator-pattern", DecoratorControllerImpl.EditorMessage);
// Route.post("/adapter-pattern", AdapterControllerImpl.processResult);
Route.post(
  "/adapter-pattern",
  AdapterControllerImpl.processResult.bind(AdapterControllerImpl),
);
