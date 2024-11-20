// Funktion zum Parsen der CSV-Daten
function parseCSV(data) {
    const rows = data.trim().split('\n');
    const headers = rows.shift().split(','); // Die erste Zeile enthält die Header

    // Konvertiere jede Zeile in ein Objekt
    return rows.map(row => {
        const values = row.split(',');
        return headers.reduce((acc, header, index) => {
            acc[header.trim()] = values[index].trim(); // Header als Schlüssel, Werte zuweisen
            return acc;
        }, {});
    });
}

// Funktion, um die Daten zu filtern oder zu analysieren
function analyzeProducts(products) {
    console.log("Alle Produkte:");
    products.forEach(product => {
        console.log(`Code: ${product.Code}, Beschreibung: ${product["Short Description"]}, Preis: ${product.Price} EUR`);
    });

    console.log("\nProdukte mit einem Preis über 50 EUR:");
    const expensiveProducts = products.filter(product => parseFloat(product.Price) > 50);
    expensiveProducts.forEach(product => {
        console.log(`Code: ${product.Code}, Preis: ${product.Price} EUR`);
    });
}

// CSV-Daten verarbeiten
const products = parseCSV(csvData);

// Produkte analysieren
analyzeProducts(products);
