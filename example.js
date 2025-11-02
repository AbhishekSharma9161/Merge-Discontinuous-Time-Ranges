const { mergeTimeRanges } = require('./mergeTimeRanges');

// Example usage
console.log('=== Time Range Merger Examples ===\n');

// Example 1: Basic overlapping ranges
const ranges1 = [[1000, 3000], [2000, 5000], [6000, 8000]];
const threshold1 = 500;
console.log('Example 1 - Overlapping ranges:');
console.log('Input:', ranges1);
console.log('Threshold:', threshold1);
console.log('Output:', mergeTimeRanges(ranges1, threshold1));
console.log();

// Example 2: Ranges within threshold
const ranges2 = [[1000, 2000], [2500, 3500], [4000, 5000]];
const threshold2 = 1000;
console.log('Example 2 - Ranges within threshold:');
console.log('Input:', ranges2);
console.log('Threshold:', threshold2);
console.log('Output:', mergeTimeRanges(ranges2, threshold2));
console.log();

// Example 3: Unsorted ranges
const ranges3 = [[6000, 8000], [1000, 3000], [2000, 5000]];
const threshold3 = 0;
console.log('Example 3 - Unsorted ranges (no threshold):');
console.log('Input:', ranges3);
console.log('Threshold:', threshold3);
console.log('Output:', mergeTimeRanges(ranges3, threshold3));
console.log();

// Example 4: Ranges too far apart
const ranges4 = [[1000, 2000], [5000, 6000], [10000, 11000]];
const threshold4 = 1000;
console.log('Example 4 - Ranges too far apart:');
console.log('Input:', ranges4);
console.log('Threshold:', threshold4);
console.log('Output:', mergeTimeRanges(ranges4, threshold4));
console.log();