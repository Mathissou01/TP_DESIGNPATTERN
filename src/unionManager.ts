export interface Notifier {
  sendTasks(tasks: string): void;
}

class NotifierTask {
  notifier: Notifier[];

  constructor() {
    this.notifier = [];
  }

  addNotifier(notifier: Notifier) {
    console.log("Task: Added to Notifier");
    this.notifier.push(notifier);
  }

  writeNotifier(tasks: string) {
    this.notifier.forEach((notifier) => notifier.sendTasks(tasks));
  }
}

export class UnionNotifierTask implements Notifier {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sendTasks(tasks: string) {
    console.log(`${this.name} received ${tasks}`);
  }
}

const publisher = new NotifierTask();

/**
 * @param publisher - Créer la notification de chaque tâches
 * @param - the second number
 * @returns The sum of `a` and `b`
 */
publisher.addNotifier(new UnionNotifierTask("Jacques"));
publisher.addNotifier(new UnionNotifierTask("Jacques2"));
publisher.addNotifier(new UnionNotifierTask("Jacques3"));
publisher.addNotifier(new UnionNotifierTask("Jacques4"));

export const NotificationPublisher = new NotifierTask();
