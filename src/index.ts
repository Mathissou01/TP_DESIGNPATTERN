/**
 * Import des fonctions de unionManager
 * @module "./unionManager";
 */
import { UnionNotifierTask } from "./unionManager";

/**
 * Import des fonctions de création de tâches
 * @module "./task"
 */

import {
  Task,
  ProjectTask,
  PersonnalTask,
  ImportantTask,
  publisherTask,
} from "./task";

/**
 * Import des fonctions de création des rôles
 * @module "./worker"
 */

import { Worker, JuniorDev, SeniorDev, Techlead } from "./worker";
import {
  CustomNotificationDecoratorA,
  CustomNotificationConcreteDecoratorB,
} from "./adaptativeNotifier";

// !!!
console.log(
  "\u001b[1;41m",
  "\x1b[34m",
  "{====== LANCEMENT DE PROCESS ======}",
  "\u001b[0m"
);
// !!!

// !!!
console.log(
  "\u001b[1;42m",
  "\x1b[34m",
  "{====== CREATION DES TACHES ======}",
  "\u001b[0m"
);
// !!!
// Création des tâches trier celon leur importances
const tasks: Task[] = [
  new ProjectTask("SUEZ", "Desciption_SUEZ"),
  new ProjectTask("SUEZ SECOND", "Desciption_SUEZ2"),
  new PersonnalTask("COURSES", "Desciption_COURSES"),
  new PersonnalTask("COURSES SECOND", "Desciption_COURSES2"),
  new ImportantTask("MAISON", "Desciption_MAISON"),
  new ImportantTask("MAISON SECOND", "Desciption_MAISON2"),
];

// !!!
console.log(
  "\u001b[1;42m",
  "\x1b[34m",
  "{====== CREATION DES UTILISATEURS ======}",
  "\u001b[0m"
);
// !!!

const users: Worker[] = [
  new JuniorDev("John", "Doe"),
  new JuniorDev("Florian", "Rey"),
  new SeniorDev("Patrick", "Jean"),
  new SeniorDev("Michel", "Operation"),
  new Techlead("Mathis", "Alban"),
  new Techlead("Audran", "Massacry"),
];

// !!!
console.log(
  "\u001b[1;42m",
  "\x1b[34m",
  "{====== ATTRIBUTION DES TACHES ======}",
  "\u001b[0m"
);
// !!!
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

const decorator1 = new CustomNotificationDecoratorA(publisherTask);
const decorator2 = new CustomNotificationConcreteDecoratorB(decorator1);

// !!!
console.log(
  "\u001b[1;41m",
  "\x1b[34m",
  "{====== FIN DE PROCESS ======}",
  "\u001b[0m"
);
// !!!
