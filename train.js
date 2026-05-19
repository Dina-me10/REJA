//MIT TASK K
function countVowels(str) {
  const matches = str.match(/[aeiou]/gi);

  return matches ? matches.length : 0;
}

console.log(countVowels("Madina"));
console.log(countVowels("I love programmming"));
console.log(countVowels("dreams come true!!!"));
console.log(countVowels("fly"));

/*MIT TASK J
const findLongestWord = (str) =>
  str.split(" ").sort((a, b) => b.length - a.length)[0];

console.log(findLongestWord("Among all BMW car models  i like X7  "));
*/
/*MIT TASK I
function majorityElement(arr) {
  const count = {};
  arr.forEach((val) => (count[val] = (count[val] || 0) + 1));

  return Object.keys(count).sort((a, b) => count[b] - count[a])[0];
}

console.log(majorityElement([10, 7, 45, 10, 67, 21, 52])); */

/*MIT TASK H
const getPositive = (numbers) => {
  return numbers
    .filter((n) => n > 0)
    .map(String)
    .join("");
};

console.log(getPositive([1, -4, 2]));
console.log(getPositive([-5, 0, 10, 3])); */

/* MIT TASK G
function getHighestIndex(arr) {
  let max = Math.max(...arr);

  return arr.indexOf(max);
}

const result = getHighestIndex([10, 11, 12, 3, 4, 5]);

console.log(result); */

/* MIT-TASK F

function findDoublers(word) {
  const wordL = word.toLowerCase();

  for (let i = 0; i < wordL.length; i++) {
    for (let j = i + 1; j < wordL.length; j++) {
      if (wordL[i] === wordL[j]) {
        return true;
      }
    }
  }

  return false;
}

console.log(findDoublers("HELLO"));
console.log(findDoublers("DINA")); */

/* MIT-TASK E
function getReverse(word) {
  const reversed = word.toLowerCase().split("").reverse().join("");

  console.log(reversed);
  return reversed;
}

getReverse("hello");
*/
/* MIT-TASK D
function tarkibniTekshir(text1, text2) {
  if (text1.length !== text2.length) {
    return false;
  }
  const tartibli1 = text1.split("").sort().join("");
  const tartibli2 = text2.split("").sort().join("");
  //split(""): So'zni harflarga bo'laklaydi.
  //sort(): Harflarni alifbo tartibida tizadi.
  //join(""): Harflarni qaytadan birlashtiradi.

  return tartibli1 === tartibli2;
}

console.log(tarkibniTekshir("madina", "dianam"));
console.log(tarkibniTekshir("mitguruh", "guruhmit"));
console.log(tarkibniTekshir("olma", "anor")); */

/* MIT-Task C
class Shop {
  constructor(salat, osh, cola) {
    this.salat = salat;
    this.osh = osh;
    this.cola = cola;
  }

  getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  qoldiq() {
    const time = this.getCurrentTime();
    console.log(
      `Hozir ${time}da ${this.salat}ta salat, ${this.osh}ta osh va ${this.cola}ta cola mavjud!`,
    );
  }

  sotish(mahsulot, miqdor) {
    if (this[mahsulot] !== undefined) {
      if (this[mahsulot] >= miqdor) {
        this[mahsulot] -= miqdor;
      } else {
        console.log(`Xato: Omborxonada yetarli ${mahsulot} yo'q!`);
      }
    } else {
      console.log(`Xato: Bizda ${mahsulot} sotilmaydi.`);
    }
  }

  qabul(mahsulot, miqdor) {
    if (this[mahsulot] !== undefined) {
      this[mahsulot] += miqdor;
    } else {
      console.log(`Xato: ${mahsulot} bizning ro'yxatda mavjud emas.`);
    }
  }
}

//
const shop = new Shop(4, 5, 2);

shop.qoldiq();

shop.sotish("salat", 3);
shop.qabul("osh", 4);

shop.qoldiq(); */

/*
//MIT-TASK B
function countDigits(str) {

//MIT-TASK B 
  function countDigits(str) {

  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "0" && str[i] <= "9") {
      count++;
    }
  }

  return count;
}

console.log(countDigits("student id 2022790157")); */

/*MIT-TASK A
function countLetter(letter, word) {
  let count = 0;

  const lowerLetter = letter.toLowerCase();
  const lowerWord = word.toLowerCase();

  for (let i = 0; i < lowerWord.length; i++) {
    if (lowerWord[i] === lowerLetter) {
      count++;
    }
  }

  return count;
}

const result = countLetter("a", "Madina");
console.log(result); */

//const list = [
// "yahshi talaba boling", // 0-20
// "togri boshliq tanlang va koproq hato qiling", // 20-30
// "uzingizga ishlashingizni boshlang", // 30-40
// "siz kuchli bolgan narsalarni qiling", // 40-50
// "yoshlarga investitsiya qiling", // 50-60
// "endi dam oling, foydasi yoq endi", // 60+
//];

//CALBACK-FUNCTIONS

//function maslahatBering(a, callback) {
// if (typeof a !== "number") callback("insert a number", null);
// else if (a <= 20) callback(null, list[0]);
// else if (a > 20 && a <= 30) callback(null, list[1]);
// else if (a > 30 && a <= 40) callback(null, list[2]);
//  else if (a > 40 && a <= 50) callback(null, list[3]);
// else if (a > 50 && a <= 60) callback(null, list[4]);
// else {
// Asynchronous implementation using setInterval
//   setInterval(function () {
//     callback(null, list[5]);
//   }, 1000);
// }
//}

//console.log("passed here 0");

//maslahatBering(70, (err, data) => {
//  if (err) console.log("ERROR:", err);
//  else {
//   console.log("javob:", data);
//  }
//});

//nsole.log("passed here 1");

//ASYNC-FUNCIONS
// async function maslahatBering(a) {
//     if (typeof a !== "number") throw new Error("insert a number");
//     else if (a <= 20) return list[0];
//     else if (a > 20 && a <= 30) return list[1];
//     else if (a > 30 && a <= 40) return list[2];
//     else if (a > 40 && a <= 50) return list[3];
//     else if (a > 50 && a <= 60) return list[4];
//     else {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(list[5]);
//             }, 5000);
//         });
//     }
// }

// then/catch
// console.log("passed here 0");
// maslahatBering(65)
//     .then((data) => {
//         console.log("javob:", data);
//     })
//     .catch((err) => {
//         console.log("ERROR:", err);
//     });
// console.log("passed here 1");

// asyn/await
// async function run() {
//     let javob = await maslahatBering(25);
//     console.log(javob);
//     javob = await maslahatBering(70);
//     console.log(javob);
//     javob = await maslahatBering(41);
//     console.log(javob);
// }
// run();
