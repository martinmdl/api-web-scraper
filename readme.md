# AmazonScraper

## 📃 Description

This RESTful API allows the client to generate and get a JavaScript object, containing processed Amazon product description words to power a WordCloud, by providing a set of POST requests using a script
(e.g. [simulateRequests.sh](https://gist.github.com/tovbinm/f904fc4a29246b2c8b21d0361e259d8b)) or single requests (via postman, single curl calls, etc.).
If the set contains a URL without a product description, this endpoint will show a 400 status (http code for client errors) and continue with the next URL.
The same happens if there are repeated URLs in the set, it shows code 400 and continue. None of this input sets leads to interrupting the process.
The object to power the WordCloud has this shape:
```
{
  wordDetails: [ // words in descending order by occurrence
    {
      word: "Hello", // word string
      occurrences: 2, // number of this word occurrences 
      weight: 0.666 // percentage of this word occurrences in the set
    },
    {
      word: "Sirius",
      occurrences: 1,
      weight: 0.333
    }
  ],
  totalWordOccurrences: 3 // number of total occurrences
}
```

## 👨‍💻 Authors

- Martín De Lojo ([GitHub](https://www.github.com/martinmdl) - [LinkedIn](https://www.linkedin.com/in/martinmdl/))

## 💾 Run code
```
npm install
npm start
./requests.sh localhost 3000 productUrl 4
```
