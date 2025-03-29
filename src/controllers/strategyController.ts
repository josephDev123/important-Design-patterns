import { Request, Response } from "express";
import { Sms } from "../utils/strategyPattern/smsStrategy";
import { strategyBase } from "../utils/strategyPattern/strategyBase";
import { Email } from "../utils/strategyPattern/emailStrategy";

export class strategyController {
  public async notify(req: Request, res: Response) {
    const BaseStrategy = new strategyBase(new Email());
    BaseStrategy.send();
    BaseStrategy.setStrategy(new Sms());
    BaseStrategy.send();
    res.status(200).json({ message: "Strategy pattern has been implemented" });
  }
}
