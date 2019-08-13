/**
 * Dividing the Kingdom
 * @see https://app.codility.com/programmers/task/dividing_the_kingdom/
 * Score 100%
 * Time Complexity detected: O(N + M + K), actual: O(N + M + K)
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

    const helper = (Z, size) => {
        const counts = Array(size).fill(0);
        for (let i = 0; i < Z.length; i += 1) {
            counts[Z[i]] += 1;
        }

        let count = 0;
        let lastI = -1;
        let i = -1;
        while (count <= K2) {
            lastI = i;
            do {
                i += 1;
            } while (counts[i] === 0);
            count += counts[i];
        }

        return (count - counts[i] === K2) ? i - lastI : 0;
    };

    return helper(X, N) + helper(Y, M);
};
