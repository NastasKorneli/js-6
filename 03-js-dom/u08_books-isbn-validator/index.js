const fs = require('fs');
const readline = require('readline');

// Funktion zur Validierung von ISBN-10
function validateISBN10(isbn) {
    if (isbn.length !== 10) return false;
    let sum = 0;
    for (let i = 0; i < 10; i++) {
        if (isbn[i] === 'X' && i === 9) {
            sum += 10 * (10 - i);
        } else if (!isNaN(isbn[i])) {
            sum += parseInt(isbn[i]) * (10 - i);
        } else {
            return false;
        }
    }
    return sum % 11 === 0;
}

// Funktion zur Validierung von ISBN-13
function validateISBN13(isbn) {
    if (isbn.length !== 13 || !/^\d+$/.test(isbn)) return false;
    let sum = 0;
    for (let i = 0; i < 13; i++) {
        sum += parseInt(isbn[i]) * (i % 2 === 0 ? 1 : 3);
    }
    return sum % 10 === 0;
}

// Funktion zum Einlesen und Verarbeiten der CSV-Datei
function validateISBNsFromCSV(filePath) {
    const invalidEntries = [];
    const fileStream = fs.createReadStream(filePath);

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity,
    });

    rl.on('line', (line) => {
        const [title, rawISBN] = line.split(',');
        const isbn = rawISBN.replace(/-/g, '').trim(); // Entferne Bindestriche und Leerzeichen
        if (title !== 'Title' && !(validateISBN10(isbn) || validateISBN13(isbn))) {
            invalidEntries.push({ title, isbn: rawISBN.trim() });
        }
    });

    rl.on('close', () => {
        if (invalidEntries.length > 0) {
            console.log('Ungültige ISBNs gefunden:');
            invalidEntries.forEach((entry) =>
                console.log(`Titel: ${entry.title}, ISBN: ${entry.isbn}`)
            );
        } else {
            console.log('Alle ISBNs sind gültig!');
        }
    });
}

// Pfad zur CSV-Datei
const csvFile = 'books.csv';
validateISBNsFromCSV(csvFile);
