import { launch } from 'puppeteer';

export default async function scrapeWeb(url) {
    
    const browser = await launch({ args: ['--lang=en-US'] });
    const page = await browser.newPage();
    await page.goto(url);
    
    const selector = 'div#productDescription.a-section.a-spacing-small > p';
    const productDescriptionElement = await page.$(selector);
    
    if (productDescriptionElement) {
        
        const productDescriptionContent = await productDescriptionElement.evaluate(element => element.textContent);
        await browser.close();
        return productDescriptionContent;

    } else {

        console.log('This product does not have a description');
        await browser.close();

    }
}