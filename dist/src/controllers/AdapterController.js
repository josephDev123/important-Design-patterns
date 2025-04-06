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
exports.AdapterController = void 0;
const AdapterBase_1 = require("../lib/AdapterBase");
class AdapterController {
    constructor(bankDetail) {
        // Constructor logic if needed
        this.Oldsystem = bankDetail;
    }
    processResult(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.Oldsystem.setAccountDetails({
                    accountHolderName: "John Doe",
                    accountNumber: "123456789",
                    bankName: "Example Bank",
                    ifscCode: "EXAMP001",
                });
                const AdapterBaseImp = new AdapterBase_1.AdapterBase(this.Oldsystem);
                const result = yield AdapterBaseImp.handleAdapterPattern();
                res.status(200).json(result);
                return;
            }
            catch (error) {
                const errorObj = error;
                res.status(500).json({ error: errorObj.message });
                return;
            }
        });
    }
}
exports.AdapterController = AdapterController;
