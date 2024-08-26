export default function updateCloud(words, cloud) {

    if (!words) return null;

    const partialCloud = {};

    for (const word of words) {

        // PARTIAL CLOUD
        // Create partial-cloud item || Add ocurrence to an existing item

        let partialCloudItem = partialCloud.wordDetails?.find(item => item.word == word);

        if (!partialCloudItem) {
            
            partialCloudItem = { // "newPartialCloudItem"
                word: word,
                occurrencies: 1
            };
            
            // partialCloud.wordDetails ??= [];
            // partialCloud.wordDetails.push(partialCloudItem);
            (partialCloud.wordDetails ??= []).push(partialCloudItem);

        } else partialCloudItem.occurrences + 1;

        // GLOBAL CLOUD
        // Add an existing partial-cloud item to global-cloud || Sum occurrences to an existing occurrence log

        const cloudItem = cloud.wordDetails?.find(item => item.word == word);

        if (!cloudItem)
            (cloud.wordDetails ??= []).push(partialCloudItem);
        else
            cloudItem.occurrences += partialCloudItem.occurrences;

    }

    // cloud.totalWordOccurrences ??= 0;
    // cloud.totalWordOccurrences += words.length;
    cloud.totalWordOccurrences = (cloud.totalWordOccurrences || 0) + words.length; 

    cloud.wordDetails.forEach(item => {
        item.weight = item.occurrences / cloud.totalWordOccurrences}
    );

}

// CLOUD
// cloud = {
//     wordDetails: [
//         {
//             word: '',
//             occurrences: 0,
//         }
//     ],
//     totalWordOccurrences: 0
// }

// PARTIAL CLOUD
// cloud = {
//     wordDetails: [
//         {
//             word: '',
//             occurrences: 0,
//         }
//     ],
//     totalWordOccurrences: 0
// }


// {
//     wordDetails: [
//         {
//             word: "Hola",
//             occurrences: 2,
//         },
//         {
//             word: "Chau",
//             occurrences: 1,
//         },
//         {
//             word: "Milanesa",
//             occurrences: 3,
//         }
//     ],
//     totalWordOccurrences: 0
// }