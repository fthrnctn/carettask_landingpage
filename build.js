const fs = require('fs');
const path = require('path');

// Paths
const SRC_DIR = path.join(__dirname, 'src');
const DIST_DIR = __dirname; // Build directly to root for GitHub Pages
const COMPONENTS_DIR = path.join(SRC_DIR, 'components');
const PAGES_DIR = path.join(SRC_DIR, 'pages');
const TEMPLATES_DIR = path.join(SRC_DIR, 'templates');

// Page configurations
const pages = [
    {
        name: 'index',
        output: 'index.html',
        basePath: '',
        cssPath: '',
        jsPath: '',
        extraScripts: '<script src="survey.js?v={{CACHE_VERSION}}"></script>'
    },
    {
        name: 'cerez-politikasi',
        output: 'cerez-politikasi/index.html',
        basePath: '../',
        cssPath: '../',
        jsPath: '../',
        extraScripts: ''
    },
    {
        name: 'gizlilik-politikasi',
        output: 'gizlilik-politikasi/index.html',
        basePath: '../',
        cssPath: '../',
        jsPath: '../',
        extraScripts: ''
    },
    {
        name: 'kullanim-sartlari',
        output: 'kullanim-sartlari/index.html',
        basePath: '../',
        cssPath: '../',
        jsPath: '../',
        extraScripts: ''
    },
    {
        name: 'kvkk',
        output: 'kvkk/index.html',
        basePath: '../',
        cssPath: '../',
        jsPath: '../',
        extraScripts: ''
    }
];

// Read file helper
function readFile(filePath) {
    try {
        return fs.readFileSync(filePath, 'utf8');
    } catch (error) {
        console.error(`Error reading file: ${filePath}`);
        console.error(error.message);
        return '';
    }
}

// Parse page content - splits HEAD and BODY content using <!--HEAD_END--> marker
function parsePageContent(content) {
    const marker = '<!--HEAD_END-->';
    const markerIndex = content.indexOf(marker);

    if (markerIndex === -1) {
        // No marker found, treat all content as body
        return { head: '', body: content };
    }

    return {
        head: content.substring(0, markerIndex).trim(),
        body: content.substring(markerIndex + marker.length).trim()
    };
}

// Write file helper with directory creation
function writeFile(filePath, content) {
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`  ✓ Built: ${path.relative(__dirname, filePath)}`);
}

// Replace template variables
function replaceVariables(template, variables) {
    let result = template;
    for (const [key, value] of Object.entries(variables)) {
        const regex = new RegExp(`{{${key}}}`, 'g');
        result = result.replace(regex, value);
    }
    return result;
}

// Build a single page
function buildPage(pageConfig, buildVersion) {
    // Read template
    const template = readFile(path.join(TEMPLATES_DIR, 'base.html'));

    // Read components
    const header = readFile(path.join(COMPONENTS_DIR, 'header.html'));
    const footer = readFile(path.join(COMPONENTS_DIR, 'footer.html'));
    const authModal = readFile(path.join(COMPONENTS_DIR, 'auth-modal.html'));
    const cookieBanner = readFile(path.join(COMPONENTS_DIR, 'cookie-banner.html'));

    // Read and parse page content (HEAD and BODY sections)
    const rawPageContent = readFile(path.join(PAGES_DIR, `${pageConfig.name}.html`));
    const { head: headContent, body: pageContent } = parsePageContent(rawPageContent);

    // Combine modals
    const modals = `${cookieBanner}\n\n    ${authModal}`;

    // Build variables
    const v = buildVersion || Date.now();
    const variables = {
        BASE_PATH: pageConfig.basePath,
        CSS_PATH: pageConfig.cssPath,
        JS_PATH: pageConfig.jsPath,
        CACHE_VERSION: String(v),
        HEAD_CONTENT: headContent,
        HEADER: replaceVariables(header, { BASE_PATH: pageConfig.basePath }),
        FOOTER: replaceVariables(footer, { BASE_PATH: pageConfig.basePath }),
        PAGE_CONTENT: replaceVariables(pageContent, { BASE_PATH: pageConfig.basePath }),
        MODALS: replaceVariables(modals, { BASE_PATH: pageConfig.basePath }),
        EXTRA_SCRIPTS: pageConfig.extraScripts.replace(/{{CACHE_VERSION}}/g, String(v))
    };

    // Replace all variables in template
    let result = replaceVariables(template, variables);

    // Write output
    const outputPath = path.join(DIST_DIR, pageConfig.output);
    writeFile(outputPath, result);
}

// Main build function
function build() {
    console.log('\n🔨 Building CaretTask Landing Page...\n');

    // Check if source files exist
    if (!fs.existsSync(SRC_DIR)) {
        console.error('❌ Source directory not found. Please create src/ directory with components and pages.');
        process.exit(1);
    }

    // Generate cache-busting version (timestamp)
    const buildVersion = Date.now();
    console.log(`  🏷️  Cache version: ${buildVersion}\n`);

    // Build each page
    for (const pageConfig of pages) {
        buildPage(pageConfig, buildVersion);
    }

    console.log('\n✅ Build completed successfully!\n');
}

// Watch mode
function watch() {
    console.log('👀 Watching for changes...\n');

    const watchDirs = [COMPONENTS_DIR, PAGES_DIR, TEMPLATES_DIR];

    for (const dir of watchDirs) {
        if (fs.existsSync(dir)) {
            fs.watch(dir, { recursive: true }, (eventType, filename) => {
                if (filename && filename.endsWith('.html')) {
                    console.log(`\n📝 Changed: ${filename}`);
                    build();
                }
            });
        }
    }

    // Initial build
    build();
}

// Run
if (process.argv.includes('--watch')) {
    watch();
} else {
    build();
}
