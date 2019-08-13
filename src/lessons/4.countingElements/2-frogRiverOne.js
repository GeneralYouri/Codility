/**
 * Frog River One
 * @see https://app.codility.com/programmers/lessons/4-counting_elements/frog_river_one/
 * Score 100%
 * Time Complexity detected: O(N), actual: O(N)
 * @see https://app.codility.com/demo/results/trainingGSH2H5-6NQ/
 */

/**
 * @param X {number} End position integer=[1..100,000]
 * @param A {[number]} Array of N=[1..100,000] integers=[1..X]
 * @returns {number} The earliest time when the frog can jump to the other side of the river
 */
const solution = (X, A) => {
    const leaves = Array(X + 1).fill(false);
    let waitingOn = X;
    for (let i = 0; i < A.length; i += 1) {
        if (leaves[A[i]]) {
            continue;
        }

        leaves[A[i]] = true;
        waitingOn -= 1;
        if (waitingOn === 0) {
            return i;
        }
    }
    return -1;
};
