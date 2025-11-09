let timeleft = 120;
const timerElement = document.getElementById("timer");

const countdown = setInterval(() =>{
timeleft--;
timerElement.textContent = timeleft;

if (timeleft <= 0){
  window.location.href="https://soulonyoso-design.github.io/rainbowise.exe/";
}}, 1000)
