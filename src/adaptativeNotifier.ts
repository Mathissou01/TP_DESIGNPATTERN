import { Notifier } from "./unionManager";

/**
 * L'interface CustomNotifier définit une opération que peuvent modifier les
 * décorateurs.
 */
export interface CustomNotifier {
  operation(text: string): void;
}

/**
 * La classe de base Decorator suit la même interface que les autres composants.
 * Le but principal de cette classe est de définir l'interface d'enrobage pour
 * tous les décorateurs concrets. L'implémentation par défaut du code d'enrobage
 * peut inclure un champ pour stocker un composant enrobé et les moyens de
 * l'initialiser.
 */
export class Decorator implements CustomNotifier {
  protected component: CustomNotifier;

  constructor(component: CustomNotifier) {
    this.component = component;
  }

  /**
   * Le Décorator délègue tout le travail au composant enrobé.
   */
  public operation(text: string) {
    return this.component.operation("test");
  }
}

/**
 * Les décorateurs concrets appellent l'objet enrobé et modifient son résultat
 * de quelque manière que ce soit.
 */
export class CustomNotificationDecoratorA extends Decorator {
  public operation(): string {
    return `ConcreteDecoratorA(${super.operation("test")})`;
  }
}

/**
 * La classe CustomNotificationConcreteDecoratorB représente un décorateur
 * concret qui ajoute une chaîne personnalisable à la valeur de base obtenue
 * du composant enrobé.
 */
export class CustomNotificationConcreteDecoratorB extends Decorator {
  public operation(): string {
    const result = this.component.operation("test"); // Obtenir la valeur de base
    const chainePersonnalisable = "Votre chaîne personnalisable ici";
    return result + chainePersonnalisable; // Concaténer la valeur de base avec la chaîne personnalisable
  }
}
