import { findDuplicates, findJsFiles } from 'find-duplicate-js';

// Find all JavaScript files
const files = findJsFiles('./controllers');
console.log(`Found ${files.length} files`);

// Find duplicates with 70% threshold
const result = findDuplicates('./controllers', 70);

console.log(`Total functions: ${result.totalFunctions}`);
console.log(`Duplicate pairs: ${result.duplicates.length}`);

// Iterate through duplicates
result.duplicates.forEach((dup, index) => {
  console.log(`\nMatch #${index + 1}:`);
  console.log(`Similarity: ${dup.similarity}%`);
  console.log(`Function 1: ${dup.func1.name} in ${dup.func1.filePath}`);
  console.log(`Function 2: ${dup.func2.name} in ${dup.func2.filePath}`);
});