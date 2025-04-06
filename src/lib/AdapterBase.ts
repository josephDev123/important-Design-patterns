import { BankDetail } from "../utils/bankDetail";

export class AdapterBase {
  constructor(private Oldsystem: BankDetail) {
    // Constructor logic if needed
  }

  // Method to handle the adapter pattern
  async handleAdapterPattern() {
    try {
      const result = this.Oldsystem.getBankDetails();

      return {
        accountHolderName: result.accountHolderName,
        accountNumber: result.accountNumber,
      };
    } catch (error) {
      const errorObj = error as Error;
      throw new Error(
        errorObj?.message ||
          "An error occurred while processing the adapter pattern!"
      );
    }
  }
}
