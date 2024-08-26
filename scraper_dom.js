import { JSDOM } from 'jsdom';

const url_test = 'https://www.amazon.com/gp/product/B00VVOCSOU';
const selector = '#productDescription.a-section.a-spacing-small > p > span';

async function scrapeWeb(url) {
  try {

    const response = await fetch(url)

    const html = await response.text()

    html.replace( regex, '')
    // eliminar <style> h1 { color: red } </style>
    // <h1 style="">

    const dom = new JSDOM(html)

    const document = dom.window.document;

    const productDescriptionElement = document.querySelector(selector);

    if (productDescriptionElement) {

      const productDescriptionContent = productDescriptionElement.textContent.trim();
      console.log(productDescriptionContent);

    } else {
      console.log('El elemento no se encontró');
    }

  } catch (error) {
    console.error('Error scraping:', error);
  }
}

const texto = await scrapeWeb(url_test);
console.log(texto);




