import { Request, Response } from "express";
import { JambNotifierPublisher } from "../JambEventsubscriber";
import { EmailJambSubscriber, SmsJambSubscriber } from "../Subscribers";

export class ObserverController {
  async send(req: Request, res: Response) {
    const msg = req.body.msg;
    const SmsJambSubscriberImpl = new SmsJambSubscriber();
    const EmailJambSubscriberImpl = new EmailJambSubscriber();

    const subscriberImpl = new JambNotifierPublisher();
    subscriberImpl.subscribe(SmsJambSubscriberImpl);
    subscriberImpl.subscribe(EmailJambSubscriberImpl);

    subscriberImpl.notify(msg);
    res.status(200).json({ msg: "Message sent to subscribers", data: msg });
  }
}
