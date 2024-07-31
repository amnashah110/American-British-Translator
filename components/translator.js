const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

const american = Object.keys(americanToBritishSpelling);
const british = Object.values(americanToBritishSpelling);
const onlyFromAmerican = Object.keys(americanOnly);
const onlyFromBritish = Object.keys(britishOnly);
const americanTitles = Object.keys(americanToBritishTitles);
const britishTitles = Object.values(americanToBritishTitles);

class Translator {
    britishToAmerican(text) {
        let translatedText = text;
        const timeRegex = /\b\d{1,2}\.\d{2}\b/g; 
        if (timeRegex.test(text)) {
            text = text.replace(timeRegex, (match) => {
                const [hours, minutes] = match.split('.');
                return `<span class="highlight">${hours}:${minutes}</span>`;
            });
        }
        british.forEach(word => {
            const regex = new RegExp(`\\b${word}\\b`, 'gi');
            if (regex.test(text)) {
                const americanWord = american.find(key => americanToBritishSpelling[key].toLowerCase() === word.toLowerCase());
                const replacing = `<span class="highlight">${americanWord}</span>`
                text = text.replace(regex, replacing);
            }
        });
        britishTitles.forEach(word => {
            const regex = new RegExp(`\\b${word}\\b(?!\\.)`, 'gi');
            let newWord = word;
            newWord += '.';
            newWord = newWord.charAt(0).toUpperCase() + newWord.slice(1);
            const replacing = `<span class="highlight">${newWord}</span>`
            text = text.replace(regex, replacing);
        });
        onlyFromBritish.forEach(word => {
            const regex = new RegExp(`\\b${word}\\b`, 'gi');
            const regexDone = new RegExp(`<span class="highlight">.*?\\b${word}\\b.*?</span>`, 'gi');
            if (regex.test(text) && !regexDone.test(text)) {
                const replacing = `<span class="highlight">${britishOnly[word]}</span>`
                text = text.replace(regex, replacing);
                return text;
            }
        });
        if (translatedText === text) {
            return "Everything looks good to me!";
        }
        return text;
    }

    americanToBritish(text) {
        let translatedText = text;
        const timeRegex = /\d+:\d+/;
        if (timeRegex.test(text)) {
            text = text.replace(timeRegex, (match) => `<span class="highlight">${match.replace(/:/g, '.')}</span>`);
        }
        american.forEach(word => {
            const regex = new RegExp(`\\b${word}\\b`, 'gi');
            if (regex.test(text)) {
                const replacing = `<span class="highlight">${americanToBritishSpelling[word]}</span>`
                text = text.replace(regex, replacing);
            }
        });
        americanTitles.forEach(word => {
            const regex = new RegExp(`${word}`, 'gi');
            if (regex.test(text)) {
                let newWord = americanToBritishTitles[word];
                newWord = newWord.charAt(0).toUpperCase() + newWord.slice(1);
                const replacing = `<span class="highlight">${newWord}</span>`
                text = text.replace(regex, replacing);
            }
        });
        onlyFromAmerican.forEach(word => {
            const regex = new RegExp(`(?<!<span[^>]*>)\\b${word}\\b(?!<\/span>)`, 'gi');
            const regexDone = new RegExp(`<span class="highlight">.*?\\b${word}\\b.*?</span>`, 'gi');
            if (regex.test(text) && !regexDone.test(text)) {
                const replacing = `<span class="highlight">${americanOnly[word]}</span>`
                text = text.replace(regex, replacing);
            }
        });
        if (translatedText === text) {
            return "Everything looks good to me!";
        }
        return text;
    }
}

module.exports = Translator;