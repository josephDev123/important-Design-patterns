import { Isubscriber } from "./subscriber";

export class Publisher {
  subscribers: Isubscriber[] = [];
  constructor() {
    this.subscribers = [];
  }

  subscribe(subscriber: Isubscriber) {
    this.subscribers.push(subscriber);
  }

  unSubscribe(subscriber: Isubscriber) {
    this.subscribers.filter((sub) => sub !== subscriber);
  }

  notify<T>(msg: T) {
    this.subscribers.forEach((sub) => sub.notify(msg));
  }
}
