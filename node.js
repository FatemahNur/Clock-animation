var currentSec = getSecondsToday();
var seconds = currentSec % 60;
var minutes = (currentSec / 60) % 60;
var hours = (currentSec / 3600) % 12;

setTime(60 * seconds, "second");
setTime(60 * minutes, "minute");
setTime(3600 * hours, "hour");

function setTime(left, hand) {
  $(".clock__" + hand).css("animation-delay", "" + left * -1 + "s");
}

function getSecondsToday() {
  let now = new Date();
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  let diff = now - today;
  return Math.round(diff / 1000);
}
