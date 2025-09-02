//  Create a function that takes a list of numbers and returns the mean, median,
//  and mode.

let nums = [2, 3, 3, 3, 4];

function calculateStats(nums) {
    // Mean
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    let mean = Number((sum / nums.length).toFixed(2));

    // Median
    nums.sort((a, b) => a - b);
    let middle = Math.floor(nums.length / 2);
    let median;
    if (nums.length % 2 !== 0) {
        median = nums[middle];
    } else {
        median = (nums[middle - 1] + nums[middle]) / 2;
    }

    // Mode
    let freq = {};
    let maxFreq = 0;
    let modes = [];

    for (let num of nums) {
        freq[num] = (freq[num] || 0) + 1;
        if (freq[num] > maxFreq) {
            maxFreq = freq[num];
        }
    }

    for (let key in freq) {
        if (freq[key] === maxFreq) {
            modes.push(Number(key));
        }
    }

    let mode;
    if (modes.length === Object.keys(freq).length) {
        mode = "No mode";
    } else {
        mode = modes.length === 1 ? modes[0] : modes;
    }

    // Return everything in one object
    return {
        mean: mean,
        median: median,
        mode: mode
    };
}
console.log(calculateStats(nums));

