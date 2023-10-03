import { CustomNotifier } from "./adaptativeNotifier";

export interface Notifier extends CustomNotifier {
  sendTasks(tasks: string): void;
}

class NotifierTask {
  notifier: Notifier[];
  component: any;

  constructor() {
    this.notifier = [];
  }

  addNotifier(notifier: Notifier) {
    console.log(`Task: Add task '${notifier["name"]}' to Notifier`);
    this.notifier.push(notifier);
  }

  writeNotifier(tasks: string) {
    this.notifier.forEach((notifier) => notifier.sendTasks(tasks));
  }
  operation(): string {
    return this.component.operation();
  }
}

export class UnionNotifierTask implements Notifier {
  name: string;
  component: any;

  constructor(name: string) {
    this.name = name;
  }

  sendTasks(tasks: string) {
    console.log(`${this.name} received ${tasks}`);
  }
  operation(): string {
    return this.component.operation();
  }
}

export const NotificationPublisher = new NotifierTask();
