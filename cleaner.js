import webScraper from './scraper.js';

export default async function textCleaner() {
    
    const originalText = await webScraper();

    console.log(`ORIGINAL: ${originalText}\n`)

    const cleanedText = originalText
        .replace(/[^\w\s]/g, '') // punctuation
        .replace(/\d+/g, '') // numbers
        .replace(/\b(the|about|is|at|from|it|with|and|a|in|for|of|to|by|on)\b/gi, '') // stop words
        .replace(/\b\w\b/g, '') // one letter words
        .replace(/\s+/g, ' ') // spaces

    console.log(`LIMPIO: ${cleanedText}\n`)
    
}

textCleaner()
