/**
 * Different Characters
 * @see https://app.codility.com/programmers/task/different_characters/
 * Score 100%
 * Time Complexity detected: O(N), actual: O(N)
 * @see https://app.codility.com/demo/results/trainingR49PFP-DFJ/
 */

/**
 * @param S {string} String of N=[1..1,000,000] lowercase letters=[a..z]
 * @param K {number} Integer=[0..26]
 * @returns {number} The length of the shortest substring that can be removed (to leave K different letters)
 */
const solution = (S, K) => {
    const N = S.length;
    if (K === 0) {
        return N;
    }

    let uniques = [];
    for (let i = 0; i < N; i += 1) {
        const char = S.charCodeAt(i) - 97;
        if (uniques[char] === undefined) {
            uniques[char] = [i, i];
        } else {
            uniques[char][1] = i;
        }
    }
    uniques = uniques.filter(x => x !== undefined);

    if (uniques.length < K) {
        return -1;
    } else if (uniques.length === K) {
        return 0;
    }
    const removeCount = uniques.length - K;

    if (K === 1) {
        let left = 1;
        while (S[left] === S[0]) {
            left += 1;
        }
        let right = 1;
        while (S[S.length - 1 - right] === S[S.length - 1]) {
            right += 1;
        }

        if (S[0] === S[S.length - 1]) {
            return N - left - right;
        } else {
            return N - Math.max(left, right);
        }
    }

    let shortest = Number.POSITIVE_INFINITY;
    const expandSubstring = (start, end, bitmask, bitIndex, count) => {
        if (count === removeCount) {
            const length = end - start + 1;
            if (length < shortest) {
                shortest = length;
            }
            return;
        }

        for (let i = bitIndex; i < uniques.length; i += 1) {
            if ((bitmask & (1 << i)) === 0) {
                const newStart = start < uniques[i][0] ? start : uniques[i][0];
                const newEnd = end > uniques[i][1] ? end : uniques[i][1];
                if (newEnd - newStart + 1 < shortest) {
                    expandSubstring(newStart, newEnd, bitmask | (1 << i), i + 1, count + 1);
                }
            }
        }
    };

    for (let i = 0; i < uniques.length; i += 1) {
        const [start, end] = uniques[i];
        expandSubstring(start, end, 1 << i, i + 1, 1);
    }

    return shortest === Number.POSITIVE_INFINITY ? -1 : shortest;
};
