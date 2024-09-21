let hour=document.querySelector('.hrs');
let minute=document.querySelector('.min')
let second=document.querySelector('.sec');
function runclock(){
    let time=new Date();
    let sec=time.getSeconds()/60;
    let min=(sec+time.getMinutes())/60;
    let hrs=(min+time.getHours())/12;
    hour.style.setProperty('--rotation',hrs*360);
    minute.style.setProperty('--rotation',min*360);
    second.style.setProperty('--rotation',sec*360)
}
runclock();
setInterval(runclock,1000)