export interface Isubscriber {
  userToNotify: Record<string, string>[];
  notify(whatEverMsg: any): void;
}

export class subscriber implements Isubscriber {
  userToNotify: Record<string, string>[] = [];
  constructor(user: Record<string, string>[]) {
    this.userToNotify = user;
  }

  notify(whatEverMsg: any) {
    this.userToNotify.map((user) =>
      console.log(`${user.name} has been notify about this: ${whatEverMsg}`)
    );
  }
}
