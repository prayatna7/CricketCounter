const infor = document.getElementById('info');
let count = document.getElementById('count');
let runs =  document.getElementById('run');
let wick =  document.getElementById('wic');
let wides = document.getElementById('wide');
let nobo =  document.getElementById('nob');
let a =0;
let run=0;
let wic=0;
let wide=0;
let nob=0;
let OC =0;
function increase(){
     a += 0.1;
     a= Math.round(a*10)/10;
    if(a/1>=4.6&&a/1<6){
        if(OC==0){
            OC++;
        infor.value =' 5 Overs!!!!';
    }}
    if((a%1)>0.5){
        a=a+0.4;
        a=a/1;
    }
    count.value =a;
}
function decrease(){
    if(a>0){
        if(a%1==0){ 
            a= (a-1)+0.5;
            count.value = a;
        }else{
    a -= 0.1;
    a= Math.round(a*10)/10;
    count.value =a;
}}   else{
    count.value=0;
}
}
function reset(){
    if(a>0||run>0||wic>0||wide>0||nob>0){
    let resett=confirm("Are You Sure?\nDo You Want To Reset?");
        if(resett){
    a=0;
    run =0;
    wic=0;
    wide=0;
    nob=0;
    OC=0;
    count.value =a;
    runs.value =run;
    wick.value= wic;
    wides.value= wide;
    nobo.value= nob;
    infor.value='';
    }}
    else{
        alert("Icrease Something First");
    }
}
function incRun(){
    run++;
    runs.value = run;
    if(run==50){
        infor.value='HALF-CENTURY!!!';
}}
function decRun(){
    if(run>0){
    run--;
    runs.value = run;
    }
    else
    runs.value=0;
}
function incWic(){
    if(wic<10){
        infor.value='OUT!!!';
        wic++;
    wick.value = wic;
    }
    else
        wick.value =10;
}
function decWic(){
    if(wic>0){
    wic--;
    wick.value = wic;
    }
    else
    wick.value=0;
}
function incWide(){
    infor.value='<-WIDE->'
    wide++;
    run++;
    runs.value =run;
    wides.value = wide;
}
function decWide(){
    if(wide>0){
    wide--;
    run--;
    runs.value = run;
    wides.value = wide;
    }
    else
    wides.value=0;
}
function incNo(){
    infor.value='X  No Bowl  X';
    nob++;
    run++;
    runs.value =run;
    nobo.value = nob;
}
function decNo(){
    if(nob>0){
    nob--;
    run--;
    runs.value = run;
    nobo.value = nob;
    }
    else
    nobo.value=0;
}


let inningInterval;
let seconds = 0;

function startInning() {
  clearInterval(inningInterval); // reset if already running
  seconds = 0;
  inningInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  seconds++;
  let mins = Math.floor(seconds / 60);
  let secs = seconds % 60;
  document.getElementById("timer").textContent =
    (mins < 10 ? "0" : "") + mins + ":" + (secs < 10 ? "0" : "") + secs;
}