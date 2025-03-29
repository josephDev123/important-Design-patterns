import { Request, Response } from "express";
import { Publisher } from "../utils/ObserverPattern/Publisher";
import { subscriber } from "../utils/ObserverPattern/subscriber";

export class Observer {
  async send(req: Request, res: Response) {
    const msg = req.body.msg;
    const SubscribedUserDb = [
      { name: "user1", email: "ade@gmail.com" },
      { name: "user2", email: "dapo@gmail.com" },
    ];
    const subscriberImpl = new subscriber(SubscribedUserDb);
    const publisher = new Publisher();
    publisher.subscribe(subscriberImpl);
    publisher.notify(msg);
  }
}
