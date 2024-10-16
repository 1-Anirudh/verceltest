const express = require('express');
const session = require('express-session');

const app = express();
const port = 3000;

app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set to true if using HTTPS
}));

app.get('/', (req, res) => {
  if (!req.session.message) {
    req.session.message = 'Hi';
  }
  res.send(req.session.message);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});