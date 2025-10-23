export function backendFetcher<T>(endpoint: string): () => Promise<T> {
  return () =>
    fetch(import.meta.env.VITE_BACKEND_URL + endpoint).then((res) =>
      res.json(),
    );
}

export async function mutateBackend<Input, Output>(
  endpoint: string,
  method: string,
  body?: Input,
): Promise<Output> {
  const response = await fetch(import.meta.env.VITE_BACKEND_URL + endpoint, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  if (!response.ok) {
    throw new Error(`Error: ${response.status} ${response.statusText}`);
  }
  return response.json();
}
