import Translator from '../../components/translator'; 

export default async function handler(req, res) {
  const translator = new Translator();
  let translatedText = '';
  const { text, locale } = req.body;

  if (!locale || text === undefined) {
    return res.status(400).json({ error: 'Required field(s) missing' });
  }
  if (text === '') {
    return res.status(400).json({ error: 'No text to translate' });
  }
  if (locale === 'british-to-american') {
    translatedText = translator.britishToAmerican(text);
  } else if (locale === 'american-to-british') {
    translatedText = translator.americanToBritish(text);
  } else {
    return res.status(400).json({ error: 'Invalid value for locale field' });
  }
  return res.status(200).json({ text: text, translation: translatedText });
}
