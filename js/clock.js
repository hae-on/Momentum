const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  // padStart를 통해 '0'을 첨가해 총 문자열 길이가 2로 만든다 (초를 한자리 형태에서 두자리로 변환 01 02 03...)
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// getClock을 적지 않으면 1초 뒤에 시간이 뜨게 됨
getClock();
setInterval(getClock, 1000);
