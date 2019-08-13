/**
 * Binary Gap
 * @see https://app.codility.com/programmers/lessons/1-iterations/binary_gap/
 * Score 100%
 * Time Complexity detected: none, actual: O(log(N))
 * @see https://app.codility.com/demo/results/training9WU6HS-CMU/
 */

/**
 * @param N {number} Integer=[1..2,147,483,647]
 * @returns {number} The length of the longest binary gap of N
 */
const solution = N => Math.max(0, ...(N.toString(2).match(/10+(?=1)/g) || []).map(s => s.length - 1));
