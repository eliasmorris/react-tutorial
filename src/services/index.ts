const POST_API = "https://jsonplaceholder.typicode.com/posts";

const getUsers = () => {
  console.log("users");
};

const getPosts = async (): Promise<Response> => {
  return fetch(POST_API).then((response) => response.json());
};

const getCustomers = () => {
  console.log("customers");
};

export { getCustomers, getPosts, getUsers };
