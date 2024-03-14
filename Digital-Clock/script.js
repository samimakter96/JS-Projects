let dateContainer = document.querySelector('.date-container');
let hoursContainer = document.querySelector('.hours');
let minutesContainer = document.querySelector('.minutes');
let secondsContainer = document.querySelector('.seconds');


const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];


function formatTime(time) {
  let formattedTime = time < 10 ? '0' + time : time;
  if (time > 12) {
    formattedTime = formattedTime - 12;
  }
  return formattedTime;
}

function updateClock() {

  const today = new Date();
  // console.log(today)
  let date = today.getDate();
  // console.log(date)
  let day = weekdays[today.getDay()];
  let month = monthNames[today.getMonth()];

  // console.log(today.getDay(), today.getMonth()); // it give number that is why we use string array weekdays monthNames

  // console.log(day, month)

  let hours = formatTime(today.getHours());
  let minutes = formatTime(today.getMinutes());
  let seconds = formatTime(today.getSeconds());

  dateContainer.innerHTML = ` <p>${day}</p><p><span>${date}</span></p><p>${month}</p>`;

  hoursContainer.textContent = hours + ":";
  minutesContainer.textContent = minutes + ":";
  secondsContainer.textContent = seconds;
}

setInterval(updateClock, 1000)