import { readCSV } from 'https://deno.land/x/flat@0.0.15/mod.ts';
import * as fs from 'https://deno.land/std@1.0.13/fs/mod.ts'; 

const csvPath = './data.csv';
const jsonPath = './data.json';

try {
  const originalCSV = await readCSV(csvPath);
  console.log(originalCSV);

  await fs.writeJson(jsonPath, originalCSV, { spaces: 2 });
  console.log(`Data has been written to ${jsonPath}`);
} catch (error) {
  console.error('Error processing CSV to JSON:', error);
}
