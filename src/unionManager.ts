import { CustomNotifier } from "./adaptativeNotifier";

export interface Notifier extends CustomNotifier {
  sendTasks(tasks: string): void;
  operation(text: string): void;
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
  operation(component: string) {
    console.log(`${this.component} received ${component}`);
  }
}

export const NotificationPublisher = new UnionNotifierTask("Planning");
