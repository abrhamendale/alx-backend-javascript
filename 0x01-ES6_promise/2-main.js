import handleResponseFromAPI from "./2-then";

const promise = Promise.reject(1);
handleResponseFromAPI(promise);
