const { JSDOM } = require('jsdom');

const url = 'https://www.amazon.com/gp/product/B00VVOCSOU'
const selector = '#productDescription.a-section.a-spacing-small'

async function scrapeWeb() {
  try {
    
    const response = await fetch(url)
    const html = await response.text()
    const dom = new JSDOM(html);

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

scrapeWeb();