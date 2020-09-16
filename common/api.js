import getConfig from "next/config";

const LIMIT_PAGE = 10;
const API_URL = process.env.NEXT_PUBLIC_API;

const handleResponse = (resp) => {
   if (resp.ok) {
      return resp.json();
   }

   return Promise.reject(resp);
};

const callbackError = (cb) => (err) => cb(err);
const callbackSuccess = (cb) => (resp) => cb(null, resp);

export function getProductById(id, cb) {
   fetch(`${API_URL}/product/${id}`)
      .then(handleResponse)
      .then(callbackSuccess(cb))
      .catch(callbackError(cb));
}

export function buildQueryString({ search, page = 1, limit = LIMIT_PAGE }) {
   const queryObject = { search, page, limit };

   Object.keys(queryObject).forEach((key) => {
      if (queryObject[key] === undefined) {
         delete queryObject[key];
      }
   });

   return new URLSearchParams(queryObject).toString();
}

export function getProductByQuery(query, cb) {
   fetch(`${API_URL}/product?${buildQueryString(query)}`)
      .then(handleResponse)
      .then(callbackSuccess(cb))
      .catch(callbackError(cb));
}
