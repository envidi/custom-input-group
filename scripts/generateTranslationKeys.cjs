const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, '../src/i18n');
const outputDir = path.join(__dirname, '../src/types');
const outputPath = path.join(outputDir, 'resources.ts');

const generateResources = () => {
  console.log('Generating resource imports...');

  // Read all language directories
  const languages = fs.readdirSync(localesDir);

  // To store imports and resource mappings
  const imports = [];
  const resourceMappings = [];

  languages.forEach((lang) => {
    const langDir = path.join(localesDir, lang);
    const files = fs.readdirSync(langDir).filter((file) => file.endsWith('.json'));

    files.forEach((file) => {
      const key = path.basename(file, '.json');
      const importPath = path.relative(outputDir, path.join(localesDir, lang, file)).replace(/\\/g, '/');
      const importName = key.replace(/-/g, '_');

      // Add import statement
      imports.push(`import ${importName} from '${importPath}';`);
      // Check if the key contains a dash and format appropriately
      const formattedKey = key.includes('-') ? `'${key}'` : key;
      // Add to resources object
      resourceMappings.push(`  ${formattedKey}: ${importName},`);
    });
  });

  // Combine imports and resource mappings
  const fileContent = `
${imports.join('\n')}

const resources = {
${resourceMappings.join('\n')}
} as const;

export default resources;\n
`;

  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }

  // Write to output file
  fs.writeFileSync(outputPath, `${fileContent.trim()}\n`);
  console.log('Resource imports generated.');
};

generateResources();
