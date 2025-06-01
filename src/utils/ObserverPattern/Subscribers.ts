export interface ISubscriber {
  notify<T>(msg: T): void;
}

export class SmsJambSubscriber implements ISubscriber {
  notify<T>(msg: T){
   console.log( "sms:",msg);
  }
}


export class EmailJambSubscriber implements ISubscriber {
  notify<T>(msg: T) {
   console.log( "email:",msg);
  }
}
