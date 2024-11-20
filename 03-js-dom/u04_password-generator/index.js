const crypto = require('crypto');

const PASSWORD_LENGTH = 10;
const s = '23456789abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ!.,;#$%/+*';

const buf = crypto.randomBytes(PASSWORD_LENGTH);
const password = Array.from(buf)
  .map((byte) => s.charAt(byte % s.length))
  .join('');

console.log(password);

// Übung 4: Passwortgenerator
// Was macht der Code?

// Der Titel verrät es schon. Versuche dennoch, das Programm zu verstehen! Benutze die Dokumentation der Standardbibliothek, um nachzuschlagen, was crypto.randomBytes(…) genau macht!

// Bonusfrage: Warum sind in den Zeichen «1», «i» und «l» nicht enthalten, genau so wenig wie «0» und «o»?
