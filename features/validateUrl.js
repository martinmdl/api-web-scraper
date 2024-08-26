/**
 * Check if the URL has already been fetched.
 * 
 * @param {string} url - Current URL to validate.
 * @param {array} fetchedURLs - List of fetched URLs.
 * @return {boolean} - true: not fetched; false: already fetched
 */

export default function validateUrl(url, fetchedURLs) {

    if (fetchedURLs.includes(url)) return false;

    fetchedURLs.push(url);
    return true;
}