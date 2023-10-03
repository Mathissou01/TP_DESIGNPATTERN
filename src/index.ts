/**
 * Import des function de unionManager
 *
 * Specify this is a module comment and rename it to my-module:
 * @module my-module
 */
import { NotificationPublisher, UnionNotifierTask } from "./unionManager";
/**
 * Import des functions de création de tâches
 *
 * Specify this is a module comment and rename it to my-module:
 * @module my-module
 */
import {
  Task,
  ProjectTask,
  PersonnalTask,
  ImportantTask,
  publisherTask,
} from "./task";
import { JuniorDev } from "./worker";

// !!!
console.log(
  "\u001b[1;41m",
  "\x1b[34m",
  "{====== LANCEMENT DE PROCESS ======}",
  "\u001b[0m"
);
// !!!
// Création des tâches trier celon leur importances
const tasks: Task[] = [
  new ProjectTask("SUEZ", "Desciption_SUEZ"),
  new PersonnalTask("COURSES", "Desciption_COURSES"),
  new ImportantTask("MAISON", "Desciption_MAISON"),
];

// !!!
console.log(
  "\u001b[1;42m",
  "\x1b[34m",
  "{====== CREATION DES TACHES ======}",
  "\u001b[0m"
);
// !!!

tasks.forEach((task) => {
  task.getTitle();
  task.getDescription();
  NotificationPublisher.addNotifier(new UnionNotifierTask(task.getTitle()));
  publisherTask.addNotifier(
    new ImportantTask("test", "test"),
    JuniorDev.getFullName()
  );
});

// !!!
console.log(
  "\u001b[1;41m",
  "\x1b[34m",
  "{====== FIN DE PROCESS ======}",
  "\u001b[0m"
);
// !!!
