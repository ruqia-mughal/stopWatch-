
var minutes = 0;
var second = 0;
var miliseconds= 0;

var getMin = document.getElementById("minutes");
var getSec = document.getElementById("second");
var getMili = document.getElementById("milisec");

var interval;
function timer(){
    miliseconds++;
    getMili.innerHTML = miliseconds;
    if (miliseconds>=100) {
        miliseconds = 0;
        second++;
        getSec.innerHTML = second;
        if (second>=60) {
            second= 0;
            minutes++
            getMin.innerHTML = minutes;
            
        }
   }
}
function start() {
 interval = setInterval(timer,10);
//  document.getElementById("strt").style.setProperty ="disabled"
var dis = document.getElementById("strt");
dis.disabled = true;
 
}
function stop() {
    clearInterval(interval); 
    var dis = document.getElementById("strt");
dis.disabled = false;  
}

function reset() {

minutes = 0;
second = 0;
miliseconds= 0;
getMili.innerHTML = miliseconds;
getSec.innerHTML = second;
getMin.innerHTML = minutes;
stop()

}




