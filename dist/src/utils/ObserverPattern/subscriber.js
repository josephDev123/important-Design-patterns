"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subscriber = void 0;
class subscriber {
    constructor(user) {
        this.userToNotify = [];
        this.userToNotify = user;
    }
    notify(whatEverMsg) {
        this.userToNotify.map((user) => console.log(`${user.name} has been notify about this: ${whatEverMsg}`));
    }
}
exports.subscriber = subscriber;
