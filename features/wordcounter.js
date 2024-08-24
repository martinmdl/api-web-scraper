export default function countWordOccurrences(text) {

    if (!text) return null

    const wordCounts = {};
    const words = text.toLowerCase().match(/\b\w+\b/g);

    words.forEach(word => { wordCounts[word] = (wordCounts[word] || 0) + 1; });

    return wordCounts;
}