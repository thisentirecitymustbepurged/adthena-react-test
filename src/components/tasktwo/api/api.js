const request = async (...args) => {
  const res = await fetch(...args);
  const json = res.json();

  return json;
};

const api = {
  getUsers: () => request('https://jsonplaceholder.typicode.com/users'),
  getTodos: () => request('https://jsonplaceholder.typicode.com/todos')
};

export default api;
