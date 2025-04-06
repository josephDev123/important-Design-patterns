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
exports.Observer = void 0;
const Publisher_1 = require("../utils/ObserverPattern/Publisher");
const subscriber_1 = require("../utils/ObserverPattern/subscriber");
class Observer {
    send(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = req.body.msg;
            const SubscribedUserDb = [
                { name: "user1", email: "ade@gmail.com" },
                { name: "user2", email: "dapo@gmail.com" },
            ];
            const subscriberImpl = new subscriber_1.subscriber(SubscribedUserDb);
            const publisher = new Publisher_1.Publisher();
            publisher.subscribe(subscriberImpl);
            publisher.notify(msg);
        });
    }
}
exports.Observer = Observer;
