/**
 * Max Counters
 * @see https://app.codility.com/programmers/lessons/4-counting_elements/max_counters/
 * Score 100%
 * Time Complexity detected: O(N + M), actual: O(N * M)
 * @see https://app.codility.com/demo/results/trainingR2FWU2-H9B/
 */

/**
 * @param N {number} Integer=[1..100,000]
 * @param A {[number]} Array of M=[1..100,000] integers=[1..N+1]
 * @returns {[number]} Array of N integers representing the values of the counters
 */
const solution = (N, A) => {
    const counters = Array(N + 1).fill(0);
    let maxValue = 0;
    let changed = false;
    for (let i = 0; i < A.length; i += 1) {
        if (A[i] <= N) {
            changed = true;
            counters[A[i]] += 1;
            maxValue = Math.max(maxValue, counters[A[i]]);
        } else if (changed) {
            changed = false;
            counters.fill(maxValue);
        }
    }
    return counters.slice(1);
};
