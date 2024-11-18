const mixedCSV = '"very big, soft computer mouse",the cutest peripheral ever,"10",39.90';

// Regular expression to match quoted or unquoted fields
const regex = /"([^"]*)"|([^,]+)/g;

const fields = [];
let match;

// Extract all fields
while ((match = regex.exec(mixedCSV)) !== null) {
    // Match[1] contains quoted field; match[2] contains unquoted field
    fields.push(match[1] !== undefined ? match[1] : match[2]);
}

// Output the extracted fields
fields.forEach((field, index) => {
    console.log(`Field ${index + 1}: ${field}`);
});
