var hitrn = 0;
// making this randomly generated number global so that we 
// can access it from anywhere else.
function makeBubble()
{
    var clutter = "";

    for(var i = 1; i <= 208; i++)
    {
        var rn = Math.floor(Math.random()*10);
        clutter+=`<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}
makeBubble();

var timer = 6;
function runTimer()
{
    var timerint = setInterval(function(){
    if(timer > 0)
    {
        timer--;
        document.querySelector("#timerval").textContent = timer;
    }
    else
    {
        document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`
        clearInterval(timerint);
    }
    },1000)
}
runTimer();

function getNewHit()
{
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}
getNewHit();

var score = 0;
function increaseScore()
{
    score+=10;
    document.querySelector("#scoreval").textContent = score;
}


document.querySelector("#pbtm")
.addEventListener("click",function(dets){
    var clickedNumber = Number(dets.target.textContent);
    if(hitrn == clickedNumber)
    {
        increaseScore();
        makeBubble();
        getNewHit();
    }
})