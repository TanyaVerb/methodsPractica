//контекст - область видимости + переменная this
//this -ссылка на объект, который вызывает код в данный момент

let count = 0;

function f1() {
  console.log(count);
  console.log(this);
  this.textContent = count;
  count++;
}

document.querySelector(".btn").addEventListener("click", f1); // заменит текст на кнопке на 0 /<button class="btn">0</button> повторное нажатие приводит к увеличению данного счетчика (0=> 1=>2=> 3 и т.д.)

// arrow не имеют this (в стрелочной функции this это window)
const f2 = () => {
  console.log(count);
  console.log(this);
  this.textContent = count;
  count++;
};

document.querySelector(".btn1").addEventListener("click", f2); //Window {window: Window, self: Window, document: document, name: '', location: Location, …}

//call - подменить запуск функции с нужным контекстом
