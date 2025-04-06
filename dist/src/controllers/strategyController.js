"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.strategyController = void 0;
const smsStrategy_1 = require("../utils/strategyPattern/smsStrategy");
const strategyBase_1 = require("../utils/strategyPattern/strategyBase");
const emailStrategy_1 = require("../utils/strategyPattern/emailStrategy");
class strategyController {
    notify(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const BaseStrategy = new strategyBase_1.strategyBase(new emailStrategy_1.Email());
            BaseStrategy.send();
            BaseStrategy.setStrategy(new smsStrategy_1.Sms());
            BaseStrategy.send();
            res.status(200).json({ message: "Strategy pattern has been implemented" });
        });
    }
}
exports.strategyController = strategyController;
