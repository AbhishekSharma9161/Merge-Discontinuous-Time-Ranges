const { mergeTimeRanges } = require('./mergeTimeRanges');

// Simple test runner
function test(description, actual, expected) {
  const passed = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${passed ? '✓' : '✗'} ${description}`);
  if (!passed) {
    console.log(`  Expected: ${JSON.stringify(expected)}`);
    console.log(`  Actual:   ${JSON.stringify(actual)}`);
  }
}

console.log('Running tests...\n');

// Test 1: Empty array
test('Empty array', mergeTimeRanges([], 1000), []);

// Test 2: Single range
test('Single range', mergeTimeRanges([[1000, 2000]], 500), [[1000, 2000]]);

// Test 3: Overlapping ranges
test('Overlapping ranges', 
  mergeTimeRanges([[1000, 3000], [2000, 5000]], 0), 
  [[1000, 5000]]);

// Test 4: Adjacent ranges within threshold
test('Adjacent ranges within threshold', 
  mergeTimeRanges([[1000, 2000], [2500, 3500]], 1000), 
  [[1000, 3500]]);

// Test 5: Ranges outside threshold
test('Ranges outside threshold', 
  mergeTimeRanges([[1000, 2000], [4000, 5000]], 1000), 
  [[1000, 2000], [4000, 5000]]);

// Test 6: Unsorted input
test('Unsorted input', 
  mergeTimeRanges([[3000, 4000], [1000, 2000], [1500, 2500]], 0), 
  [[1000, 2500], [3000, 4000]]);

// Test 7: Multiple overlapping ranges
test('Multiple overlapping ranges', 
  mergeTimeRanges([[1000, 2000], [1500, 3000], [2500, 4000]], 0), 
  [[1000, 4000]]);

// Test 8: Zero threshold
test('Zero threshold - exact adjacency', 
  mergeTimeRanges([[1000, 2000], [2000, 3000]], 0), 
  [[1000, 3000]]);

console.log('\nTests completed!');