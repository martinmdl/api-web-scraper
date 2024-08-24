import test from 'ava';
import cleanText from '../features/cleaner.js';

test('Removes punctuation/symbols', t => {

    const text = '(hello. $- # / _ .sirius software:software)';
    const actual = cleanText(text);
    const expected = 'hello sirius software software'

    t.is(actual, expected);

});

test('Removes numbers', t => {

    const text = '1080pixels 16:9';
    const actual = cleanText(text);
    const expected = 'pixels'

    t.is(actual, expected);

});

test('Removes one-letter words', t => {

    const text = '1080p a I ';
    const actual = cleanText(text);
    const expected = ''

    t.is(actual, expected);

});

test('Removes big blanks', t => {

    const text = '  hello   sirius    ';
    const actual = cleanText(text);
    const expected = 'hello sirius'

    t.is(actual, expected);

});

test('Removes most common stopwords', t => {

    const text = 'the world is a place with a lot of animals';
    const actual = cleanText(text);
    const expected = 'world place lot animals'

    t.is(actual, expected);

});

test('Empty string input returns null', t => {

    const text = '';
    const actual = cleanText(text);
    const expected = null

    t.is(actual, expected);

});

test('null input returns null', t => {

    const text = null;
    const actual = cleanText(text);
    const expected = null

    t.is(actual, expected);

});

test('undefined input returns null', t => {

    const text = undefined;
    const actual = cleanText(text);
    const expected = null

    t.is(actual, expected);

});