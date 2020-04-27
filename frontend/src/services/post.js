export default async function post(url, data) {
  const response = await fetch(url, {
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json"
    },
    method: "POST"
  });

  return response.json();
}
