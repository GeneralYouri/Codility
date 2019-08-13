/**
 * Concatenating of Words
 * @see https://app.codility.com/programmers/task/concatenating_of_words/
 * Score 100%
 * Time Complexity detected: O(S), actual: O(S); with S = sum of the lengths of words
 * @see https://app.codility.com/demo/results/trainingEDWP87-2BW/
 */

/**
 * @param string {string} String from which to retrieve a charCode
 * @param index {number} Index at which to retrieve a charCode
 * @returns {number} The 0-based charCode of the specified lowercase letter
 */
const getCharIndex = (string, index) => {
    return string.charCodeAt(index) - 97;
};

/**
 * @param words {[string]} Array of N=[1..100,000] words=non-empty strings of [a..z]
 * @returns {number} The length of the longest substring of a word created as described (see link above)
 */
const solution = (words) => {
    // prefixData[best1, best2, best1 id], infixData (1char length), suffixData[best1, best2, best1 id]
    const charData = Array.from(Array(26)).map(() => [[0, 0, -1], 0, [0, 0, -1]]);
    const regexes = Array.from(Array(26)).map((_, i) => new RegExp(String.fromCharCode(i + 97), 'g'));

    for (let i = 0; i < words.length; i += 1) {
        const word = words[i];
        const firstIndex = getCharIndex(word, 0);
        const lastIndex = getCharIndex(word, word.length - 1);
        const remainder = word.replace(regexes[firstIndex], '');

        if (remainder === '') {
            charData[firstIndex][1] += word.length;
        } else {
            let left = 1;
            while (word[left] === word[0]) {
                left += 1;
            }
            let right = 1;
            while (word[word.length - 1 - right] === word[word.length - 1]) {
                right += 1;
            }

            const prefixData = charData[firstIndex][0];
            if (left > prefixData[0]) {
                prefixData[1] = prefixData[0];
                prefixData[0] = left;
                prefixData[2] = i;
            } else if (left > prefixData[1]) {
                prefixData[1] = left;
            }

            const suffixData = charData[lastIndex][2];
            if (right > suffixData[0]) {
                suffixData[1] = suffixData[0];
                suffixData[0] = right;
                suffixData[2] = i;
            } else if (right > suffixData[1]) {
                suffixData[1] = right;
            }
        }
    }

    let best = 0;
    for (let i = 0; i < 26; i += 1) {
        const [prefixData, infixData, suffixData] = charData[i];
        let length = infixData;

        if (prefixData[2] === suffixData[2]) {
            length += Math.max(prefixData[0] + suffixData[1], prefixData[1] + suffixData[0]);
        } else {
            length += prefixData[0] + suffixData[0];
        }
        if (length > best) {
            best = length;
        }
    }

    const text = words.join('');
    let char = text[0];
    let length = 1;
    for (let i = 1; i < text.length; i += 1) {
        if (text[i] === char) {
            length += 1;
            continue;
        }

        if (length > best) {
            best = length;
        }
        char = text[i];
        length = 1;
    }

    return best;
};
