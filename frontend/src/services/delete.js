export default async function disable(url) {
  const response = await fetch(url, {
    method: "DELETE"
  });

  return response.json();
}
