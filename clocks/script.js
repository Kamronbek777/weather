
let hrs = document.querySelector('#hrs');
let min = document.querySelector('#min');
let sec = document.querySelector('#sec');
let day = document.querySelector('#day');

setInterval( function (){
    let currentTime = new Date();
    let dayOfWeek = currentTime.toLocaleString("en-US", { weekday: "long" });

    hrs.textContent = currentTime.getHours()
    min.textContent = currentTime.getMinutes()
    sec.textContent = currentTime.getSeconds()
    day.textContent = dayOfWeek;

    if (hrs <= 9){
        hrs = `0 ${hrs}`;
    }else {
        hrs = hrs;
    }
    if (min <= 9){
        min = `0 ${min}`;
    }else {
        min = min;
    }
    if (sec <= 9){
        sec = `0 ${sec}`;
    }else {
        sec = sec;
    }   
}, 1000)



// let hrs = document.querySelector('#hrs');
// let min = document.querySelector('#min');
// let sec = document.querySelector('#sec');
// let day = document.querySelector('#day');

// setInterval(() => {
//     let currentTime = new Date();
//     let dayOfWeek = currentTime.toLocaleString("en-UZ", { weekday: "long" });

//     hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
//     min.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
//     sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
//     day.innerHTML = dayOfWeek;
// }, 1000)