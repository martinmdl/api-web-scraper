import { launch } from "puppeteer";

const url = 'https://www.amazon.com/gp/product/B00VVOCSOU';
const selector1 = '#productDescription.a-section.a-spacing-small';
const selector2 = 'p';

export default async function webScraper() {

    const browser = await launch({ args: ['--lang=en-US'] });
    const page = await browser.newPage();
    await page.goto(url);

    const productDescriptionDiv = await page.$(selector1);
    const productDescriptionP = await productDescriptionDiv.$(selector2);

    if (productDescriptionP) {

        const productDescriptionContent = await productDescriptionP.evaluate(element => element.textContent);
        await browser.close();
        return productDescriptionContent;

    } else {

        console.log('The item was not found');
        await browser.close();
        return null;

    }
}