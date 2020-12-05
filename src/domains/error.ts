export interface ErrorResponse {
  status: number;
  message: string;
}

export class ApiError extends Error {
  status: number;

  constructor({ message, status }: { message: string; status: number }) {
    super(message); // (1)
    this.status = status; // (2)
  }
}
