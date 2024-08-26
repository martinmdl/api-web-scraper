import { JSDOM } from 'jsdom';
import ValidationError from '../app.js'

/**
 * Extract the 'product description' from a given Amazon product web.
 *
 * @param {string} url - URL whose product description we want to scrape.
 * @returns {string} - Product description paragraph.
 */

export default async function scrapeWeb(url) {
    
    const response = await fetch(url)    
    const html = await response.text()
    
    // remove <style>css-content</style>
    const cleanedHtml = html.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');
    
    const dom = new JSDOM(cleanedHtml)
    const document = dom.window.document;
    
    const selector = '#productDescription.a-section.a-spacing-small > p';
    const productDescriptionElement = document.querySelector(selector);
    
    if (productDescriptionElement) {

      const productDescriptionContent = productDescriptionElement.textContent.trim();
      return productDescriptionContent;

    }
    
    throw new ValidationError('The Product Description was not found');
}

// const url_test = 'https://www.amazon.com/gp/product/B00VVOCSOU'
// console.log(await scrapeWeb(url_test))