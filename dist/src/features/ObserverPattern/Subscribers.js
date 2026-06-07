"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailJambSubscriber = exports.SmsJambSubscriber = void 0;
class SmsJambSubscriber {
    notify(msg) {
        console.log("sms:", msg);
    }
}
exports.SmsJambSubscriber = SmsJambSubscriber;
class EmailJambSubscriber {
    notify(msg) {
        console.log("email:", msg);
    }
}
exports.EmailJambSubscriber = EmailJambSubscriber;
