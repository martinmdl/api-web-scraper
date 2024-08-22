export default function countWordOccurrences(text) {
    
    const wordCounts = {};
    const words = text.toLowerCase().match(/\b\w+\b/g);

    words.forEach(word => { wordCounts[word] = (wordCounts[word] || 0) + 1; });

    return wordCounts;
}
