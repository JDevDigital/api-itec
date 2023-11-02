export class ApiError extends Error {
  constructor(
    public code: number,
    message: string,
    public details: any,
  ) {
    super(message);
  }
}
