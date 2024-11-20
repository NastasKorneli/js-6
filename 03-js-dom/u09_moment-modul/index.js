// Moment-Modul importieren
const moment = require('moment');

// Funktion zur Berechnung des nächsten Samstags
function getNextSaturday() {
    const today = moment();
    const nextSaturday = today.day(6); // 6 steht für Samstag in Moment.js
    if (today.day() > 6) {
        // Wenn heute Sonntag ist, springe zur nächsten Woche
        nextSaturday.add(7, 'days');
    }
    return nextSaturday.format('DD.MM.YYYY');
}

// Ausgabe des kommenden Samstags
console.log(`Das Datum des kommenden Samstags ist: ${getNextSaturday()}`);
