import { Notifier } from "./unionManager";

export interface Task extends Notifier {
  title: string;
  description: string;
  getTitle(): string;
  getDescription(): void;
  sendTasks(tasks: string): void;
  operation(text: string): void;
}

export class ProjectTask implements Task {
  title: string;
  description: string;
  component: any;

  constructor(title: string, description: string) {
    this.title = title;
    this.description = description;
  }

  getTitle() {
    return `Tache de projet ${this.title}`;
  }

  getDescription() {
    console.log(`${this.description}`);
  }

  sendTasks(task: string): void {
    console.log(`received ${task}`);
  }
  operation(): string {
    return this.component.operation("test");
  }
}

export class PersonnalTask implements Task {
  title: string;
  description: string;
  component: any;

  constructor(title: string, description: string) {
    this.title = title;
    this.description = description;
  }

  getTitle() {
    return `Tache de projet ${this.title}`;
  }

  getDescription() {
    console.log(`${this.description}`);
  }

  sendTasks(task: string): void {
    console.log(`received ${task}`);
  }
  operation(): string {
    return this.component.operation("test");
  }
}

export class ImportantTask implements Task {
  title: string;
  description: string;
  component: any;

  constructor(title: string, description: string) {
    this.title = title;
    this.description = description;
  }

  getTitle() {
    return `Tache de projet ${this.title}`;
  }

  getDescription() {
    console.log(`${this.description}`);
  }

  sendTasks(task: string): void {
    console.log(`received ${task}`);
  }
  operation(): string {
    return this.component.operation("test");
  }
}

class NotifierTask {
  notifier: Notifier[];
  component: any;

  constructor() {
    this.notifier = [];
  }

  addNotifier(notifier: Notifier, workerName: string, post: string) {
    console.log(`Task '${notifier["name"]}' added to '${post}' ${workerName}`);
    this.notifier.push(notifier);
  }

  writeNotifier(tasks: string) {
    this.notifier.forEach((notifier) => notifier.sendTasks(tasks));
  }

  operation(text: string) {
    if (this.component?.operation) {
      return this.component.operation(text);
    }
  }
}

export const publisherTask = new NotifierTask();
