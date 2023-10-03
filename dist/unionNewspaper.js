"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnionPublisher = exports.UnionSubscriber = exports.UnionMember = void 0;
class UnionMember {
}
exports.UnionMember = UnionMember;
class Publisher {
    constructor() {
        this.subscribers = [];
    }
    addSubscriber(subscriber) {
        console.log("Subject: Attached an observer.");
        this.subscribers.push(subscriber);
    }
    writeNews(news) {
        this.subscribers.forEach((subscriber) => subscriber.sendNews(news));
    }
}
class UnionSubscriber {
    constructor(name) {
        this.name = name;
    }
    sendNews(news) {
        console.log(`${this.name} received ${news}`);
    }
}
exports.UnionSubscriber = UnionSubscriber;
exports.UnionPublisher = new Publisher();
const publisher = new Publisher();
publisher.addSubscriber(new UnionSubscriber("Jacques"));
publisher.addSubscriber(new UnionSubscriber("Jacques2"));
publisher.addSubscriber(new UnionSubscriber("Jacques3"));
publisher.addSubscriber(new UnionSubscriber("Jacques4"));
publisher.writeNews("NOUVELLES NOTIF");
//# sourceMappingURL=unionNewspaper.js.map