const answers = ["1", "2", "3"];

const cards = [
  {
    input: document.querySelector(".input1"),
    btn: document.querySelector(".btn1"),
    angry: document.querySelector(".angry1"),
    good: document.querySelector(".good1"),
  },
  {
    input: document.querySelector(".input2"),
    btn: document.querySelector(".btn2"),
    angry: document.querySelector(".angry2"),
    good: document.querySelector(".good2"),
  },
  {
    input: document.querySelector(".input3"),
    btn: document.querySelector(".btn3"),
    angry: document.querySelector(".angry3"),
    good: document.querySelector(".good3"),
  },
];

const getAnswer = (index) => {
  return answers[index];
};

let count = 0;

const handlerCheckAnswer = function (index) {
  if (this.input.value === getAnswer(index)) {
    this.input.disabled;
    this.btn.disabled;
    count++;
    if (count === 3) {
      alert("Вы ответили правильно");
    }
  } else {
    this.input.value = "";
    alert("Ответ неверный, попробуйте угадать 1,2 или 3");
  }
};

cards
  .sort(() => Math.random() - 0.5)
  .forEach((card, index) =>
    card.btn.addEventListener("click", handlerCheckAnswer.bind(card, index))
  );

//метод bind не вызывает функцию, а возвращает ее с привязанным контекстом

// const returnObj = (str = "") => {
//   return {
//     value: str,
//     length: str.length,
//   };
// };

// console.log(returnObj("Привет всем!"));

const returnObj = (str = "") => ({
  value: str,
  length: str.length,
});

console.log(returnObj("Привет всем!")); //{value: 'Привет всем!', length: 12}
