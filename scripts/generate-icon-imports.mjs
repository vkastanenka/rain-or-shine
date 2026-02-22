import fs from 'fs';
import path from 'path';

// Get the folder path from the terminal argument (e.g., meteocons/fill/all)
const targetSubFolder = process.argv[2];

if (!targetSubFolder) {
  console.error('❌ Please provide a folder path starting from assets/icons/');
  process.exit(1);
}

// 1. Path to the actual SVG files
const ICONS_ROOT = path.join(process.cwd(), 'src/assets/icons', targetSubFolder);

// 2. Path to the NEW index.ts inside THAT specific folder
const OUTPUT_FILE = path.join(ICONS_ROOT, 'index.ts');

const toPascalCase = (str) => 
  str.replace(/(^\w|-\w)/g, (g) => g.replace(/-/, '').toUpperCase());

const generateIcons = () => {
  if (!fs.existsSync(ICONS_ROOT)) {
    console.error(`❌ Directory not found: ${ICONS_ROOT}`);
    process.exit(1);
  }

  const files = fs.readdirSync(ICONS_ROOT)
    .filter(file => file.endsWith('.svg'));

  // Create named export statements
  const exports = files.map(file => {
    const fileName = path.parse(file).name;
    const componentName = toPascalCase(fileName);
    return `export { default as ${componentName} } from './${file}?react';`;
  });

  const content = `// Auto-generated. Do not edit.\n${exports.join('\n')}\n`;

  fs.writeFileSync(OUTPUT_FILE, content);
  
  console.log(`---`);
  console.log(`✅ Success!`);
  console.log(`📍 Created: ${OUTPUT_FILE}`);
  console.log(`📦 Icons: ${files.length}`);
  console.log(`---`);
};

generateIcons();