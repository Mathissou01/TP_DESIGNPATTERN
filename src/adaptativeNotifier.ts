import { Notifier } from "./unionManager";

/**
 * The base Component interface defines operations that can be altered by
 * decorators.
 */
export interface CustomNotifier {
  operation(): string;
}
/**
 * The base Decorator class follows the same interface as the other components.
 * The primary purpose of this class is to define the wrapping interface for all
 * concrete decorators. The default implementation of the wrapping code might
 * include a field for storing a wrapped component and the means to initialize
 * it.
 */
export class Decorator implements CustomNotifier {
  protected component: CustomNotifier;

  constructor(component: CustomNotifier) {
    this.component = component;
  }

  /**
   * The Decorator delegates all work to the wrapped component.
   */
  public operation(): string {
    return this.component.operation();
  }
}

/**
 * Concrete Decorators call the wrapped object and alter its result in some way.
 */
export class CustomNotificationDecoratorA extends Decorator {
  public operation(): string {
    return `ConcreteDecoratorA(${super.operation()})`;
  }
}

export class CustomNotificationConcreteDecoratorB extends Decorator {
  public operation(): string {
    return `ConcreteDecoratorB(${super.operation()})`;
  }
}
