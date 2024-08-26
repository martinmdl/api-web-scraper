/**
 * Count new single words occurrences,
 * calculate their weights inside the total number of occurrences
 * and push changes into the global variable 'cloud'.
 * 
 * @param {array} words - Words to count and add to the cloud.
 * @param {object} cloud - Words, occurrences, weights and totalWordOcurrences to power a word-cloud.
 */

export default function updateCloud(words, cloud) {

    const partialCloud = {};

    for (const word of words) {

        // PARTIAL CLOUD
        // Create partial-cloud item || Add ocurrence to an existing item

        let partialCloudItem = partialCloud.wordDetails?.find(item => item.word == word);

        if (!partialCloudItem) {
            
            partialCloudItem = { // "newPartialCloudItem"
                word: word,
                occurrences: 1
            };
            
            // partialCloud.wordDetails ??= [];
            // partialCloud.wordDetails.push(partialCloudItem);
            (partialCloud.wordDetails ??= []).push(partialCloudItem);

        } else partialCloudItem.occurrences + 1; // debugear con fran

        // GLOBAL CLOUD
        // Add an existing partial-cloud item to global-cloud || Sum occurrences to an existing occurrence log

        const cloudItem = cloud.wordDetails?.find(item => item.word == word);

        if (!cloudItem)
            (cloud.wordDetails ??= []).push(partialCloudItem);
        else
            cloudItem.occurrences += partialCloudItem.occurrences;

    }

    cloud.totalWordOccurrences = (cloud.totalWordOccurrences || 0) + words.length; // sea crea 'occurrencies'

    cloud.wordDetails.forEach(item => {
        item.weight = item.occurrences / cloud.totalWordOccurrences;
    }); // se crean weights en ambas clouds
}

// const words_test = [];
// // const words_test = ['software', 'software', 'hello', 'world', 'hello'];
// const cloud_test = {
//     wordDetails : [],
//     // totalWordOccurrences : 0
// }

// updateCloud(words_test, cloud_test)
// console.log(cloud_test)