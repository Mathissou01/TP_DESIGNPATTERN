export interface Worker {
  firstname: string;
  lastname: string;
  post: string;
  getFullName(): string;
  getPost(): string;
}

export class JuniorDev implements Worker {
  firstname: string;
  lastname: string;
  post: string;
  static getPost: any;

  constructor(firstname: string, lastname: string) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.post = "Dev junior";
  }

  getFullName(): string {
    return `${this.firstname} ${this.lastname}`;
  }

  getPost(): string {
    return `${this.post}`;
  }
}

export class SeniorDev implements Worker {
  firstname: string;
  lastname: string;
  post: string;

  constructor(firstname: string, lastname: string) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.post = "Dev senior";
  }

  getFullName(): string {
    return `${this.firstname} ${this.lastname}`;
  }

  getPost(): string {
    return `${this.post}`;
  }
}

export class Techlead implements Worker {
  firstname: string;
  lastname: string;
  post: string;

  constructor(firstname: string, lastname: string) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.post = "Techlead";
  }

  getFullName(): string {
    return `${this.firstname} ${this.lastname}`;
  }

  getPost(): string {
    return `${this.post}`;
  }
}
