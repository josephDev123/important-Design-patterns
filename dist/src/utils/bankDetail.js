"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankDetail = void 0;
class BankDetail {
    constructor(accountHolderName, accountNumber, bankName, ifscCode) {
        this.accountHolderName = accountHolderName || "";
        this.accountNumber = accountNumber || "";
        this.bankName = bankName || "";
        this.ifscCode = ifscCode || "";
    }
    // Multi-field setter
    setAccountDetails(details) {
        this.accountHolderName = details.accountHolderName;
        this.accountNumber = details.accountNumber;
        this.bankName = details.bankName;
        this.ifscCode = details.ifscCode;
    }
    getBankDetails() {
        return {
            accountHolderName: this.accountHolderName,
            accountNumber: this.accountNumber,
            bankName: this.bankName,
            ifscCode: this.ifscCode,
        };
    }
}
exports.BankDetail = BankDetail;
