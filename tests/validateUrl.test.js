import test from 'ava';
import scrapeWeb from '../features/scrapeWeb.js';

test('Extract the "product description" from an Amazon URL', async t => {

    const url = 'https://www.amazon.com/gp/product/B00SMBFZNG';
    const actual = await scrapeWeb(url);
    const expected = 'The all-new VIZIO 29" 2.0 Sound Bar offers amazing audio in a compact size. Its sophisticated new design makes it an attractive addition to any 32"+ class TV. Use Bluetooth to stream music from your smartphone, tablet or computer. With everything you need for a quick and easy setup, upgrading to an amazing home theater experience has never been easier - plug the Sound Bar in, connect it to your TV, sit back and enjoy. The 2.0 Sound Bar features two powerful full-range stereo speakers that boost your audio and deliver amazing sound. Streamlined Design VIZIO Sound Bars are crafted to accentuate your TV with a minimalist body style that blends in with any room of your home. VIZIO Sound Bars utilize DTS audio technologies to deliver elevated multi-channel audio for the most immersive sound quality.'

    t.is(actual, expected);

});