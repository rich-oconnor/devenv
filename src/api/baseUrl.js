/**
 * api/BaseUrl module.
 * @module src/api/baseUrl
 * @since 1.0
 * @todo document all functions
 */


/**
 * getBaseUrl function
 *
 * @export
 * @returns {function}
 */
export default function getBaseUrl() {
    const inDevelopment = window.location.hostname === "localhost";
    return inDevelopment ? "http://localhost:3001/" : "/";
}
