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
}

export class PersonnalTask implements Task {
  title: string;
  description: string;

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
}

export class ImportantTask implements Task {
  title: string;
  description: string;

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
}

class NotifierTask {
  notifier: Notifier[];

  constructor() {
    this.notifier = [];
  }

  addNotifier(notifier: Notifier, workerName: string) {
    console.log(`Task: Added to ${workerName}`);
    this.notifier.push(notifier);
  }

  writeNotifier(tasks: string) {
    this.notifier.forEach((notifier) => notifier.sendTasks(tasks));
  }
}

export const publisherTask = new NotifierTask();
