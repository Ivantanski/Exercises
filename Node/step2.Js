const fs = require('fs');
const axios = require('axios');

// Function to read and print the contents of a file
function cat(path) {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading ${path}:\n  ${err.message}`);
            process.exit(1);
        } else {
            console.log(data);
        }
    });
}

// Function to fetch and print the contents from a URL
async function webCat(url) {
    try {
        const res = await axios.get(url);
        console.log(res.data);
    } catch (err) {
        console.error(`Error fetching ${url}:\n  ${err.message}`);
        process.exit(1);
    }
}

// Get the argument from the command line
const arg = process.argv[2];

// Check if the argument is a URL or a file path
if (arg.startsWith('http://') || arg.startsWith('https://')) {
    webCat(arg);
} else {
    cat(arg);
}
