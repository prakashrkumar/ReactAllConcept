
function updatedClock(){
    let date=new Date();
    let hours=date.getHours();
      let minutes=date.getMinutes();
    let seconds=date.getSeconds();
 hours=hours<10? '0'+hours:hours;
 minutes=minutes<10? '0'+minutes:minutes;
 seconds=seconds<10? '0'+seconds:seconds;

const currTime=`${hours}:${minutes}:${seconds}`;
 document.querySelector('#clock').textContent=currTime;
 
}
setInterval(updatedClock,1000);
updatedClock()