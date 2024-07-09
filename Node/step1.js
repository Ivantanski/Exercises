const fs = require('fs');

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

// Get the file path from the command line arguments
const path = process.argv[2];

// Ensure a path is provided
if (!path) {
    console.error('Please provide a file path.');
    process.exit(1);
}

// Call the cat function with the provided path
cat(path);
