const express = require('express');
const exphbs = require('express-handlebars');
const fetch = require('node-fetch');
const app = express();

app.engine('hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs'
}));

app.set('view engine', 'hbs');

const fetchAPI = async () => {
	const res = await fetch('http://demo5168195.mockable.io/products');
  return res.text();
};

const fetchAPIItem = async (id) => {
  const res = await fetch(`http://demo5168195.mockable.io/products/${id}`);
  return res.text();
};


const toAddImages = (img, {data}) => {
  return data.map(item => {
    item.img = img;
    return item;
  })
};

const getResponse = async() => {
  const apiRes = await fetchAPI();
  const data = JSON.parse(apiRes);
  const img = 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8';
  const result = toAddImages(img, data);
  return result;
};

const getResponseItem = async(id) => {
  const apiRes = await fetchAPIItem(id);
  const data = JSON.parse(apiRes);
  return data;
};

app.use(express.static('public'));

app.get('/', async function(req, res) {
  const result = await getResponse();
  res.render('home', {data: result});
});

app.get('/productList', async function(req, res) {
  const result = await getResponse();
  res.send(result);
});

app.get('/:id', async function(req, res) {
  const id = req.params.id;
  const data = await getResponseItem(id);
  res.render('product', data);
});

app.listen(3000, () => {
  console.log('The web server has started on port 3000');
});
