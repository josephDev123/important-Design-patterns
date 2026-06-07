"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObserverController = void 0;
const JambEventsubscriber_1 = require("../JambEventsubscriber");
const Subscribers_1 = require("../Subscribers");
class ObserverController {
    send(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = req.body.msg;
            const SmsJambSubscriberImpl = new Subscribers_1.SmsJambSubscriber();
            const EmailJambSubscriberImpl = new Subscribers_1.EmailJambSubscriber();
            const subscriberImpl = new JambEventsubscriber_1.JambNotifierPublisher();
            subscriberImpl.subscribe(SmsJambSubscriberImpl);
            subscriberImpl.subscribe(EmailJambSubscriberImpl);
            subscriberImpl.notify(msg);
            res.status(200).json({ msg: "Message sent to subscribers", data: msg });
        });
    }
}
exports.ObserverController = ObserverController;
