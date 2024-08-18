import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Get the directory name of the current module file
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Get the component name from the command line arguments
const componentName: string | undefined = process.argv[2];

if (!componentName) {
    console.error('Please provide a component name');
    process.exit(1);
}

// Helper function to convert to camelCase
const toCamelCase = (str: string): string => {
    return str.charAt(0).toLowerCase() + str.slice(1);
};

// Helper function to convert to PascalCase
const toPascalCase = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

// Convert names to camelCase and PascalCase
const componentDirName = toCamelCase(componentName);
const componentFileName = toPascalCase(componentName);

// Define the directory path
const componentDirPath: string = path.join(__dirname, '..', componentDirName);

// Define the file paths
const indexFilePath: string = path.join(componentDirPath, 'index.tsx');
const componentFilePath: string = path.join(componentDirPath, `${componentFileName}.tsx`);
const specFilePath: string = path.join(componentDirPath, `${componentFileName}.spec.tsx`);

// Define the content for the index.tsx file
const indexContent: string = `export { default as ${componentFileName} } from './${componentFileName}';
`;

// Define the content for the component file (ComponentName.tsx)
const componentContent: string = `const ${componentFileName} = () => {
    return (
        <div>Component Empty</div>
    );
}

export default ${componentFileName};
`;

// Define the content for the spec.tsx file
const specContent: string = `describe('${componentFileName}', () => {
    it('should ', () => {
        expect(true).toBe(true);
    });
});
`;

// Create the directory and write the files
fs.mkdir(componentDirPath, { recursive: true }, (err) => {
    if (err) {
        console.error('Error creating directory:', err);
        process.exit(1);
    } else {
        // Write the index.tsx file
        fs.writeFile(indexFilePath, indexContent, (err) => {
            if (err) {
                console.error('Error creating index file:', err);
                process.exit(1);
            } else {
                console.log(`index.tsx has been created successfully in ${componentDirPath}.`);
            }
        });

        // Write the ComponentName.tsx file
        fs.writeFile(componentFilePath, componentContent, (err) => {
            if (err) {
                console.error('Error creating component file:', err);
                process.exit(1);
            } else {
                console.log(`${componentFileName}.tsx has been created successfully in ${componentDirPath}.`);
            }
        });

        // Write the ComponentName.spec.tsx file
        fs.writeFile(specFilePath, specContent, (err) => {
            if (err) {
                console.error('Error creating spec file:', err);
                process.exit(1);
            } else {
                console.log(`${componentFileName}.spec.tsx has been created successfully in ${componentDirPath}.`);
            }
        });
    }
});
