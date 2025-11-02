/**
 * Merges time ranges that overlap or are close together
 * @param {Array} ranges - Array of [start, end] time ranges
 * @param {number} threshold - Maximum gap allowed between ranges to merge them
 * @returns {Array} - Merged ranges
 */
function mergeTimeRanges(ranges, threshold) {
    // If no ranges, return empty
    if (!ranges || ranges.length === 0) {
        return [];
    }

    // Sort ranges by start time
    ranges.sort((a, b) => a[0] - b[0]);

    const result = [];
    let currentRange = ranges[0];

    // Go through each range
    for (let i = 1; i < ranges.length; i++) {
        const nextRange = ranges[i];
        const gap = nextRange[0] - currentRange[1];

        // If gap is small enough, merge the ranges
        if (gap <= threshold) {
            currentRange[1] = Math.max(currentRange[1], nextRange[1]);
        } else {
            // Gap too big, save current range and start new one
            result.push(currentRange);
            currentRange = nextRange;
        }
    }

    // Add the last range
    result.push(currentRange);
    return result;
}

module.exports = { mergeTimeRanges };

// Test the function when run directly
if (require.main === module) {
    const args = process.argv.slice(2);

    if (args.length < 2) {
        console.log('Usage: node mergeTimeRanges.js "[[start,end],[start,end]]" threshold');
        console.log('Example: node mergeTimeRanges.js "[[1000,3000],[2000,5000]]" 500');
    } else {
        const ranges = JSON.parse(args[0]);
        const threshold = parseInt(args[1]);

        console.log('Input:', JSON.stringify(ranges));
        console.log('Threshold:', threshold);
        console.log('Output:', JSON.stringify(mergeTimeRanges(ranges, threshold)));
    }
}