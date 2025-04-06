import { Request, Response } from "express";
import { AdapterBase } from "../lib/AdapterBase";
import { BankDetail } from "../utils/bankDetail";

export class AdapterController {
  Oldsystem: BankDetail;
  constructor(bankDetail: BankDetail) {
    // Constructor logic if needed
    this.Oldsystem = bankDetail;
  }

  async processResult(req: Request, res: Response) {
    try {
      this.Oldsystem.setAccountDetails({
        accountHolderName: "John Doe",
        accountNumber: "123456789",
        bankName: "Example Bank",
        ifscCode: "EXAMP001",
      });
      const AdapterBaseImp = new AdapterBase(this.Oldsystem);
      const result = await AdapterBaseImp.handleAdapterPattern();
      res.status(200).json(result);
      return;
    } catch (error) {
      const errorObj = error as Error;
      res.status(500).json({ error: errorObj.message });
      return;
    }
  }
}
