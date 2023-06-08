const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  const clock = document.getElementById("clock");
  const dateDisplay = document.getElementById("date");

  clock.innerText = `${hours}:${minutes}:${seconds}`;
  dateDisplay.innerText = `${year}년 ${month}월 ${day}일`;
}

getClock();
setInterval(getClock, 1000);
