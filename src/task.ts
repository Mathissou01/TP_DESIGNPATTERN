import { Notifier } from "./unionManager";

export interface Task extends Notifier {
  title: string; // Le titre de la tâche.
  description: string; // La description de la tâche.

  /**
   * Récupère le titre de la tâche.
   * @returns Le titre de la tâche.
   */
  getTitle(): string;

  /**
   * Récupère la description de la tâche.
   * @returns La description de la tâche.
   */
  getDescription(): void;

  /**
   * Envoie les tâches à traiter.
   * @param tasks Les tâches à envoyer.
   */
  sendTasks(tasks: string): void;

  /**
   * Effectue une opération spécifique à la tâche.
   * @param text Le texte de l'opération.
   */
  operation(text: string): void;
}

// Classe "ProjectTask" qui implémente l'interface "Task" pour les tâches de projet.
export class ProjectTask implements Task {
  title: string; // Le titre de la tâche.
  description: string; // La description de la tâche.
  component: any;

  /**
   * Constructeur de la classe "ProjectTask".
   * @param title Le titre de la tâche de projet.
   * @param description La description de la tâche de projet.
   */
  constructor(title: string, description: string) {
    this.title = title;
    this.description = description;
  }

  // Implémentation des méthodes de l'interface "Task".
  getTitle() {
    return `Tâche de projet ${this.title}`;
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

// Classe "NotifierTask" qui gère les notificateurs associés aux tâches.
class NotifierTask {
  notifier: Notifier[];
  component: any;

  /**
   * Constructeur de la classe "NotifierTask".
   */
  constructor() {
    this.notifier = [];
  }

  /**
   * Ajoute un notificateur à la liste.
   * @param notifier Le notificateur à ajouter.
   * @param workerName Le nom du travailleur associé.
   * @param post Le poste associé.
   */
  addNotifier(notifier: Notifier, workerName: string, post: string) {
    console.log(
      `Tâche '${notifier["name"]}' ajoutée à '${post}' ${workerName}`
    );
    this.notifier.push(notifier);
  }

  /**
   * Envoie les tâches aux notificateurs enregistrés.
   * @param tasks Les tâches à envoyer.
   */
  writeNotifier(tasks: string) {
    this.notifier.forEach((notifier) => notifier.sendTasks(tasks));
  }

  /**
   * Effectue une opération en fonction du composant associé.
   * @param text Le texte de l'opération.
   */
  operation(text: string) {
    if (this.component?.operation) {
      return this.component.operation(text);
    }
  }
}

export const publisherTask = new NotifierTask();
