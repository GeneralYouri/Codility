/**
 * Perm Missing Elem
 * @see https://app.codility.com/programmers/lessons/3-time_complexity/perm_missing_elem/
 * Score 100%
 * Time Complexity detected: O(N) or O(N * log(N)), actual: O(N)
 * @see https://app.codility.com/demo/results/trainingSWWMKU-WFG/
 */

/**
 * @param A {[number]} Array of N=[0..100,000] unique integers=[1..N+1]
 * @returns {number} The value of the missing element
 */
const solution = (A) => {
    const N = A.length;
    const found = Array(N + 2);
    A.forEach((n) => {
        found[n] = true;
    });
    for (let n = 1; n < N + 2; n += 1) {
        if (!found[n]) {
            return n;
        }
    }
};
