# Time Range Merger - NodeJS Module

A NodeJS module that merges discontinuous time ranges within a given threshold.

## Assignment Details
- **Subject**: SDE Assignment - Nov 2025
- **Company**: Saralweb
- **Submission**: NodeJS Module

## Module Description

This module provides a function to merge overlapping or closely spaced time ranges based on a configurable threshold.

## Installation

```bash
npm install
```

## Usage

### As a Module

```javascript
const { mergeTimeRanges } = require('./mergeTimeRanges');

const ranges = [[1000, 3000], [2000, 5000], [6000, 8000]];
const threshold = 500;

const result = mergeTimeRanges(ranges, threshold);
console.log(result); // [[1000, 5000], [6000, 8000]]
```

### Command Line Usage

```bash
# Basic usage
node mergeTimeRanges.js "[[1000,3000],[2000,5000],[6000,8000]]" 500

# Show usage help
node mergeTimeRanges.js
```

## Function Signature

```javascript
/**
 * Merges time ranges that overlap or are close together
 * @param {Array<[number, number]>} ranges - Array of [start, end] time ranges
 * @param {number} threshold - Maximum gap allowed between ranges to merge them
 * @returns {Array<[number, number]>} - Merged ranges
 */
function mergeTimeRanges(ranges, threshold)
```

## Examples

### Example 1: Overlapping Ranges
```javascript
Input: [[1000, 3000], [2000, 5000], [6000, 8000]]
Threshold: 500
Output: [[1000, 5000], [6000, 8000]]
```

### Example 2: Ranges Within Threshold
```javascript
Input: [[1000, 2000], [2500, 3500], [4000, 5000]]
Threshold: 1000
Output: [[1000, 5000]]
```

### Example 3: Unsorted Input
```javascript
Input: [[6000, 8000], [1000, 3000], [2000, 5000]]
Threshold: 0
Output: [[1000, 5000], [6000, 8000]]
```

## Testing

Run the test suite:
```bash
node test.js
```

Run examples:
```bash
node example.js
```

## Files Structure

- `mergeTimeRanges.js` - Main module file
- `package.json` - Package configuration
- `test.js` - Test suite
- `example.js` - Usage examples
- `README.md` - Documentation

## Algorithm

1. Sort ranges by start time
2. Iterate through sorted ranges
3. Check if gap between current and next range ≤ threshold
4. If yes, merge ranges; if no, add current to result and continue
5. Return merged ranges

## Requirements Met

- ✅ Clean, readable, and modular code
- ✅ NodeJS module format
- ✅ Handles unsorted input
- ✅ Handles overlapping ranges
- ✅ Configurable threshold for merging
- ✅ Comprehensive test cases
- ✅ Documentation and examples