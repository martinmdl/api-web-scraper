import { JSDOM } from 'jsdom';

const url_test = 'https://www.amazon.com/gp/product/B00VVOCSOU';
const selector1 = '#productDescription.a-section.a-spacing-small';
const selector2 = 'p';

async function scrapeWeb(url) {
  try {
    
    const response = await fetch(url)
    const html = await response.text()
    const dom = new JSDOM(html);

    const document = dom.window.document;
    const productDescriptionDiv = document.querySelector(selector1);
    
    if (productDescriptionDiv) {
      
      const productDescriptionP = productDescriptionDiv.querySelector(selector2);
      const productDescriptionContent = productDescriptionP.textContent.trim();
      console.log(productDescriptionContent);
      
    } else {
      console.log('El elemento no se encontró');
    }

  } catch (error) {
    console.error('Error scraping:', error);
  }
}

// const texto = await scrapeWeb(url_test);
// console.log(texto);