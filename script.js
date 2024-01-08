const days=document.querySelector("#days");
const hours=document.querySelector("#hours");
const mints=document.querySelector("#mints");
const seconds=document.querySelector("#seconds");


function bday() {

const currentYear= new Date().getFullYear();

const birthDay= new Date(`December 31 ${currentYear}    00:00:00`);

const currentDate= new Date();

const diff=birthDay-currentDate;

const d=Math.floor(diff/1000/60/60/24);

const h=Math.floor((diff/1000/60/60)%24);

const m=Math.floor((diff/1000/60)%60);

const s=Math.floor((diff/1000)%60);

//console.log(d+" "+h+" "+m+" "+s);

days.innerHTML=d<10?"0"+d:d;
hours.innerHTML=h<10?"0"+h:h;
mints.innerHTML=m<10?"0"+m:m;
seconds.innerHTML=s<10?"0"+s:s;
}

setInterval(bday,1000);

