import { CustomNotifier } from "./adaptativeNotifier";

/**
 * L'interface Notifier étend CustomNotifier et ajoute une méthode sendTasks
 * pour envoyer des tâches.
 */
export interface Notifier extends CustomNotifier {
  sendTasks(tasks: string): void;
  operation(text: string): void;
}

/**
 * La classe UnionNotifierTask implémente l'interface Notifier. Elle représente
 * un notificateur capable de recevoir des tâches et d'effectuer des opérations.
 */
export class UnionNotifierTask implements Notifier {
  name: string;
  component: any;

  constructor(name: string) {
    this.name = name;
  }

  /**
   * La méthode sendTasks permet au notificateur de recevoir et de gérer des tâches.
   * @param tasks - Les tâches à recevoir.
   */
  sendTasks(tasks: string) {
    console.log(`${this.name} received ${tasks}`);
  }
  /**
   * La méthode operation permet au notificateur d'effectuer une opération spécifiée.
   * @param component - Le composant à traiter.
   */
  operation(component: string) {
    console.log(`${this.component} received ${component}`);
  }
}

/**
 * NotificationPublisher est une instance de UnionNotifierTask avec le nom "Planning".
 * Elle peut être utilisée pour publier des notifications liées à la planification.
 */
export const NotificationPublisher = new UnionNotifierTask("Planning");
