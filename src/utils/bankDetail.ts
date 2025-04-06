export class BankDetail {
  private accountHolderName: string;
  private accountNumber: string;
  private bankName: string;
  private ifscCode: string;

  constructor(
    accountHolderName?: string,
    accountNumber?: string,
    bankName?: string,
    ifscCode?: string
  ) {
    this.accountHolderName = accountHolderName || "";
    this.accountNumber = accountNumber || "";
    this.bankName = bankName || "";
    this.ifscCode = ifscCode || "";
  }

  // Multi-field setter
  public setAccountDetails(details: {
    accountHolderName: string;
    accountNumber: string;
    bankName: string;
    ifscCode: string;
  }): void {
    this.accountHolderName = details.accountHolderName;
    this.accountNumber = details.accountNumber;
    this.bankName = details.bankName;
    this.ifscCode = details.ifscCode;
  }

  public getBankDetails(): {
    accountHolderName: string;
    accountNumber: string;
    bankName: string;
    ifscCode: string;
  } {
    return {
      accountHolderName: this.accountHolderName,
      accountNumber: this.accountNumber,
      bankName: this.bankName,
      ifscCode: this.ifscCode,
    };
  }
}
