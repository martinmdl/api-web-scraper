/* DEPRECATED */

import { launch } from 'puppeteer';
import ValidationError from '../exceptions/validationError.js'

/**
 * Extract the 'product description' from a given Amazon product web.
 *
 * @param {string} url - URL whose product description we want to scrape.
 * @returns {string} - Product description paragraph.
 */

export default async function scraperWebB(url) {
    
    const browser = await launch({ args: ['--lang=en-US'] });
    const page = await browser.newPage();
    await page.goto(url);
    
    const selector = 'div#productDescription.a-section.a-spacing-small > p';
    const productDescriptionElement = await page.$(selector);
    
    if (!productDescriptionElement) {        
        await browser.close();
        throw new ValidationError('The Product Description was not found');
    }

    const productDescriptionContent = await productDescriptionElement.evaluate(element => element.textContent);
    await browser.close();
    return productDescriptionContent;
}