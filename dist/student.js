"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    doStudentStuff() {
        console.log("I'm doing stuff");
    }
}
exports.Student = Student;
//# sourceMappingURL=student.js.map