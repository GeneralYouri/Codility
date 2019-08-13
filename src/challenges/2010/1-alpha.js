/**
 * Prefix Set
 * @see https://app.codility.com/programmers/task/prefix_set/
 * Score 100%
 * Time Complexity detected: O(N) or O(N * log(N)), actual: O(N)
 * @see https://app.codility.com/demo/results/trainingSX7U79-DXX/
 */

/**
 * @param A {[number]} Array of N=[1..1,000,000] integers=[0..N-1]
 * @returns {number} The first covering prefix of A
 */
const solution = (A) => {
    const prefix = {};
    let last = 0;
    for (let i = 0; i < A.length; i += 1) {
        if (!prefix[A[i]]) {
            prefix[A[i]] = true;
            last = i;
        }
    }
    return last;
};

// Golfed
// f=A=>A.map((v,i)=>f[v]||(f[v]=l=i))&&l
