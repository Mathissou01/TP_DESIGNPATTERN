/**
 * Module contenant les fonctions d'unionManager.
 * @module unionManager
 */
import { UnionNotifierTask } from "./unionManager";

/**
 * Module contenant les fonctions de création de tâches.
 * @module task
 */

import {
  Task,
  ProjectTask,
  PersonnalTask,
  ImportantTask,
  publisherTask,
} from "./task";

/**
 * Module contenant les fonctions de création des rôles de travailleurs.
 * @module worker
 */

import { Worker, JuniorDev, SeniorDev, Techlead } from "./worker";
import {
  CustomNotificationDecoratorA,
  CustomNotificationConcreteDecoratorB,
} from "./adaptativeNotifier";

/**
 * Fonction de lancement du processus.
 */
function launchProcess() {
  // Affichage d'un message de lancement de processus
  console.log(
    "\u001b[1;41m",
    "\x1b[34m",
    "{====== LANCEMENT DE PROCESS ======}",
    "\u001b[0m"
  );
}

/**
 * Fonction de création des tâches triées selon leur importance.
 * @returns {Task[]} Tableau de tâches créées.
 */
function createTasks(): Task[] {
  const tasks: Task[] = [
    new ProjectTask("SUEZ", "Description_SUEZ"),
    new ProjectTask("SUEZ SECOND", "Description_SUEZ2"),
    new PersonnalTask("COURSES", "Description_COURSES"),
    new PersonnalTask("COURSES SECOND", "Description_COURSES2"),
    new ImportantTask("MAISON", "Description_MAISON"),
    new ImportantTask("MAISON SECOND", "Description_MAISON2"),
  ];

  // Affichage du nombre de tâches créées
  console.log(
    "\u001b[1;36m",
    "\x1b[34m",
    `{====== ${tasks.length} tâches créées ======}`,
    "\u001b[0m"
  );

  return tasks;
}

/**
 * Fonction de création des utilisateurs.
 * @returns {Worker[]} Tableau d'utilisateurs créés.
 */
function createUsers(): Worker[] {
  const users: Worker[] = [
    new JuniorDev("John", "Doe"),
    new JuniorDev("Florian", "Rey"),
    new SeniorDev("Patrick", "Jean"),
    new SeniorDev("Michel", "Operation"),
    new Techlead("Mathis", "Alban"),
    new Techlead("Audran", "Massacry"),
  ];

  // Affichage du nombre d'utilisateurs créés
  console.log(
    "\u001b[1;36m",
    "\x1b[34m",
    `{<===== ${users.length} utilisateurs créés ======}`,
    "\u001b[0m"
  );

  return users;
}

/**
 * Fonction d'attribution des tâches aux utilisateurs.
 * @param {Task[]} tasks - Tableau de tâches à attribuer.
 * @param {Worker[]} users - Tableau d'utilisateurs auxquels attribuer les tâches.
 */
function assignTasksToUsers(tasks: Task[], users: Worker[]) {
  // Affichage d'un message d'attribution des tâches aux utilisateurs
  console.log(
    "\u001b[1;42m",
    "\x1b[34m",
    "{====== ATTRIBUTION DES TACHES ======}",
    "\u001b[0m"
  );

  tasks.forEach((task, index) => {
    const userIndex = Math.min(index, users.length - 1);
    const user = users[userIndex];
    publisherTask.addNotifier(
      new UnionNotifierTask(task.getTitle()),
      user.getFullName(),
      user.getPost()
    );
    task.getDescription();
  });
}

/**
 * Fonction principale du client.
 * @param {any} component - Composant de notification.
 */
function clientCode(component: any) {
  // ...

  console.log(`RESULT: ${component.operation()}`);

  // ...
}

// Lancement du processus
launchProcess();

// Création des tâches
const tasks = createTasks();

// Création des utilisateurs
const users = createUsers();

// Attribution des tâches aux utilisateurs
assignTasksToUsers(tasks, users);

const decorator1 = new CustomNotificationDecoratorA(publisherTask);
const decorator2 = new CustomNotificationConcreteDecoratorB(decorator1);

// Exécution du clientCode
clientCode(decorator2);

// Affichage d'un message de fin de processus
console.log(
  "\u001b[1;41m",
  "\x1b[34m",
  "{====== FIN DE PROCESS ======}",
  "\u001b[0m"
);
