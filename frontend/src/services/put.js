export default async function put(url, data) {
  const response = await fetch(url, {
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json"
    },
    method: "PUT"
  });

  return response.json();
}
