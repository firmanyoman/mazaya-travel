const notFoundResponse = () =>
  new Response(null, {
    status: 404,
  })

export const GET = notFoundResponse
export const POST = notFoundResponse
export const DELETE = notFoundResponse
export const PATCH = notFoundResponse
export const OPTIONS = notFoundResponse
export const PUT = notFoundResponse
