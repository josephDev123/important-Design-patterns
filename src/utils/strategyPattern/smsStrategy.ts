import { Istrategy } from "./strategyBase";

export class Sms implements Istrategy {
  send() {
    console.log("Sms has been sent");
  }
}
