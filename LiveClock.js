console.log("Live Clock Working");
function showTime() {
  const date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let session = "AM";

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  var time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;

  setTimeout(showTime, 1000);
}

showTime();

// console.log("Alarm.js Clock start");
var audio = new Audio(
  "/Media/bestringtones.net_iphone-13-pro-max-original.mp3"
);
// audio.play();

const alarmsumit = document.getElementById("alarmsumit");
alarmsumit.addEventListener("click", setAlarm);

function ringBell() {
  audio.play();
}

function setAlarm(e) {
  e.preventDefault();
  const alarm = document.getElementById("alarm");
  alarmDate = new Date(alarm.value);
  console.log(`setting Alarm for ${alarmDate}....`);
  now = new Date();

  let timeToAlarm = alarmDate - now;
  console.log(timeToAlarm);
  if (timeToAlarm >= 0) {
    setTimeout(() => {
      console.log("Ringing now");
      ringBell();
    }, timeToAlarm);
  }
}
