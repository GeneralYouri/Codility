/**
 * Tape Equilibrium
 * @see https://app.codility.com/programmers/lessons/3-time_complexity/tape_equilibrium/
 * Score 100%
 * Time Complexity detected: O(N), actual: O(N)
 * @see https://app.codility.com/demo/results/trainingBDGEN3-GPH/
 */

/**
 * @param A {[number]} Array of N=[2..100,000] integers=[−1,000..1,000]
 * @returns {number} The minimal difference that can be achieved (see above link)
 */
const solution = (A) => {
    const N = A.length;
    const prefixSum = [A[0]];
    for (let i = 1; i < N; i += 1) {
        prefixSum[i] = prefixSum[i - 1] + A[i];
    }

    const totalSum = prefixSum[N - 1];
    let best = Number.POSITIVE_INFINITY;
    for (let P = 1; P < N; P += 1) {
        const diff = Math.abs(2 * prefixSum[P - 1] - totalSum);
        if (diff < best) {
            best = diff;
        }
    }
    return best;
};
