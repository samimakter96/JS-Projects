const endDate = '30 March 12:00 PM 2024'

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll('input')



function clock() {
  const end = new Date(endDate);
  const now = new Date();  // current date
  // console.log(end);
  // console.log(now);
  const diff = (end - now) / 1000;  // diff in milliseconds
  // console.log(diff);
  // console.log(Math.floor(diff / 3600 / 60 / 24));
  
  // stop the watch
  if (diff < 0) {
    return;
  }

  // convert into days
  inputs[0].value = Math.floor(diff / 3600 / 24);

  // convert into hours
  inputs[1].value = Math.floor((diff / 3600) % 24);

  // convert in minutes
  inputs[2].value = Math.floor(diff / 60) % 60;

  // convert in seconds
  inputs[3].value = Math.floor(diff) % 60;

}

clock();

/*
1 day - 24 hours 
1 hours - 60 minutes 
60 minutes - 3600 seconds 
*/

setInterval(() => {
  clock()
}, 1000)