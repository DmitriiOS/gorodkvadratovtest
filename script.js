let timer = document.querySelector('.main__timer');
let count = parseInt(timer.dataset.minutes);
let started = false;

start();

function start() {
  if (started) {return};
  let start_time = new Date(); 
  let stop_time = start_time.setMinutes(start_time.getMinutes() + count); 
  let countdown = setInterval(function() {
    let now = new Date().getTime();
    let remain = stop_time - now + 1000; 
    let min = Math.floor( (remain % (1000 * 60 * 60)) / (1000 * 60) );
    let sec = Math.floor( (remain % (1000 * 60)) / 1000 );
    sec = sec < 10 ? "0" + sec : sec;
    min = min < 10 ? "0" + min : min;
    timer.innerHTML = min + " : " + sec;
    if (remain < 0) {
      clearInterval(countdown);
      pageReload();
     }
  }, 1000);
  started = true;
}

function pageReload() { 
  location.reload(); 
}