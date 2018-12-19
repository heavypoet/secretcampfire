const express = require('express')
const basicAuth = require('express-basic-auth')
const http = require('http')
const path = require('path')
const PORT = process.env.PORT || 5000

var app = express()

app
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))


app.get('/feed/:index?', function (req, res) {
  res.setHeader('Content-Type', 'application/json');

  var testUrl = "http://" + req.headers.host + "/test_feed.json";
  http.get(testUrl, function(_res) {
    var body = '';
    _res.on('data', function(chunk) {
      body += chunk;
    });
    _res.on('end', function() {
      res.send(body);
    });
  });

	//if (req.params['index'] > 1)
	//{
  //	res.send(JSON.stringify({}));
  //  return;
  //}
})

app.get('/post/:id', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ 
    'path': 'post',
    'params': req.params
  }));
})

app.get('/render/:uri', function (req, res) {
  res.render('pages/render', {
    'uri': req.params['uri']
  });
})

// protected routes below

app.use(basicAuth({ 
  users: { 'admin': 'password' }, // FIXME
  challenge: true
}))

app.get('/dashboard/:index?', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ 
    'path': 'dashboard',
    'params': req.params
  }));
})

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
