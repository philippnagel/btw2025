import { readCSV, writeJSON } from 'https://deno.land/x/flat@0.0.15/mod.ts';

const csvPath = './data.csv';
const jsonPath = './data.json';

const originalCSV = await readCSV(csvPath);
console.log(originalCSV);

await writeJSON(jsonPath, originalCSV, { spaces: 2 });

console.log(`Data has been written to ${jsonPath}`);
