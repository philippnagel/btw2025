import { readCSV } from 'https://deno.land/x/flat@0.0.15/mod.ts';
import { writeJson } from 'https://deno.land/std@1.0.13/fs/mod.ts';

const csvPath = './data.csv';
const jsonPath = './data.json';

const originalCSV = await readCSV(csvPath);
console.log(originalCSV);

await writeJson(jsonPath, originalCSV, { spaces: 2 });

console.log(`Data has been written to ${jsonPath}`);
