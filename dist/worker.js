"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Administrator = exports.Unemployed = exports.Worker = void 0;
// ***
class Worker {
    constructor(username) {
        this.username = username;
    }
    getUsername() {
        return "Worker# " + this.username;
    }
    login() {
        console.log("\x1b[33m%s\x1b[0m", "LOGIN TASK");
    }
    sendNews(news) {
        console.log(`received ${news}`);
    }
}
exports.Worker = Worker;
class Unemployed {
    constructor(username) {
        this.username = username;
    }
    getUsername() {
        return "Unemployed# " + this.username;
    }
    login() {
        console.log("\x1b[34m", "  UNEMPLOYED TASK");
    }
    sendNews(news) {
        console.log(`received ${news}`);
    }
}
exports.Unemployed = Unemployed;
class Administrator {
    constructor(username) {
        this.username = username;
    }
    getUsername() {
        return "admin# " + this.username;
    }
    login() {
        console.log("\x1b[36m%s\x1b[0m", "          ADMIN TASK");
    }
    sendNews(news) {
        console.log(`received ${news}`);
    }
    changeUserName(user, nextUsername) {
        user.username = nextUsername;
    }
}
exports.Administrator = Administrator;
//# sourceMappingURL=worker.js.map