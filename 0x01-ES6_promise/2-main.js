import handleResponseFromAPI from "./2-then";

const promise = Promise.resolve(1);
handleResponseFromAPI(promise);
