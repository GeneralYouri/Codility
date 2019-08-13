/**
 * [Unfinished] Count Palindromic Slices
 * @see https://app.codility.com/programmers/task/count_palindromic_slices/
 * Score 78%; lacks performance
 * Time Complexity detected: O(N^2), actual: O(N^2)
 * @see https://app.codility.com/demo/results/trainingQ87SXX-ES9/
 */

/**
 * @param S {string} String of N=[0..20,000] lowercase letters=[a..z]
 * @param i {number} The start index of the palindrome i=[0..N-2]
 * @param j {number} The end index of the palindrome j=[1..N-1]
 * @returns {number} The number of palindromes centered at the indices i-j
 */
const countPalindromesAt = (S, i, j) => {
    let count = 0;
    while (i >= 0 && j < S.length && S[i] === S[j]) {
        count += 1;
        i -= 1;
        j += 1;
    }
    return count;
};

/**
 * @param S {string} A string of lowercase letters a-z
 * @returns {number} The number of palindromic slices of S
 */
const solution = (S) => {
    const remainder = S.replace(new RegExp(S[0], 'g'), '');
    if (remainder === '') {
        const count = (S.length - 1) / 2 * S.length;
        return (count > 1e8) ? -1 : count;
    }

    let count = S[0] === S[1] ? 1 : 0;
    for (let i = 2; i < S.length; i += 1) {
        count += countPalindromesAt(S, i - 2, i) + countPalindromesAt(S, i - 1, i);
        if (count > 1e8) {
            return -1;
        }
    }
    return count;
};
