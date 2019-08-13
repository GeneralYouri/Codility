/**
 * Falling Disks
 * @see https://app.codility.com/programmers/task/falling_disks/
 * Score 100%
 * Time Complexity detected: O(N), actual: O(N + M * log(K)); with K = O(N)
 * @see https://app.codility.com/demo/results/trainingQ87SXX-ES9/
 */

/**
 * @param A {[number]} Array of N=[1..200,000] integers within the range [1..1,000,000,000]
 * @param B {[number]} Array of M=[1..200,000] integers within the range [1..1,000,000,000]
 * @returns {number} The number of disks that will fit into the well
 */
const solution = (A, B) => {
    if (B[0] > A[0]) {
        return 0;
    }

    const K = [];
    for (let i = 0, last = Number.POSITIVE_INFINITY; i < A.length; i += 1) {
        if (A[i] < last) {
            K.push([A[i], i]);
            last = A[i];
        }
    }
    K.push([0, A.length]);

    const getDeepestFloor = (b, from, to) => {
        while (to - from > 1) {
            const middle = Math.floor((from + to) / 2);
            [from, to] = (b > K[middle][0]) ? [from, middle] : [middle, to];
        }

        return (b > K[from][0]) ? from : to;
    };

    const limit = Math.min(A.length, B.length);
    let remaining = A.length;
    let count = 0;
    for (let i = 0; i < limit; i += 1) {
        if (B[i] > B[i - 1] || i === 0) {
            const deepest = K[getDeepestFloor(B[i], 0, K.length)][1];
            if (deepest < remaining) {
                remaining = deepest;
            }
        }

        if (remaining <= 0) {
            break;
        }

        remaining -= 1;
        count += 1;
    }

    return count;
};
