export interface Worker {
  firstname: string;
  lastname: string;
  post: string;
  getFullName(): string;
  getPost(): string;
}

export class JuniorDev implements Worker {
  static getFullName(): string {
    throw new Error("Method not implemented.");
  }
  firstname: string;
  lastname: string;
  post: string;

  constructor(firstname: string, lastname: string, post: string) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.post = post;
  }

  getFullName(): string {
    return `${this.firstname} ${this.lastname}`;
  }

  getPost(): string {
    return `${this.post}`;
  }
}

class SeniorDev implements Worker {
  firstname: string;
  lastname: string;
  post: string;

  constructor(firstname: string, lastname: string, post: string) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.post = post;
  }

  getFullName(): string {
    return `${this.firstname} ${this.lastname}`;
  }

  getPost(): string {
    return `${this.post}`;
  }
}

class Techlead implements Worker {
  firstname: string;
  lastname: string;
  post: string;

  constructor(firstname: string, lastname: string, post: string) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.post = post;
  }

  getFullName(): string {
    return `${this.firstname} ${this.lastname}`;
  }

  getPost(): string {
    return `${this.post}`;
  }
}
