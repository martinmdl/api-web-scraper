import { launch } from "puppeteer";

const url_test = 'https://www.amazon.com/gp/product/B00VVOCSOU';
const selector1 = 'div#productDescription.a-section.a-spacing-small';
const selector2 = 'p';

export default async function webScraper(url) {

    const browser = await launch({ args: ['--lang=en-US'] });
    const page = await browser.newPage();
    await page.goto(url);

    const productDescriptionDiv = await page.$(selector1);
    
    if (productDescriptionDiv) {
        
        const productDescriptionP = await productDescriptionDiv.$(selector2);
        const productDescriptionContent = await productDescriptionP.evaluate(element => element.textContent);
        await browser.close();
        return productDescriptionContent;

    } else {

        console.log('The item was not found');
        await browser.close();
        return null;

    }
}

// const texto = await webScraper(url_test);
// console.log(texto);