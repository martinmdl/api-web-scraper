import { removeStopwords } from 'stopword';

export default function cleanText(originalText) {
    
    if (!originalText) return null
    
    let cleanText = originalText
        .replace(/[^\w\s]/g, '') // remove punctuation
        .replace(/\d+/g, '') // remove numbers
        .replace(/\b\w\b/g, '') // remove one letter words
        .replace(/\s+/g, ' ') // remove big spaces
        .split(/\s+/) // split into words
    
    cleanText = removeStopwords(cleanText) // remove stopwords
        .join(' ') // rebuild text
        .trim(); // remove blanks

    return cleanText;
    
}