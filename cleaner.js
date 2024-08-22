const stopwords = /\b(the|any|while|this|that|those|these|about|is|at|from|it|with|and|a|in|for|of|to|by|on)\b/gi;

export default function cleanText(originalText) {

    if (originalText) {
        
        const cleanedText = originalText
            .replace(/[^\w\s]/g, '') // punctuation
            .replace(/\d+/g, '') // numbers
            .replace(stopwords, '') // stop words
            .replace(/\b\w\b/g, '') // one letter words
            .replace(/\s+/g, ' '); // spaces
    
        return cleanedText;

    } else {

        return null

    }
}

const textooo = 'Enjoy The Creative Life with the TCL 32" 720p direct LED HDTV. It delivers premium picture quality and tremendous value in a sophisticated slim frame design perfect for bringing entertainment to any space. This flat screen LED HDTV features High Definition 720p resolution for a sharper image and TCL True Color Technology for brilliant color and contrast. With direct LED backlighting, view darker blacks and luminous brightness while maintaining the best standards in energy efficiency.';

const texto = cleanText(textooo);

console.log(texto);