//Utilities for api
export const BASEURL =
  import.meta.env.VITE_BACKEND_API_URL ||
  "https://jsonplaceholder.typicode.com/todos/";

//Config for application json
export const jsonConfig = {
  headers: {
    "Content-Type": "application/json",
  },
};

//COnfig for multiparty
export const multiConfig = {
  headers: {
    "Content-Type": "multipart/form-data",
  },
};
