import test from 'ava';
import validateUrl from '../features/validateUrl.js';
import ValidationError from '../exceptions/validationError.js';

test('Throws ValidationError for repeated URL input', t => {

    const url = 'https://www.amazon.com/gp/product/B00SMBFZNG';
    const fetchedURLs = ['https://www.amazon.com/gp/product/B00SMBFZNG']

    const error = t.throws(() => {
        validateUrl(url, fetchedURLs);
    }, { instanceOf: ValidationError });

    t.is(error.message, `${url} has already been fetched.`);
});

test('Adds new URL to the fetched URLs list', t => {

    const url = 'https://www.amazon.com/gp/product/B00SMBFZNG';
    const actual_fetchedURLs = [];
    const expected_fetchedURLs = ['https://www.amazon.com/gp/product/B00SMBFZNG'];

    validateUrl(url, actual_fetchedURLs);

    t.deepEqual(actual_fetchedURLs, expected_fetchedURLs);
});