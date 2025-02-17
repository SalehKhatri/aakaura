export class ApiError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

export const errorHandler = (
  handler: (req: Request, ...args: any[]) => Promise<Response>
) => {
  return async (req: Request, ...args: any[]) => {
    try {
      return await handler(req, ...args);
    } catch (error) {
      console.error(error);

      const errorMessage =
        error instanceof ApiError
          ? error.message
          : error instanceof Error
          ? error.message
          : "An unknown error occurred";

      const errorStatus = error instanceof ApiError ? error.status : 500;

      return Response.json(
        { status: errorStatus, data: null, message: errorMessage },
        { status: errorStatus }
      );
    }
  };
};
