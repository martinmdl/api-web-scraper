/**
 * Count new single words occurrences,
 * calculate their weights inside the total number of occurrences
 * and push changes into the global variable 'cloud'.
 * 
 * @param {array} words - Words to count and add to the cloud.
 * @param {object} cloud - Words, occurrences, weights and totalWordOcurrences to power a word-cloud.
 */

export default function updateCloud(words, cloud) {

    for (const word of words) {

        const cloudItem = cloud.wordDetails.find(item => item.word == word);

        if (cloudItem)
            cloudItem.occurrences++;
        else
            cloud.wordDetails.push({
                word,
                occurrences: 1
            });
    }

    cloud.totalWordOccurrences += words.length;

    cloud.wordDetails.forEach(item => {
        item.weight = (item.occurrences / cloud.totalWordOccurrences).toFixed(3);
    });
}