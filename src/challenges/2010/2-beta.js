/**
 * [Unfinished] Number of Disc Intersections
 * @see https://app.codility.com/programmers/task/number_of_disc_intersections/
 * Score 81%; lacks performance
 * Time Complexity detected: O(N^2), actual: O(N^2)
 * @see https://app.codility.com/demo/results/trainingEE328A-XYM/
 */

/**
 * @param A {[number]} Array of N=[0..100,000] integers=[0..2,147,483,647]
 * @returns {number} The number of (unordered) pairs of intersecting discs
 */
const solution = (A) => {
    let count = 0;
    for (let i = 0; i < A.length; i += 1) {
        const x = A[i];
        for (let j = i + 1; j < A.length; j += 1) {
            const y = A[j];
            if (j - i <= x + y) {
                if (count === 10000000) {
                    return -1;
                }
                count += 1;
            }
        }
    }
    return count;
};

/*
// (Vorados) Faster approach in Swift
func solution(_ disks: [Int]) -> Int {
    let sorted = disks.enumerated()
        .map { index, element in (left: index - element, right: index + element) }
.sorted(by: { a, b in a.right < b.right })

    var sum = 0

    for (index, disk) in sorted.enumerated() {
        var i = 0
        var j = index

        while i < j {
            let mid = (i + j) / 2
            let other = sorted[mid]

            if disk.left <= other.right {
                j = mid
            } else {
                i = mid + 1
            }
        }

        sum += index - i
    }

    return sum > 10_000_000 ? -1 : sum
}

// (Vorados) Faster approach in Rust
struct Disk {
    left: i32,
        right: i32,
}

fn solution(radii: &[i32]) -> i32 {
    let mut disks = (0..)
        .zip(radii)
        .map(|(i, &r)| Disk {
        left: i - r,
            right: i + r,
    })
.collect::<Vec<_>>();

    disks.sort_by_key(|d| d.right);
    let mut sum = 0;

    for (i, disk) in disks.iter().enumerate() {
        let j = match disks[..i].binary_search_by(|d| d.right.cmp(&disk.left)) {
            Ok(j) => j,
                Err(j) => j,
        };
        sum += (i - j) as i32;

        if sum > 10_000_000 {
            return -1;
        }
    }

    sum
}
*/
