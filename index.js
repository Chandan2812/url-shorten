const express = require('express');
const shortid = require('shortid');
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/shorten', (req, res) => {
  const longUrl = req.body.longUrl;
  const shortUrl = shortid.generate(); // Adjust this URL accordingly

  res.json({ shortUrl });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
