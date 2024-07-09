const fs = require('fs');
const axios = require('axios');

// Read content from a file and handle output
function readFile(path, writeTo, isLast) {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading ${path}:\n  ${err.message}`);
            process.exit(1);
        } else {
            handleOutput(data, writeTo, isLast);
        }
    });
}

// Fetch content from a URL and handle output
async function fetchUrl(url, writeTo, isLast) {
    try {
        const res = await axios.get(url);
        handleOutput(res.data, writeTo, isLast);
    } catch (err) {
        console.error(`Error fetching ${url}:\n  ${err.message}`);
        process.exit(1);
    }
}

// Handle output: write to console or append to file
function handleOutput(data, writeTo, isLast) {
    if (writeTo) {
        fs.appendFile(writeTo, data + (isLast ? '' : '\n'), 'utf8', (err) => {
            if (err) {
                console.error(`Couldn't write to ${writeTo}:\n  ${err.message}`);
                process.exit(1);
            }
        });
    } else {
        console.log(data);
    }
}

// Parse command-line arguments
const args = process.argv.slice(2);
let writeTo;

if (args[0] === '--out') {
    writeTo = args[1];
    args.splice(0, 2);
}

// Process each input (file path or URL)
const inputs = args;
inputs.forEach((arg, index) => {
    const isLast = index === inputs.length - 1;
    if (arg.startsWith('http://') || arg.startsWith('https://')) {
        fetchUrl(arg, writeTo, isLast);
    } else {
        readFile(arg, writeTo, isLast);
    }
});
