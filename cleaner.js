import webScraper from './scraper.js';

const url_test = 'https://www.amazon.com/gp/product/B00VVOCSOU';
const stopwords = /\b(the|any|while|this|that|those|these|about|is|at|from|it|with|and|a|in|for|of|to|by|on)\b/gi;

export default async function textCleaner(url) {
    
    const originalText = await webScraper(url);

    if (originalText) {
        
        const cleanedText = originalText
            .replace(/[^\w\s]/g, '') // punctuation
            .replace(/\d+/g, '') // numbers
            .replace(stopwords, '') // stop words
            .replace(/\b\w\b/g, '') // one letter words
            .replace(/\s+/g, ' '); // spaces
    
        return cleanedText;

    } else {

        return null

    }

    
}

const texto = await textCleaner(url_test);
console.log(texto);