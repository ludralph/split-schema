// const fs = require('fs');
// const path = require('path');

// const inputFilePath = './node_modules/.prisma/client/index.d.ts';
// const outputDir = './src/generated/';

// if (!fs.existsSync(outputDir)) {
//   fs.mkdirSync(outputDir, { recursive: true });
// }

// const inputFileContent = fs.readFileSync(inputFilePath, 'utf8');
// console.log(`Read: ${inputFileContent}`);
// // Split the content by model names
// const contentSections = inputFileContent.split('\nexport type ');

// contentSections.forEach((section, index) => {
//   if (index > 0) {
//     const modelName = section.substring(0, section.indexOf(' ')).trim();
//     const outputFilePath = path.join(outputDir, `${modelName}.d.ts`);
//     console.log(outputFilePath)
//     const outputFileContent = `export type ${modelName} = ${section}`;

//     fs.writeFileSync(outputFilePath, outputFileContent, 'utf8');
//     console.log(`Created: ${outputFilePath}`);
//   }
// });

// // Create the re-export file
// const reExportFilePath = path.join(outputDir, 'index.d.ts');
// const reExportContent = contentSections
//   .map((section, index) => {
//     if (index > 0) {
//       const modelName = section.substring(0, section.indexOf(' ')).trim();
//       return `export * from './${modelName}';`;
//     }
//     return '';
//   })
//   .join('\n');

// fs.writeFileSync(reExportFilePath, reExportContent, 'utf8');

const fs = require('fs');
const path = require('path');

const inputFilePath = './node_modules/.prisma/client/index.d.ts';
const outputDir = './src/generated/';

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const inputFileContent = fs.readFileSync(inputFilePath, 'utf8');
console.log(`Read: ${inputFileContent}`);
// Split the content by model names
const contentSections = inputFileContent.split('\nexport type ');

contentSections.forEach((section, index) => {
  if (index > 0) {
    const modelName = section.substring(0, section.indexOf(' ')).trim();
    const outputFilePath = path.join(outputDir, `${modelName}.d.ts`);
    console.log(outputFilePath);
    
    // Remove the unwanted duplication
    const typeDeclaration = section.replace(`${modelName} = ${modelName} = `, '');
    
    const outputFileContent = `export type ${modelName} = ${typeDeclaration}`;

    fs.writeFileSync(outputFilePath, outputFileContent, 'utf8');
    console.log(`Created: ${outputFilePath}`);
  }
});

// Create the re-export file
const reExportFilePath = path.join(outputDir, 'index.d.ts');
const reExportContent = contentSections
  .map((section, index) => {
    if (index > 0) {
      const modelName = section.substring(0, section.indexOf(' ')).trim();
      return `export * from './${modelName}';`;
    }
    return '';
  })
  .join('\n');

fs.writeFileSync(reExportFilePath, reExportContent, 'utf8');

