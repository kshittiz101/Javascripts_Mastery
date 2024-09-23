function showTime() {
  let date = new Date();
  console.log(date);
  let hours = date.getHours(); // 0 - 23
  console.log(hours);
  let minutes = date.getMinutes(); // 0 - 59
  console.log(minutes);
  let seconds = date.getSeconds(); // 0 -59
  console.log(seconds);
  let session = "AM";

  if (hours == 0) {
    hours = 12;
  }
  if (hours > 12) {
    hours = hours - 12;
    session = "PM";
  }

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  let time = hours + ":" + minutes + ":" + seconds + ":" + session;

  let clock = document.getElementById("MyClockDisplay");
  clock.textContent = time;
  setTimeout(showTime, 1000);
}

showTime();
