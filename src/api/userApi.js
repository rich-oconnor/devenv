/**
 * api/userApi module.
 * @module src/api/userApi
 * @since 1.0
 * @todo document all functions
 */
import "whatwg-fetch";

import getBaseUrl from "./baseUrl";

const baseUrl = getBaseUrl();

/**
 *
 *
 * @export
 * @returns {array} fetched users
 */
export function getUsers() {
    return get("users");
}

/**
 *
 *
 * @export
 * @param {*} id
 * @returns {object}
 */
export function deleteUser(id) {
    return del(`users/${id}`);
}

/**
 *
 *
 * @param {string} url
 * @returns {object}
 */
function get(url){
    return fetch(baseUrl + url).then(onSuccess, onError);
}

/**
 *
 *
 * @param {string} url
 * @returns {object}
 */
function del(url) {
    const request = new Request(baseUrl + url, {
        method: "DELETE"
    });

    return fetch(request).then(onSuccess, onError);
}

/**
 *
 *
 * @param {object} response
 * @returns {object}
 */
function onSuccess(response){
    return response.json();
}

/**
 *
 *
 * @param {*} error
 * @returns {string}
 */
function onError(error){
    return console.log(error); // eslint-disable-line no-console
}
