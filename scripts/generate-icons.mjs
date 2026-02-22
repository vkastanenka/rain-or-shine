import fs from 'fs';
import path from 'path';

const targetSubFolder = process.argv[2]; // e.g., meteocons/fill
const ICONS_ROOT = path.join(process.cwd(), 'src/assets/icons', targetSubFolder);
const OUTPUT_FILE = path.join(ICONS_ROOT, 'index.ts');

const toPascalCase = (str) => 
  str.replace(/(^\w|-\w)/g, (g) => g.replace(/-/, '').toUpperCase());

const generate = () => {
  const files = fs.readdirSync(ICONS_ROOT).filter(f => f.endsWith('.svg'));
  
  const exports = files.map(file => {
    const name = toPascalCase(path.parse(file).name);
    return `import ${name}Raw from './${file}?react';
export const ${name} = IconWrapper(${name}Raw);`;
  });

  const content = `import { IconWrapper } from '@/components';

${exports.join('\n\n')}
`;

  fs.writeFileSync(OUTPUT_FILE, content);
  console.log(`✅ Generated ${files.length} icons in ${targetSubFolder}`);
};

generate();