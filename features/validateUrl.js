export default function validateUrl(url, fetchedURLs) {

    if (fetchedURLs.includes(url)) return null;
    
    fetchedURLs.push(url);
    return url;

}