export const successResponse = (
  message = "Success",
  data: unknown,
  status = 200,
  headers: HeadersInit = {}
) => {
  return new Response(JSON.stringify({ status, data, message }), {
    status,
    headers: {
      "Content-Type": "application/json",
      ...headers, // Merge any additional headers (like Set-Cookie)
    },
  });
};

export const errorResponse = (
  message = "Something went wrong",
  status = 500
) => {
  return Response.json({ status, data: null, message }, { status });
};
