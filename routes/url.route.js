// url.route.js
const express = require('express');
const urlRouter = express.Router();
const shortid = require('shortid');
const { UrlModel } = require("../models/url.model");

// Route for creating a short URL
urlRouter.post('/shorten', async (req, res) => {
  const { originalUrl } = req.body;
  const shortUrl = shortid.generate();

  try {
    // Save the original and short URL to the database

    let isPresent= await UrlModel.findOne({originalUrl})
    console.log(isPresent);

    if(isPresent){
      return res.json(isPresent.shortUrl)
    }
    const url = new UrlModel({
      originalUrl,
      shortUrl
    });
    await url.save();

    res.json({ url });
  } catch (error) {
    console.error("Error while shortening URL:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route for getting the original URL from the short URL
urlRouter.get('/:shortUrl', async (req, res) => {
  const { shortUrl } = req.params;

  try {
    // Find the original URL in the database using the short URL
    const url = await UrlModel.findOne({ shortUrl });

    if (!url) {
      return res.status(404).json({ error: 'URL not found' });
    }

    res.redirect(url.originalUrl);
  } catch (error) {
    console.error("Error while redirecting:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = {urlRouter};
