const quotedCSV = '"very big, soft computer mouse","the cutest peripheral ever","10","39.90"';

// Regular expression to match fields enclosed in quotes
const regex = /"([^"]*)"/g;

const fields = [];
let match;

// Extract all fields
while ((match = regex.exec(quotedCSV)) !== null) {
    fields.push(match[1]);
}

// Output the extracted fields
fields.forEach((field, index) => {
    console.log(`Field ${index + 1}: ${field}`);
});
