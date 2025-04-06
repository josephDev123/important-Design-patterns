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
exports.AdapterBase = void 0;
class AdapterBase {
    constructor(Oldsystem) {
        this.Oldsystem = Oldsystem;
        // Constructor logic if needed
    }
    // Method to handle the adapter pattern
    handleAdapterPattern() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = this.Oldsystem.getBankDetails();
                return {
                    accountHolderName: result.accountHolderName,
                    accountNumber: result.accountNumber,
                };
            }
            catch (error) {
                const errorObj = error;
                throw new Error((errorObj === null || errorObj === void 0 ? void 0 : errorObj.message) ||
                    "An error occurred while processing the adapter pattern!");
            }
        });
    }
}
exports.AdapterBase = AdapterBase;
