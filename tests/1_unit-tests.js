const chai = require('chai');
const assert = chai.assert;
const Translator = require('../components/translator.js');

const translator = new Translator();

suite('Unit Tests', () => {
    test('Equal', function() {
        const american = 'Mangoes are my favorite fruit.';
        const british = 'Mangoes are my <span class="highlight">favourite</span> fruit.';
        const replace = translator.americanToBritish(american);
        assert.equal(replace, british);
    });
    test('Equal', function() {
        const american = 'I ate yogurt for breakfast.';
        const british = 'I ate <span class="highlight">yoghurt</span> for breakfast.';
        const replace = translator.americanToBritish(american);
        assert.equal(replace, british);
    });
    test('Equal', function() {
        const american = "We had a party at my friend's condo.";
        const british = 'We had a party at my friend\'s <span class="highlight">flat</span>.';
        const replace = translator.americanToBritish(american);
        assert.equal(replace, british);
    });
    test('Equal', function() {
        const american = 'Can you toss this in the trashcan for me?';
        const british = 'Can you toss this in the <span class="highlight">bin</span> for me?';
        const replace = translator.americanToBritish(american);
        assert.equal(replace, british);
    });
    test('Equal', function() {
        const american = 'The parking lot was full.';
        const british = 'The <span class="highlight">car park</span> was full.';
        const replace = translator.americanToBritish(american);
        assert.equal(replace, british);
    });
    test('Equal', function() {
        const american = 'Like a high tech Rube Goldberg machine.';
        const british = 'Like a high tech <span class="highlight">Heath Robinson device</span>.';
        const replace = translator.americanToBritish(american);
        assert.equal(replace, british);
    });
    test('Equal', function() {
        const american = 'To play hooky means to skip class or work.';
        const british = 'To <span class="highlight">bunk off</span> means to skip class or work.';
        const replace = translator.americanToBritish(american);
        assert.equal(replace, british);
    });
    test('Equal', function() {
        const american = 'No Mr. Bond, I expect you to die.';
        const british = 'No <span class="highlight">Mr</span> Bond, I expect you to die.';
        const replace = translator.americanToBritish(american);
        assert.equal(replace, british);
    });
    test('Equal', function() {
        const american = 'Dr. Grosh will see you now.';
        const british = '<span class="highlight">Dr</span> Grosh will see you now.';
        const replace = translator.americanToBritish(american);
        assert.equal(replace, british);
    });
    test('Equal', function() {
        const american = 'Lunch is at 12:15 today.';
        const british = 'Lunch is at <span class="highlight">12.15</span> today.';
        const replace = translator.americanToBritish(american);
        assert.equal(replace, british);
    });
    test('Equal', function() {
        const british = 'We watched the footie match for a while.';
        const american = 'We watched the <span class="highlight">soccer</span> match for a while.';
        const replace = translator.britishToAmerican(british);
        assert.equal(replace, american);
    });
    test('Equal', function() {
        const british = 'Paracetamol takes up to an hour to work.';
        const american = '<span class="highlight">Tylenol</span> takes up to an hour to work.';
        const replace = translator.britishToAmerican(british);
        assert.equal(replace, american);
    });
    test('Equal', function() {
        const british = 'First, caramelise the onions.';
        const american = 'First, <span class="highlight">caramelize</span> the onions.';
        const replace = translator.britishToAmerican(british);
        assert.equal(replace, american);
    });
    test('Equal', function() {
        const british = 'I spent the bank holiday at the funfair.';
        const american = 'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.';
        const replace = translator.britishToAmerican(british);
        assert.equal(replace, american);
    });
    test('Equal', function() {
        const british = 'I had a bicky then went to the chippy.';
        const american = 'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.';
        const replace = translator.britishToAmerican(british);
        assert.equal(replace, american);
    });
    test('Equal', function() {
        const british = "I've just got bits and bobs in my bum bag.";
        const american = 'I\'ve just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.';;
        const replace = translator.britishToAmerican(british);
        assert.equal(replace, american);
    });
    test('Equal', function() {
        const british = 'The car boot sale at Boxted Airfield was called off.';
        const american = 'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.';
        const replace = translator.britishToAmerican(british);
        assert.equal(replace, american);
    });
    test('Equal', function() {
        const british = 'Have you met Mrs Kalyani?';
        const american = 'Have you met <span class="highlight">Mrs.</span> Kalyani?';
        const replace = translator.britishToAmerican(british);
        assert.equal(replace, american);
    });
    test('Equal', function() {
        const british = "Prof Joyner of King's College, London.";
        const american = '<span class="highlight">Prof.</span> Joyner of King\'s College, London.';
        const replace = translator.britishToAmerican(british);
        assert.equal(replace, american);
    });
    test('Equal', function() {
        const british = "Tea time is usually around 4 or 4.30.";
        const american = 'Tea time is usually around 4 or <span class="highlight">4:30</span>.';
        const replace = translator.britishToAmerican(british);
        assert.equal(replace, american);
    });
    test('Equal', function() {
        const american = 'Mangoes are my favorite fruit.';
        const british = 'Mangoes are my <span class="highlight">favourite</span> fruit.';
        const replace = translator.americanToBritish(american);
        assert.equal(replace, british);
    });
    test('Equal', function() {
        const american = 'I ate yogurt for breakfast.';
        const british = 'I ate <span class="highlight">yoghurt</span> for breakfast.';
        const replace = translator.americanToBritish(american);
        assert.equal(replace, british);
    });
    test('Equal', function() {
        const british = 'We watched the footie match for a while.';
        const american = 'We watched the <span class="highlight">soccer</span> match for a while.';
        const replace = translator.britishToAmerican(british);
        assert.equal(replace, american);
    });
    test('Equal', function() {
        const british = 'Paracetamol takes up to an hour to work.';
        const american = '<span class="highlight">Tylenol</span> takes up to an hour to work.';
        const replace = translator.britishToAmerican(british);
        assert.equal(replace, american);
    });
});
