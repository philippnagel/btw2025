import { readCSV, writeJSON } from 'https://deno.land/x/flat@0.0.15/mod.ts';

const csvPath = './data.csv';
const jsonPath = './data.json';

try {
  const originalCSV = await readCSV(csvPath, {
    separator: ';',
    skipFirstRow: false,
  });

  console.log(originalCSV);

  const jsonString = JSON.stringify(originalCSV, null, 2);

  await Deno.writeTextFile(jsonPath, jsonString);
  console.log(`Data has been written to ${jsonPath}`);
} catch (error) {
  console.error('Error processing CSV to JSON:', error);
}