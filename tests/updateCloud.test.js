import test from 'ava';
import updateCloud from '../features/updateCloud.js';

test('Updates occurrences, words and weights and sorts words in descending order', t => {

    const words = ['hello', 'sirius', 'software', 'software']
    const actual_cloud = {
        wordDetails : [],
        totalWordOccurrences : 0
    }

    updateCloud(words, actual_cloud);

    const expected_cloud = {
        wordDetails: [
            {
                word: 'software',
                occurrences: 2,
                weight: 0.5
            },
            {
                word: 'hello',
                occurrences: 1,
                weight: 0.25
            },
            {
                word: 'sirius',
                occurrences: 1,
                weight: 0.25
            }
        ],
        totalWordOccurrences: 4
    }

    t.deepEqual(actual_cloud, expected_cloud);
});

test('Empty items does not break the function', t => {

    const words = ['', '']
    const actual_cloud = {
        wordDetails : [],
        totalWordOccurrences : 0
    }

    updateCloud(words, actual_cloud);

    const expected_cloud = {
        wordDetails: [
            {
                word: '',
                occurrences: 2,
                weight: 1
            }
        ],
        totalWordOccurrences: 2
    }

    t.deepEqual(actual_cloud, expected_cloud);
});