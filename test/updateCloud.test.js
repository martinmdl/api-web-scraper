import test from 'ava';
import updateCloud from '../features/updateCloud.js';

test('Counts numbers ocurrences', t => {

    const text = '11 22 22';
    const actual = updateCloud(text);
    const expected = {
        11: 1,
        22: 2
    }

    t.deepEqual(actual, expected);

});

test('Counts words ocurrences', t => {

    const text = 'word word cloud';
    const actual = updateCloud(text);
    const expected = {
        word: 2,
        cloud: 1
    }

    t.deepEqual(actual, expected);

});

test('Counts one-letter words/numbers ocurrences', t => {

    const text = '1 a a 2 2';
    const actual = updateCloud(text);
    const expected = {
        2: 2,
        a: 2,
        1: 1
    }

    t.deepEqual(actual, expected);

});

test('Does not count punctuation/symbols ocurrences', t => {

    const text = 'hello. # $ %- }world 3/3/2020';
    const actual = updateCloud(text);
    const expected = {
        hello: 1,
        world: 1,
        3: 2,
        2020: 1
    }

    t.deepEqual(actual, expected);

});

test('Two words without spaces between them count as one word', t => {

    const text = 'helloworld ';
    const actual = updateCloud(text);
    const expected = {
        helloworld: 1
    }

    t.deepEqual(actual, expected);

});

test('Counts "_" as a valid character', t => {

    const text = 'hello_world _ _';
    const actual = updateCloud(text);
    const expected = {
        hello_world: 1,
        _: 2
    }

    t.deepEqual(actual, expected);

});

test('Empty string input returns null', t => {

    const text = '';
    const actual = updateCloud(text);
    const expected = null

    t.is(actual, expected);

});

test('null input returns null', t => {

    const text = null;
    const actual = updateCloud(text);
    const expected = null

    t.is(actual, expected);

});

test('undefined input returns null', t => {

    const text = undefined;
    const actual = updateCloud(text);
    const expected = null

    t.is(actual, expected);

});