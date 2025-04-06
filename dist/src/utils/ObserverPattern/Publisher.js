"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Publisher = void 0;
class Publisher {
    constructor() {
        this.subscribers = [];
        this.subscribers = [];
    }
    subscribe(subscriber) {
        this.subscribers.push(subscriber);
    }
    unSubscribe(subscriber) {
        this.subscribers.filter((sub) => sub !== subscriber);
    }
    notify(msg) {
        this.subscribers.forEach((sub) => sub.notify(msg));
    }
}
exports.Publisher = Publisher;
