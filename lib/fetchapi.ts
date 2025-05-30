const baseUrl = process.env.NEXT_PUBLIC_WORDPRESS_API;

export async function fetchFromAPI(endpoint: string) {
  const res = await fetch(`${baseUrl}${endpoint}`);
  const data = await res.json();
  return data;
}

