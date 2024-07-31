'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/')
    .post((req, res) => {
      let translatedText = '';
      const { text, locale } = req.body;
      if(!locale || text === undefined) {
        return res.json({ error: 'Required field(s) missing' });
      }
      if (text === '') {
        return res.json({ error: 'No text to translate' });
      }
      if (locale === 'british-to-american') {
        translatedText = translator.britishToAmerican(text);
      } else if (locale === 'american-to-british') {
        translatedText = translator.americanToBritish(text);
      } else {
        return res.json({ error: 'Invalid value for locale field' });
      }
      return res.json({text: text, translation: translatedText});
    });
};
