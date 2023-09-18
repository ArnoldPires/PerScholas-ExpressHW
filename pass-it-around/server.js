/*

Requirements
On the home page (get "/"), users should see:

"99 Bottles of beer on the wall"
a link that says "take one down, pass it around"
this should link to /98, where the number represents the number of bottles left.
When a number is given in the url (get "/:number_of_bottles"), users should see:

The number of bottles of beer on the wall (i.e. 98 Bottles of beer on the wall.)
a link to "take one down, pass it around", where the href is number of bottles in the parameter minus 1.
If there are 0 bottles left, do not show a link to "take one down"

Add a link to start over, which directs the user back to the home page.

Hints
You should use an anchor tag with an hrefto link to the next 'page'

*/

const express = require('express');
const app = express();

app.listen(3000, function () {
  console.log('Listening on port 3000');
});

const beer = 99;

app.get('/', function (req, res) {
  res.send(`<h1>99 Bottles of beer on the wall.</h1>
  <br>
  <a href="/${beer - 1}">take one down, pass it around.</a>
  `);
});
app.get('/:number_of_bottles', (req, res) => {
  const numBeer = parseFloat(req.params.number_of_bottles);
   if (numBeer === 0) {
    res.send(`
      <h1>No more bottles of beer on the wall</h1>
      <br>
      <a href="/">Start Over!...for some reason.</a>
    `)
   } else {
    res.send(`
    <h1>${numBeer} Bottles of beer on the wall</h1>
    <br>
    <a href="/${numBeer - 1}">Take one down, pass it around</a>
    <br>
    <a href="/">Start over</a>
    `)
   }
})