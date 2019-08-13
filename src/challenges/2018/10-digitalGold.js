/**
 * Dividing the Kingdom
 * @see https://app.codility.com/programmers/task/dividing_the_kingdom/
 * Score 100%
 * Time Complexity detected: O(N + M + K), actual: O(N * log(N) +  * log(M)) (Time Complexity of `Array.prototype.sort`)
 * @see https://app.codility.com/demo/results/training9M49D2-JJ6/
 */

/**
 * @param N {number} Integer=[1..100,000]
 * @param M {number} Integer=[1..100,000]
 * @param X {[number]} Array of K=[1..100,000] integers=[0..N−1]
 * @param Y {[number]} Array of K=[1..100,000] integers=[0..M−1]
 * @returns {number} The number of fair divisions of the kingdom
 */
const solution = (N, M, X, Y) => {
    const K = X.length;
    const K2 = Math.floor(K / 2);
    if (2 * K2 !== K) {
        return 0;
    }
    [X, Y].map(Z => Z.sort((a, b) => a - b));
    return X[K2] - X[K2 - 1] + Y[K2] - Y[K2 - 1];
};
