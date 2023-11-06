// =================== Loops-Level-1_1 ===========================

// Schreibe eine for-Schleife, die genau 10 Mal "Hello World + Nummer" in der Konsole ausgibt
// Bei jedem Durchlauf soll sich die Nummer um 1 erhöhen

for (let i = 0; i <= 10; i++) {
  console.log("Hello World " + i);
}

// =================== Loops-Level-1_2 ===========================

// Erstelle ein Array mit den Zahlen 0-10 mithilfe einer Schleife.
// Wenn du mit Arrays arbeitest, musst du das Array initialisieren (let numArray = [];)"
// Verwende den Befehl "push()" im Schleifenkörper.
// Gib zum Schluss die Variable numArray in der Konsole aus.

let numArray = [];

for (let i = 0; i <= 10; i++) {
  numArray.push(i);
}
console.log(numArray);

// =================== Loops-Level-1_4 ===========================

// Deklariere ein Array "names" mit den Werten: "Georg", "Anass", "Elaine", "Hakan", "Eric", "Kim" und "Sergio"
// Dann verwende eine for-Schleife, um alle Namen in der Konsole anzuzeigen

let name = ["Georg", "Anass", "Elaine", "Hakan", "Eric", "Kim", "Sergio"];

for (let i = 0; i <= name.length; i++) {
  console.log(name[i]);
}

for (let showName of name) {
  console.log(showName);
}

// =================== Loops-Level-1_5 ===========================

// Erstelle eine for-Schleife, die die Größe von Äpfeln in der Konsole ausgibt.
// Verwende den vorgegebenen Code.
// Wie immer bei der for-Schleife: Initialisierung; Bedingung; Inkrement.
// Verwende den Befehl length, um alle Objekte anzuzeigen.
// Gib alle apples in der Konsole aus.

let apple1 = { color: "red", size: "big" };
let apple2 = { color: "green", size: "small" };
let apple3 = { color: "yellow", size: "big" };
let apples = [apple1, apple2, apple3];

// =================== Loops-Level-1_6 ===========================

// In dieser Aufgabe soll ein Array von Bildern erstellt werden und die Dateinamen von "image_1.jpg" bis "image_100.jpg" sollen ausgegeben werden.
// Deklariere die Variable retArray als leeres Array.
// Schreibe eine for-Schleife.
// Nutze die push() Methode.

let retArray = [];

for (let i = 1; i <= 100; i++) {
  retArray.push(`image_${i}.jpg`);
}
console.log(retArray);

// =================== Loops-Level-1_9 ===========================

console.clear();

// Im Code-Snippet findest du ein Array mit verschiedenen Wörtern.
// Dein Ziel ist es, nur die Wörter ins HTML zu schreiben, bei denen die Länge des Wortes mit der Zahl des Inputfelds übereinstimmt.
// Verwende ein Loop oder eine Arraymethode.

let words = [
  "hallo",
  "Auto",
  "Waschmaschine",
  "Schrank",
  "Katze",
  "Beispiel",
  "Eltern",
  "Fenster",
  "Geburtstag",
  "Himmel",
  "schwimmen",
  "Zeitung",
];

console.log(words[0].length);

// const checkNumber = () => {
//   const inputNumber = document.body.querySelector("#inputNumber").value;
//   const output = document.body.querySelector(".output");
//   let checkedNumbers = words.filter(
//     (elt) => elt.length === Number(inputNumber)
//   );
//   output.textContent = checkedNumbers;
// };

// const checkNumber = () => {
//   const inputNumber = document.body.querySelector("#inputNumber").value;
//   for (let i = 0; i < words.length; i++) {
//     if (Number(inputNumber) === words[i].length) {
//       console.log(words[i]);
//     }
//   }
// };

const checkNumber = () => {
  const inputNumber = document.body.querySelector("#inputNumber").value;

  for (let checkedNumbers of words) {
    if (Number(inputNumber) === checkedNumbers.length) {
      console.log(checkedNumbers);
    }
  }
};

// BONUS ========
// Erstelle ein weiteres Input-Feld, in dem die Benutzer neue Wörter zu dieser Sammlung hinzufügen können.
// Die hinzugefügten Wörter sind leider nur bis zum Refresh des Browsers vorhanden, das Abspeichern ist an dieser Stelle noch nicht möglich.

let word = document.body.querySelector("#inputText");
const addWord = () => words.push(word.value);
