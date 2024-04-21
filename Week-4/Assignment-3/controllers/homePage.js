const fs = require('fs');

const loadHomePage = (req, res) => {
  const errorMessage = req.query.error;

  fs.readFile('./public/index.html', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading home.html:', err);
      return res.status(500).send('Internal Server Error');
    }

    if (errorMessage) {
      const errorMessageHTML = `<p style="color: red;">${errorMessage}</p>`;
      data = data.replace('<div id="errorMessage"></div>', errorMessageHTML);
    }

    res.send(data);
  });
}

module.exports = loadHomePage;