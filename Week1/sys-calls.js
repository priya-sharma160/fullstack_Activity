// ✅ Import modules only once at the top
const fs = require('fs');
const os = require('os');

// -----------------------------
// PART 1: File System Operations
// -----------------------------

// 1. Read the contents of sample.txt
fs.readFile('sample.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
    } else {
        console.log('File contents:', data);
    }
});

// 2. Write new data to output.txt
fs.writeFile('output.txt', 'This is some sample data.', (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('Data written to output.txt');
    }
});

// -----------------------------
// PART 2: Operating System Information
// -----------------------------
console.log("\n=== Operating System Info ===");
console.log("Platform:", os.platform());
console.log("Hostname:", os.hostname());
console.log("Architecture:", os.arch());
