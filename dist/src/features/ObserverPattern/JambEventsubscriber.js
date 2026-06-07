"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JambNotifierPublisher = void 0;
class JambNotifierPublisher {
    constructor() {
        this.subscribers = [];
        this.subscribers = [];
    }
    subscribe(subscriber) {
        this.subscribers.push(subscriber);
    }
    notify(whatEverMsg) {
        this.subscribers.forEach((subscriber) => subscriber.notify(whatEverMsg));
    }
}
exports.JambNotifierPublisher = JambNotifierPublisher;
