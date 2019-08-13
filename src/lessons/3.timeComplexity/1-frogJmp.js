/**
 * Frog Jump
 * @see https://app.codility.com/programmers/lessons/3-time_complexity/frog_jmp/
 * Score 100%
 * Time Complexity detected: O(1), actual: O(1)
 * @see https://app.codility.com/demo/results/training6HAETZ-BDB/
 */

/**
 * @param X {number} Start position integer=[1..1,000,000,000], X<=Y
 * @param Y {number} End position integer=[1..1,000,000,000]
 * @param D {number} Jump distance integer=[1..1,000,000,000]
 * @returns {number} The minimal number of jumps from position X to a position equal to or greater than Y
 */
const solution = (X, Y, D) => Math.ceil((Y - X) / D);
