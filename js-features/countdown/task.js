let seconds = 60;
function countdown() {
if (seconds === 0) {
    clearInterval(timer); 
    alert("You have won the competition!");
  }
}
const timer = setInterval(countdown, 1000);
