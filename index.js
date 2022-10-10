// from https://github.com/matthewreagan/WebstersEnglishDictionary
const dictionary = require('./dictionary_compact.json')

// Input
const word = "dog"
// for storing all permutation combination
let result = [];
// for storing all valid words
let validWords = [];
const permutations = (length, str, touched) => {
    // return if reached desire length
    if (length == 0) {
        result.push(str);
        if (dictionary[`${str}`]) {
            validWords.push(str)
        }
        return;
    }

    // find all the untouched character that can be append to the current substring
    for (let i = 0; i < word.length; i++) {
        if (!touched[i]) {
            touched[i] = true;
            permutations(length - 1, str + word[i], touched);
            touched[i] = false;
        }
    }
}

const start = (word = '') => {
    // empty array for storing status untouched character
    let temp =[]
    // do permutation will all possible length
    for (let i = 0; i < word.length; i++) {
        permutations(word.length - i, "", temp);
    }

    console.log(validWords);
};
start(word);

