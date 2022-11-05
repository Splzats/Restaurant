import "./style.css";

import {
  contentWrap,
  header,
  displayWindowAbout,
  displayWindowMenu,
  displayWindowReservations,
  backgroundLogo,
} from "./build-dom";

contentWrap.appendChild(backgroundLogo);
backgroundLogo.appendChild(header);
backgroundLogo.appendChild(displayWindowAbout);
backgroundLogo.appendChild(displayWindowMenu);
backgroundLogo.appendChild(displayWindowReservations);

// nav button functionality

const homeButton = document.querySelector("#homeBtn");
const menuButton = document.querySelector("#menuBtn");
const reservationButton = document.querySelector("#reservationBtn");

homeButton.addEventListener("click", () => {
  aboutUsSection.style.display = "flex";
  menuSection.style.display = "none";
  reservationSection.style.display = "none";
});
menuButton.addEventListener("click", () => {
  aboutUsSection.style.display = "none";
  menuSection.style.display = "flex";
  reservationSection.style.display = "none";
});
reservationButton.addEventListener("click", () => {
  aboutUsSection.style.display = "none";
  menuSection.style.display = "none";
  reservationSection.style.display = "flex";
});

//reservation calendar functionality

const datePicker = document.querySelector(".date-picker");
const selectedDate = document.querySelector(".date-picker .selected-date");
const dates = document.querySelector(".date-picker .dates");
const month = document.querySelector(
  ".date-picker .dates .month .monthSelected"
);
const prevMonth = document.querySelector(
  ".date-picker .dates .month .prev-month"
);
const nextMonth = document.querySelector(
  ".date-picker .dates .month .next-month"
);
const days = document.querySelector(".date-picker .dates .days");

const monthArray = [
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

let currentDate = new Date();
let currentDay = currentDate.getDate();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

let pickedDate = currentDate;
let pickedDay = currentDay;
let pickedMonth = currentMonth;
let pickedYear = currentYear;

const staticDate = new Date();
const minMonth = staticDate.getMonth();
const minYear = staticDate.getFullYear();

month.textContent = monthArray[currentMonth] + " " + currentYear;

selectedDate.textContent = `${currentMonth + 1}/${currentDay}/${currentYear}`;
selectedDate.dataset.value = selectedDate.textContent;

createDays();

//form ele vars
const timeEle = document.querySelector("#time-selection");
const guestEle = document.querySelector("#guest-selection");
const nameEle = document.querySelector("#name-input");
const emailEle = document.querySelector("#resEmail");
const telEle = document.querySelector("#resTel");
const resEleBtn = document.querySelector("#makeResBtn");

//listeners
datePicker.addEventListener("click", toggleDatePicker);

nextMonth.addEventListener("click", monthForward);

prevMonth.addEventListener("click", monthBackward);

resEleBtn.addEventListener("click", function () {
  document.querySelector(".resForm").reset();

  let resetDate = new Date();
  let resetDay = resetDate.getDate();
  let resetMonth = resetDate.getMonth();
  let resetYear = resetDate.getFullYear();

  selectedDate.textContent = `${resetMonth + 1}/${resetDay}/${resetYear}`;
});

//functions
function toggleDatePicker(e) {
  if (!checkEventPathForClass(e.path, "dates")) {
    dates.classList.toggle("active");
  }
}

function monthForward() {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  month.textContent = monthArray[currentMonth] + " " + currentYear;
  createDays();
}

function monthBackward() {
  if (currentYear == minYear && currentMonth === minMonth) {
    currentMonth = minMonth;
    currentYear = minYear;
    createDays();
    return;
  }

  if (currentYear >= minYear) {
    currentMonth--;
    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    }
  }
  month.textContent = monthArray[currentMonth] + " " + currentYear;
  createDays();
}

function createDays() {
  days.innerHTML = "";
  let totalDays = 31;

  if (
    currentMonth == 3 ||
    currentMonth == 5 ||
    currentMonth == 8 ||
    currentMonth == 10
  ) {
    totalDays = 30;
  } else if (currentMonth == 1) {
    totalDays = 28;
  }

  for (let i = 0; i < totalDays; i++) {
    const dayCell = document.createElement("div");
    dayCell.classList.add("day");
    dayCell.textContent = i + 1;

    if (
      pickedDay == i + 1 &&
      pickedYear == currentYear &&
      pickedMonth == currentMonth
    ) {
      dayCell.classList.add("selected");
    }
    dayCell.addEventListener("click", function () {
      pickedDate = `${currentMonth + 1}/${i + 1}/${currentYear}`;

      pickedDay = i + 1;
      pickedMonth = currentMonth;
      pickedYear = currentYear;

      selectedDate.textContent = pickedDate;
      selectedDate.dataset.value = selectedDate.textContent;
      createDays();
    });

    days.appendChild(dayCell);
  }
}

//helper
function checkEventPathForClass(path, selector) {
  for (let i = 0; i < path.length; i++) {
    if (path[i].classList && path[i].classList.contains(selector)) {
      return true;
    }
  }
  return false;
}
