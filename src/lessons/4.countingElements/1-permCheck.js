/**
 * Perm Check
 * @see https://app.codility.com/programmers/lessons/4-counting_elements/perm_check/
 * Score 100%
 * Time Complexity detected: O(N) or O(N * log(N)), actual: O(N)
 * @see https://app.codility.com/demo/results/trainingU7CM3S-SBC/
 */

/**
 * @param A {[number]} Array of N=[1..100,000] integers=[1..1,000,000,000]
 * @returns {number} 1 If array A is a permutation, 0 if it is not
 */
const solution = (A) => {
    const N = A.length;
    const found = Array.from(N + 1).fill(false);
    for (let i = 0; i < N; i += 1) {
        if (found[A[i]] || A[i] > N) {
            return 0;
        }
        found[A[i]] = true;
    }
    return 1;
};
