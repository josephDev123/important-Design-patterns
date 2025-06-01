import { ISubscriber } from "./Subscribers";

export interface IPublisher {
  notify<TData>(data: TData): void;
}

export class JambNotifierPublisher implements IPublisher {
 
  subscribers:ISubscriber[]= [];
  constructor() {
    this.subscribers = [];
  }

  subscribe(subscriber: any) {
    this.subscribers.push(subscriber);
  }

  notify<TData>(whatEverMsg: TData) {
    this.subscribers.forEach((subscriber) =>
      subscriber.notify(whatEverMsg)
    );
  }
}
