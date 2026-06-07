import { Istrategy } from "./strategyBase";

export class Email implements Istrategy {
  send() {
    console.log("Email has been sent");
  }
}
