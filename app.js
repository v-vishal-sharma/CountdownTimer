const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

// code to always add 10 days when timer expires
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDay();
const futureDate = new Date(tempYear,tempMonth,tempDay+10,11,30,0);

// let futureDate = new Date(2022,9,21,10,30,0); //comment this line to use above code

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const date = futureDate.getDate();

// let month = futureDate.getMonth();
// month = months[month]
const month = months[futureDate.getMonth()];

// let day = futureDate.getDay();
// day = weekdays[day]
const day = weekdays[futureDate.getDay()];

giveaway.textContent = `Sale starts on ${day}, ${date} ${month} ${year} ${hours}:${minutes}am`;

// future time in ms
const futureTime = futureDate.getTime();


function getRemainingTime(){
  const today = new Date().getTime();
  const t = futureTime - today;
  

  // values in ms
  const oneDay = 24*60*60*1000;
  const oneHour = 60*60*1000;
  const oneMinute = 60*1000;

  // calculate all values
  let days = t/oneDay;
  days = Math.floor(days);
  

  let hours = Math.floor((t%oneDay)/oneHour);
  let minutes = Math.floor((t%oneHour)/oneMinute);
  let seconds = Math.floor((t%oneMinute)/1000);

  // set values array
  const values = [days,hours,minutes,seconds];
  
  function format(item){
    if (item<10){
      return item = `0${item}`
    }
    return item
  }

  items.forEach(function(item,index){
    item.innerHTML = format(values[index]);
  });

  if(t<0){
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class='expired'>The Sale has Started!!!! <br> Or ended and you've already bought it :)</h4>`
  }
}

// countdown
let countdown = setInterval(getRemainingTime , 1000);

getRemainingTime();
