import { JSDOM } from 'jsdom';

export default async function scrapeWeb(url) {
    
    const response = await fetch(url)    
    const html = await response.text()
    
    // remove <style>contenido</style>
    const cleanedHtml = html.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');
    
    const dom = new JSDOM(cleanedHtml)
    const document = dom.window.document;
    
    const selector = '#productDescription.a-section.a-spacing-small > p > span';
    const productDescriptionElement = document.querySelector(selector);
    
    if (productDescriptionElement) {

      const productDescriptionContent = productDescriptionElement.textContent.trim();
      return productDescriptionContent;

    } else return null;  
}