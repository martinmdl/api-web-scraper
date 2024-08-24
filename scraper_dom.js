import { JSDOM } from 'jsdom';

const url_test = 'https://www.amazon.com/gp/product/B00VVOCSOU';
const selector = '#productDescription.a-section.a-spacing-small > p > span';

async function scrapeWeb(url) {
  try {

    const response = await fetch(url)

    const html = await response.text()
    // const dom = new JSDOM(await response.arrayBuffer());

    /****************************************************/

    const dom = new JSDOM(html, {

      // Config to avoid parsing CSS
      resources: new JSDOM.ResourceLoader({
        fetch(url, options) {
          if (url.endsWith('.css')) {
            return Promise.resolve(Buffer.from(''));
          }
          return JSDOM.ResourceLoader.defaultFetch(url, options);
        }
      }),
      runScripts: "dangerously",
    });

    /****************************************************/

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




