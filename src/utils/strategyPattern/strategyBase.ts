export interface Istrategy {
  send(): void;
}

export class strategyBase implements Istrategy {
  private strategy: Istrategy;
  constructor(strategy: Istrategy) {
    this.strategy = strategy;
  }
  async send() {
    this.strategy.send();
  }

  async setStrategy(strategy: Istrategy) {
    this.strategy = strategy;
  }
}
