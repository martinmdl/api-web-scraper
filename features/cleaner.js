import { removeStopwords } from 'stopword';

export default function cleanText(originalText) {
    
    if (!originalText) return null
    
    let cleanText = originalText
        .replace(/[^\w\s]/g, ' ') // remove punctuation
        .replace(/\d+/g, '') // remove numbers
        .replace(/\b\w\b/g, '') // remove one-letter words
        .split(/\s+/);
    
    cleanText = removeStopwords(cleanText)
        .join(' ') // rebuild text
        .trim();

    return cleanText;
}