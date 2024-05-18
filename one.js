const answers = ["1", "2", "3"];

function Card(selector1, selector2, selector3, selector4) {
  this.input = document.querySelector(selector1);
  this.btn = document.querySelector(selector2);
  this.angry = document.querySelector(selector3);
  this.good = document.querySelector(selector4);
}
// const cards = [
//   {
//     input: document.querySelector(".input1"),
//     btn: document.querySelector(".btn1"),
//     angry: document.querySelector(".angry1"),
//     good: document.querySelector(".good1"),
//   },
//   {
//     input: document.querySelector(".input2"),
//     btn: document.querySelector(".btn2"),
//     angry: document.querySelector(".angry2"),
//     good: document.querySelector(".good2"),
//   },
//   {
//     input: document.querySelector(".input3"),
//     btn: document.querySelector(".btn3"),
//     angry: document.querySelector(".angry3"),
//     good: document.querySelector(".good3"),
//   },
// ];

const cards = [
  new Card(".input1", ".btn1", ".angry1", ".good1"),
  new Card(".input2", ".btn2", ".angry2", ".good2"),
  new Card(".input3", ".btn3", ".angry3", ".good3"),
];

const getAnswer = (index) => {
  return answers[index];
};

// let count = 0;
// const handlerCheckAnswer = function (index) {
//   // console.log(cards);
//   // console.log(index);
//   // console.log(getAnswer(index));

//   if (this.input.value === getAnswer(index)) {
//     this.input.disabled = true;
//     this.btn.disabled = true;
//     count++;
//     if (count === 3) {
//       alert("Вы ответили правильно");
//       // this.good.style.display = "block";

//       //   window.location.href = "https://google.com";
//     }
//   } else {
//     this.input.value = "";
//     alert("Ответ неверный, попробуйте угадать 1,2 или 3");
//     // this.angry.style.display = "block";
//   }
// };
//**********************************************************/
const handlerCheckAnswer = function (index) {
  console.log(cards);
  console.log(index);
  console.log(getAnswer(index));

  if (this.input.value === getAnswer(index)) {
    this.input.disabled = true;
    this.btn.disabled = true;

    this.good.style.display = "block";

    //   window.location.href = "https://google.com";
  } else {
    this.input.value = "";
    // alert("Ответ неверный, попробуйте угадать 1,2 или 3");
    this.angry.style.display = "block";
  }
};

cards
  .sort(() => Math.random() - 0.5) //-перемешивает карточки в случайном порядке
  .forEach((card, index) => {
    card.btn.addEventListener("click", handlerCheckAnswer.bind(card, index));
  });
