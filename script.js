let word = "прокрастинація";

let remain = word.length - 2;

let answer = []; // що відкрито
answer[0] = word[0]; // перша літера буде відкрита
answer[word.length - 1] = word[word.length - 1]; // остання літера буде відкрита

for (let i = 1; i < word.length - 1; i++) {
  answer[i] = "_"; // між першою та останньою літерою - знаки підкреслення
}

let answElement = document.getElementById("answ");

answElement.innerHTML = answer.join(" ");

let remainElement = document.getElementById("remain");
remainElement.innerHTML = remain;

function guessLetter() {
  let guess = prompt("Введіть літеру");
  for (let i = 0; i < word.length; i++) {
    // проходимо рядок word поелементно, як масив
    if (word[i] === guess) {
      // якщо літера рядка збіглася з вгаданою
      answer[i] = guess; // записуємо її до масиву відкритих букв
      remain--; // зменшуємо на 1 кількість спроб, що залишилися.
    }
  }
}
