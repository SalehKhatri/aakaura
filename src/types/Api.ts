export type ApiResponse<T> = {
  status: number;
  data: T;
  message: string;
};

export type ApiErrorResponse = {
  status: number;
  data: null;
  message: string;
};
