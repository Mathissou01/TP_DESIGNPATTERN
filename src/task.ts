import { Notifier } from "./unionManager";

export interface Task extends Notifier {
  title: string;
  description: string;
  getTitle(): string;
  getDescription(): void;
  sendTasks(tasks: string): void;
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
    return this.component.operation();
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
    return this.component.operation();
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
    return this.component.operation();
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
  operation(): string {
    return this.component.operation();
  }
}

export const publisherTask = new NotifierTask();
