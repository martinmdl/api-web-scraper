/**
 * COMPLETAR //////////////////////////
 * 
 * @param {string} url - Current URL to validate.
 * @param {array} fetchedURLs - List of fetched URLs.
 */

export default function validateUrl(url, fetchedURLs) {

    if (fetchedURLs.includes(url))
        throw new ValidationError(`${amazonUrl} has already been fetched.`);

    fetchedURLs.push(url);
}