const express = require('express');
const exphbs = require('express-handlebars');
var fetch = require('node-fetch');

const app = express();

app.engine('hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs'
}));

app.set('view engine', 'hbs');

const fetchAPI = async () => {
	const res = await fetch('https://demo3227920.mockable.io/products');
  return res.text();
};

const addImages = (img, {data}) => {
  return data.map(item => {
    item.img = img;
    return item;
  })
};

const toAddImages = async(res) => {
  const apiRes = await fetchAPI();
  const data = JSON.parse(apiRes);
  const img = 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8';
  const result = addImages(img, data);
  res.render('home', {data: result});
};

app.get('/', function(req, res) {
  toAddImages(res);
});

app.listen(3000, () => {
  console.log('The web server has started on port 3000');
});
