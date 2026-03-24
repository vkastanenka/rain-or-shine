import fs from 'fs';
import path from 'path';

const targetSubFolder = process.argv[2]; 

if (!targetSubFolder) {
  console.error("Usage: node generate-barrel.mjs <folder_path>");
  process.exit(1);
}

const targetDir = path.resolve(process.cwd(), 'src/assets/icons', targetSubFolder);
const outputFile = path.join(targetDir, 'index.ts');

try {
  // 1. Read all files in the directory
  const files = fs.readdirSync(targetDir);

  // 2. Filter for .tsx files only (avoiding the SVGs and the index.ts itself)
  const exports = files
    .filter(file => {
      const isTsx = file.endsWith('.tsx');
      const isIndex = file === 'index.ts';
      return isTsx && !isIndex;
    })
    .map(file => {
      // 3. Remove the .tsx extension for the export path
      const name = path.parse(file).name;
      return `export * from './${name}';`;
    })
    .sort() // Optional: keeps the barrel file alphabetized
    .join('\n');

  // 4. Write the file (adding a newline at the end for clean formatting)
  fs.writeFileSync(outputFile, exports + '\n');
  
  console.log(`✅ Successfully created barrel file at: ${outputFile}`);
  console.log(`📦 Exported ${exports.split('\n').length} components.`);
} catch (err) {
  console.error('❌ Error generating barrel file:', err);
}