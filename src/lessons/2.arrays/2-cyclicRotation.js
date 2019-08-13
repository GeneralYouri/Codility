/**
 * Cyclic Rotation
 * @see https://app.codility.com/programmers/lessons/2-arrays/cyclic_rotation/
 * Score 100%
 * Time Complexity detected: none, actual: O(N)
 * @see https://app.codility.com/demo/results/trainingXRGA89-7ZZ/
 */

/**
 * @param A {[number]} Array of N=[0..100] integers=[−1,000..1,000]
 * @param K {number} Number of rotations integer=[0..100]
 * @returns {*[]}
 */
const solution = (A, K) => {
    const i = A.length - (K % A.length);
    return [...A.slice(i), ...A.slice(0, i)];
};
