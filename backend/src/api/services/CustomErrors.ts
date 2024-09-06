export class UserExistsError extends Error {
  status: number;
  constructor(message = "User already exists") {
    super(message);
    this.name = "UserExistsError";
    this.status = 409;
  }
}

export class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}
