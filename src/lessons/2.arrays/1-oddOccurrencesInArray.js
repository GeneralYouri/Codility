/**
 * Odd Occurrences in Array
 * @see https://app.codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/
 * Score 100%
 * Time Complexity detected: O(N) or O(N * log(N)), actual: O(N * log(N))
 * @see https://app.codility.com/demo/results/trainingP2CC7J-MUM/
 */

/**
 * @param A {[number]} Array of N=Odd Integer[1..1,000,000] of integers=[1..1,000,000,000]
 * @returns {number} The value of the unpaired element (only value in A to occur an odd number of times)
 */
const solution = (A) =>  {
    const odds = new Set();
    A.forEach((n) => {
        if (odds.has(n)) {
            odds.delete(n);
        } else {
            odds.add(n);
        }
    });
    return Array.from(odds)[0];
};
