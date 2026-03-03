type Url = string;

const request = (url: Url, options?: RequestInit) => {
  fetch(url, options)
    .then((r) => r.json())
    .catch((e) => ({ error: true, message: e.message }));
};

type Methods = "POST" | "DELETE";

//currying
const createRequest = (method: Methods) => (url: URL, data) =>
  request(url, {
    method,
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

export const get = request;
export const post = createRequest("POST");
export const del = createRequest("DELETE");
