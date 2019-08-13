/**
 * Passing Cars
 * @see https://app.codility.com/programmers/lessons/5-prefix_sums/passing_cars/
 * Score 100%
 * Time Complexity detected: O(N), actual: O(N)
 * @see https://app.codility.com/demo/results/trainingJTMNE9-CY5/
 */

/**
 * @param A {[number]} Array of N=[1..100,000] integers=[0,1]
 * @returns {number} The number of pairs of passing cars
 */
function solution(A) {
    let count = 0;
    let zeroesLeft = 0;
    for (let i = 0; i < A.length; i += 1) {
        if (A[i] === 0) {
            zeroesLeft += 1;
        } else {
            count += zeroesLeft;
            if (count > 1e9) {
                return -1;
            }
        }
    }
    return count;
}
