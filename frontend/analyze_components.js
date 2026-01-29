
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = path.join(__dirname, 'src');
const outputFile = path.join(__dirname, 'COMPONENT_ANALYSIS.md');

function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);

    arrayOfFiles = arrayOfFiles || [];

    files.forEach(function (file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
        } else {
            if (file.endsWith('.jsx') || file.endsWith('.tsx') || file.endsWith('.js')) {
                arrayOfFiles.push(path.join(dirPath, "/", file));
            }
        }
    });

    return arrayOfFiles;
}

const allFiles = getAllFiles(srcDir);
const components = [];

// 1. Identify Components
allFiles.forEach(file => {
    // Naive assumption: Capitalized file names in components/ or pages/ are components
    const fileName = path.basename(file, path.extname(file));
    if (/^[A-Z]/.test(fileName)) {
        components.push({
            name: fileName,
            path: file,
            usageCount: 0,
            usedIn: new Set()
        });
    }
});

// 2. Analyze Usage
allFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    components.forEach(comp => {
        // Regex to find <ComponentName or ComponentName (imported)
        // Simplest check: <ComponentName
        const regex = new RegExp(`<${comp.name}\\b`, 'g');
        const matches = content.match(regex);
        if (matches) {
            comp.usageCount += matches.length;
            comp.usedIn.add(path.relative(srcDir, file));
        }

    });
});

// 3. Generate Report
let report = `# Project Component Analysis\n\n`;
report += `Total Components Found: ${components.length}\n\n`;
report += `| Component Name | Usage Count | Used In locations (Sample) |\n`;
report += `|---|---|---|\n`;

// Sort by usage count descending
components.sort((a, b) => b.usageCount - a.usageCount);

components.forEach(comp => {
    const locations = Array.from(comp.usedIn).slice(0, 5).join(', '); // limit to 5
    const more = comp.usedIn.size > 5 ? ` (+${comp.usedIn.size - 5} more)` : '';
    report += `| **${comp.name}** | ${comp.usageCount} | ${locations}${more} |\n`;
});

report += `\n\n## Detailed Breakdown\n\n`;

components.forEach(comp => {
    report += `### ${comp.name}\n`;
    report += `- **File Path**: \`${path.relative(__dirname, comp.path)}\`\n`;
    report += `- **Times Used**: ${comp.usageCount}\n`;
    if (comp.usageCount > 0) {
        report += `- **Used In**:\n`;
        comp.usedIn.forEach(loc => {
            report += `  - ${loc}\n`;
        });
    } else {
        report += `- **Used In**: *No explicit usage found (might be routed or unused)*\n`;
    }
    report += `\n`;
});

fs.writeFileSync(outputFile, report);
console.log('Analysis complete. Report saved to COMPONENT_ANALYSIS.md');
