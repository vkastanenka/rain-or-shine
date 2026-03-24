import fs from 'fs';
import path from 'path';

const targetSubFolder = process.argv[2]; 

if (!targetSubFolder) {
  console.error("Usage: node generate-icons.mjs <folder_path>");
  process.exit(1);
}

const ICONS_ROOT = path.resolve(process.cwd(), 'src/assets/icons', targetSubFolder);

/**
 * Converts kebab-case or snake_case to PascalCase
 * e.g., "ros-wordmark" -> "RosWordmark"
 */
const toPascalCase = (str) => 
  str
    .split(/[-_]/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');

const generate = () => {
  // 1. Ensure the directory exists
  if (!fs.existsSync(ICONS_ROOT)) {
    console.error(`Error: Directory not found at ${ICONS_ROOT}`);
    process.exit(1);
  }

  // 2. Find all SVG files in the target folder
  const files = fs.readdirSync(ICONS_ROOT).filter(f => f.endsWith('.svg'));

  files.forEach(file => {
    const fileName = path.parse(file).name;      // e.g., "ros-wordmark"
    const componentName = toPascalCase(fileName); // e.g., "RosWordmark"
    
    // 3. Define the path for the new .tsx file (sibling to the .svg)
    const tsxFilePath = path.join(ICONS_ROOT, `${componentName}.tsx`);

    // 4. Generate the file content
    const content = `import { createIcon } from '@/components';
import ${componentName}Raw from './${file}?react';

export const ${componentName} = createIcon(${componentName}Raw);
`;

    // 5. Write the file
    fs.writeFileSync(tsxFilePath, content);
    console.log(`  ▶ Generated: ${componentName}.tsx`);
  });

  console.log(`\n✅ Successfully created ${files.length} icon components in ${targetSubFolder}`);
};

generate();