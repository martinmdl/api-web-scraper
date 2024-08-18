import webScraper from './scraper.js';

const stopwords = /\b(the|any|while|this|that|those|these|about|is|at|from|it|with|and|a|in|for|of|to|by|on)\b/gi;

export default async function textCleaner() {
    
    const originalText = await webScraper();

    const cleanedText = originalText
        .replace(/[^\w\s]/g, '') // punctuation
        .replace(/\d+/g, '') // numbers
        .replace(stopwords, '') // stop words
        .replace(/\b\w\b/g, '') // one letter words
        .replace(/\s+/g, ' '); // spaces

    return cleanedText;
    
}

const texto = await textCleaner();

console.log(texto);







