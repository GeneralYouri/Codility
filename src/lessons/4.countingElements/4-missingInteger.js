/**
 * Missing Integer
 * @see https://app.codility.com/programmers/lessons/4-counting_elements/missing_integer/
 * Score 100%
 * Time Complexity detected: O(N) or O(N * log(N)), actual: O(N)
 * @see https://app.codility.com/demo/results/trainingE6CYVT-87Y/
 */

/**
 * @param A {[number]} Array of N=[1..100,000] integers=[−1,000,000..1,000,000]
 * @returns {number} The smallest positive integer>0 that does not occur in A
 */
const solution = (A) => {
    const found = [true];
    for (let i = 0; i < A.length; i += 1) {
        found[A[i]] = true;
    }
    for (let i = 0; i < found.length; i += 1) {
        if (!found[i]) {
            return i;
        }
    }
    return found.length;
};
