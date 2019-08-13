/**
 * [Unfinished] Balanced Password
 * @see https://app.codility.com/programmers/task/balanced_password/
 */

/**
 * @param S {string} String of N=[0..100,000] lowercase letters=[a..z]
 * @returns {number} The length of the longest balanced substring of S
 */
const solution = (S) =>  {
    const substrings = [];
    let best = 0;

    const chars = new Map();
    chars.set(S[0], 1);
    let start = 0;
    let end = 0;
    while (end < S.length - 1) {
        if (chars.size <= 2) {
            end += 1;
            // chars.set(S[end], (chars.get(S[end]) || 0) + 1);
            if (!chars.has(S[end])) {
                chars.set(S[end], 1);
            } else {
                chars.set(S[end], chars.get(S[end]) + 1);
            }
            continue;

            // const charCounts = Array.from(chars.values());
            // const length = end - start + 1;
            // if (charCounts[0] === charCounts[1] && length > best) {
            //     best = length;
            // }
        }
        substrings.push([start, end - 1]);

        while (chars.size === 3) {
            if (chars.get(S[start]) === 1) {
                chars.delete(S[start]);
            } else {
                chars.set(S[start], chars.get(S[start]) - 1);
            }
            start += 1;
        }
    }
    if (chars.size === 2) {
        substrings.push([start, end]);
    }

    if (substrings.length === 0) {
        return 0;
    }

    console.log(substrings);
    return best;
};
