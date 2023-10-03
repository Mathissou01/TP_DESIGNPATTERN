"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const student_1 = require("./student");
const unionNewspaper_1 = require("./unionNewspaper");
const worker_1 = require("./worker");
console.log("{======== Lancement de la fusée =======}");
class StudentAdapter {
    constructor(student) {
        this.student = student;
    }
    getUsername() {
        return this.student.getFullName().toLocaleUpperCase();
    }
    login() {
        console.log("I'm an adapted student");
    }
    sendNews(news) {
        console.log(`received ${news}`);
    }
}
const john = new student_1.Student("john", "doe");
const users = [
    new worker_1.Worker("Travailleur1"),
    new worker_1.Worker("Travailleur2"),
    new worker_1.Unemployed("Unemployed1"),
    new worker_1.Unemployed("Unemployed2"),
    new worker_1.Administrator("Admin1"),
    new worker_1.Administrator("Admin2"),
    new StudentAdapter(john),
];
users.forEach((user) => {
    user.login();
    unionNewspaper_1.UnionPublisher.addSubscriber(new unionNewspaper_1.UnionSubscriber(user.getUsername()));
});
unionNewspaper_1.UnionPublisher.writeNews("IM AN ARTICLE");
// !!!
console.log("{======== Explosion de la fusée =======}");
//# sourceMappingURL=index.js.map