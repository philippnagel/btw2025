import { readCSV } from 'https://deno.land/x/flat@0.0.x/mod.ts';
import { writeJson } from 'https://deno.land/std@0.92.0/fs/mod.ts';

const csvPath = './data.csv';
const jsonPath = './data.json';

const originalCSV = await readCSV(csvPath);
console.log(originalCSV);

await writeJson(jsonPath, originalCSV, { spaces: 2 });

console.log(`Data has been written to ${jsonPath}`);
