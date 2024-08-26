import { removeStopwords } from 'stopword';

export default function getRelevantWords(originalText) {
    
    if (!originalText) return null
    
    let cleanWords = originalText
        .replace(/[^\w\s]/g, ' ') // remove punctuation
        .replace(/\d+/g, '') // remove numbers
        .replace(/\b\w\b/g, '') // remove one-letter words
        .trim() // remove big spaces
        .split(/\s+/);
    
    cleanWords = removeStopwords(cleanWords)

    return cleanWords;
}