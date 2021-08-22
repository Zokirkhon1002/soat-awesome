const Hourhtml = document.querySelector(".hour");
const Minutehtml = document.querySelector(".minute");
const Secondhtml = document.querySelector(".second");
const Timehtml = document.querySelector(".time");
const Datehtml = document.querySelector(".date");
const Togglehtml = document.querySelector(".toggle");

const kunlar = [
  "Yakshnba",
  "Dushanba",
  "Seshanba",
  "Chorshanba",
  "Payshanba",
  "Juma",
  "Shanba",
];
const oylar = [
  "Yanvar",
  "Fevral",
  "Mart",
  "Aprel",
  "May",
  "Iyun",
  "Iyul",
  "Avgust",
  "Sentyabr",
  "Oktyabr",
  "Noyabr",
  "Dekabr",
];

Togglehtml.addEventListener("click", (e) => {
  const html = document.querySelector("html");
  if (html.classList.contains("dark")) {
    e.target.innerText = "Dark mode";
    html.classList.remove("dark");
  } else {
    e.target.innerText = "Light mode";
    html.classList.add("dark");
  }
});

function setTime() {
  const timeNow = new Date();
  const monthNow = timeNow.getMonth();
  const dayNow = timeNow.getDay();
  const dateNow = timeNow.getDate();
  const hoursNow = timeNow.getHours();
  const hoursForClock = hoursNow % 12;
  const minutesNow = timeNow.getMinutes();
  const secondsNow = timeNow.getSeconds();
  const AMorPM = hoursNow >= 12 ? "PM" : "AM";

  Hourhtml.style.transform = `translate(-50%, -100%) rotate(${fromStackOverFlow(
    hoursForClock,
    0,
    11,
    0,
    360
  )}deg)`;
  Minutehtml.style.transform = `translate(-50%, -100%) rotate(${fromStackOverFlow(
    minutesNow,
    0,
    59,
    0,
    360
  )}deg)`;
  Secondhtml.style.transform = `translate(-50%, -100%) rotate(${fromStackOverFlow(
    secondsNow,
    0,
    59,
    0,
    360
  )}deg)`;

  Timehtml.innerHTML = `${hoursForClock}:${
    minutesNow < 10 ? `0${minutesNow}` : minutesNow
  } ${AMorPM}`;
  Datehtml.innerHTML = `${kunlar[dayNow]}, ${oylar[monthNow]} <span class="circle">${dateNow}</span>`;
}

// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const fromStackOverFlow = (n, inmin, inmax, outmin, outmax) => {
  return ((n - inmin) * (outmax - outmin)) / (inmax - inmin) + outmin;
};

setTime();
setInterval(setTime, 1000);
