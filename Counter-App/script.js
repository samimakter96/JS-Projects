let counter = document.querySelector('#counter__value');
let decrementBtn = document.querySelector('#decrement__Btn')
let incrementBtn = document.querySelector('#increment__Btn')
let resetBtn = document.querySelector('#reset__Btn')
let incrementDecrement = document.querySelector('#increment-decrement')




incrementBtn.addEventListener('click', () => {
  const countValue = parseInt(counter.innerText);
  const incrementByValue = parseInt(incrementDecrement.value)
  counter.innerText = countValue + incrementByValue;
})

decrementBtn.addEventListener('click', () => {
 const countValue = parseInt(counter.innerText);
 const incrementByValue = parseInt(incrementDecrement.value);
 counter.innerText = countValue - incrementByValue;
})

resetBtn.addEventListener('click', () => {
  counter.innerText = 0;
})