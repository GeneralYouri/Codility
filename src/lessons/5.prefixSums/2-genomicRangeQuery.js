/**
 * [Unfinished] Genomic Range Query
 * @see https://app.codility.com/programmers/lessons/5-prefix_sums/genomic_range_query/
 * Score 62%; lacks performance
 * Time Complexity detected: O(N * M), actual: O(N * M)
 * @see https://app.codility.com/demo/results/trainingQA9777-M2M/
 */

/**
 * @param S {string} String of N=[1..100,000] characters=[A,C,G,T]
 * @param P {[number]} Array of M=[1..50,000] integers=[0..N−1], P[K] ≤ Q[K]
 * @param Q {[number]} Array of M=[1..50,000] integers=[0..N−1]
 * @returns {[number]} Array of M integers specifying the consecutive answers to all queries
 */
function solution(S, P, Q) {
    S = S.replace(/A/g, '1').replace(/C/g, '2').replace(/G/g, '3').replace(/T/g, '4');
    const result = [];
    for (let K = 0; K < P.length; K += 1) {
        let minimum = Number(S[P[K]]);
        for (let i = P[K] + 1; i <= Q[K]; i += 1) {
            minimum = Math.min(minimum, Number(S[i]));
            if (minimum === 1) {
                break;
            }
        }
        result.push(minimum);
    }
    return result;
}

// 2132241
// 2111111 1111111
// 2233344 4444441
