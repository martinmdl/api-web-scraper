import { removeStopwords } from 'stopword';
import ValidationError from '../exceptions/validationError.js'

/**
 * Identify relevant words in a text.
 *
 * @param {string} text - Text to clean and extract words from.
 * @returns {array} - Array containing relevant words.
 */

export default function getRelevantWords(text) {

    if (!text)
        throw new ValidationError('The text was blank');
        
    let relevantWords = text
        .replace(/[^\w\s]/g, ' ') // remove punctuation
        .replace(/\d+/g, '') // remove numbers
        .replace(/\b\w\b/g, '') // remove one-letter words
        .trim() // remove big spaces
        .split(/\s+/);

    relevantWords = removeStopwords(relevantWords)

    return relevantWords;
}