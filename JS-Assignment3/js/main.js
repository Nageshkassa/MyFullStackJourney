// document.getElementById("myBtn").addEventListener("click",func);
// function func(){
//     document.getElementById("dayinpt").innerHTML="44";
// }
// var isStop=true;
// // isStop 
// function startTimer() {
//     if( isStop==true){
//         isStop=false;
//         timer();
//     }
// }
// function timer(){
    
// }

//     timerInterval = setInterval(() => {
//       if (totalSeconds > 0) {
//         totalSeconds--;
//         timerDisplay.textContent = formatTime(totalSeconds);
//       } else {
//         clearInterval(timerInterval);
//         isStop = false;
//       }
//     }, 1000);
//   }

document.getElementById("secondinpt").innerHTML="00";
document.getElementById("minuteinpt").innerHTML="00";
document.getElementById("hrinpt").innerHTML="00";
document.getElementById("dayinpt").innerHTML="00";

let timerInterval;
let totalSeconds = 0;
let remainingSeconds = 0;
let isStop = false;

function updateTimer() {

  const days = parseInt(document.getElementById('days').value);
  const hours = parseInt(document.getElementById('hours').value);
  const minutes = parseInt(document.getElementById('minutes').value);
  const seconds = parseInt(document.getElementById('seconds').value);

  if (days < 0){
    days = 0;
  } 
  if (hours < 0){
    hours = 0;
  } 
  if (minutes < 0) {
    minutes = 0;}
  if (seconds < 0) {
    seconds = 0;
  }

  totalSeconds = days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60 + seconds;

}

function formatTime(time) {
  
  const pad = (num) => num.toString().padStart(2, '0');
  const days = Math.floor(time / (24 * 60 * 60));
  const hours = Math.floor((time % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((time % (60 * 60)) / 60);
  const seconds = Math.floor(time % 60);
  
  document.getElementById("secondinpt").innerHTML=pad(seconds);
  document.getElementById("minuteinpt").innerHTML=pad(minutes);
  document.getElementById("hrinpt").innerHTML=pad(hours);
  document.getElementById("dayinpt").innerHTML=pad(days);

  
  
}
    
function startTimer() {
  
  isStop = true;
  timerInterval = setInterval(() => {
    if (totalSeconds > 0) {
      totalSeconds--;
      console.log("start function is called");
     formatTime(totalSeconds);
    } 
    else {
      clearInterval(timerInterval);
      isStop = false;
    }
  }, 1000);
}

function pauseTimer() 
{
  clearInterval(timerInterval);
  isStop = false;
  remainingSeconds = totalSeconds;

}


function resumeTimer() {

  if (isStop==false) {

    isStop = true;
   if (remainingSeconds > 0) {
  
        totalSeconds=remainingSeconds--;
        startTimer();}
      }




}

function resetTimer() {

  clearInterval(timerInterval);
  totalSeconds = 0;
  remainingSeconds = 0;
  formatTime(totalSeconds);
  isStop = false;

}

document.getElementById('setTimerButton').addEventListener('click', () => {


  
  updateTimer();

formatTime(totalSeconds);
  

});

document.getElementById('startButton').addEventListener('click', () => {

  if (!isStop ) {
    updateTimer();
    if (remainingSeconds > 0) {
      resumeTimer();
    } 
    else {
     
      startTimer();
    }

  }
    document.getElementById('days').value = 0;
  document.getElementById('hours').value = 0;
  document.getElementById('minutes').value = 0;
  document.getElementById('seconds').value = 0;

});


document.getElementById('pauseButton').addEventListener('click', () => {

  if (isStop) {

    pauseTimer();

  }

});

document.getElementById('resetButton').addEventListener('click', () => {
  resetTimer();
  document.getElementById('days').value = 0;
  document.getElementById('hours').value = 0;
  document.getElementById('minutes').value = 0;
  document.getElementById('seconds').value = 0;
});

document.getElementById('btn').addEventListener('click',e=>{

  e.style.display = 'block';
});




document.getElementById('btn').addEventListener('click', () => {
  document.getElementById('footer').style.display = 'block';
});

document.getElementById('icon').addEventListener('click', () => {
  console.log("icon is clicked");
  document.getElementById('footer').style.display = 'none';
});


// function myfun(){
//   document.getElementById('footer')
// }


  // document.getElementById('btn').addEventListener('click', () => {
  //   console.log("cliked the  myfun ");
  // });