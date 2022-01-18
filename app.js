const dialLines = document.getElementsByClassName('diallines');

const clockEl = document.getElementById('clock');

for (let i = 1; i < 60; i++){
    clockEl.innerHTML += `<div class="diallines"></div>`; 
    dialLines[i].style.transform = `rotate(${6 * i}deg)`;
}

function clock(){
    const d = new Date(),
          h = d.getHours(),
          m = d.getMinutes(),
          s = d.getSeconds(),
          date = d.getDate(),
          month = d.getMonth(),
          year = d.getFullYear(),

        hDeg = h * 30 + m * (360/720);
        mDeg = m * 6 + s * (360/3600);
        sDeg = s * 6;

        hourEl = document.querySelector('.hour-hand')
        minEl = document.querySelector('.minute-hand')
        secEl = document.querySelector('.second-hand')
        dateEl = document.querySelector('.date')

        hourEl.style.transform = `rotate(${hDeg}deg)`;
        minEl.style.transform = `rotate(${mDeg}deg)`;
        secEl.style.transform = `rotate(${sDeg}deg)`;

        dateEl.innerHTML = `${date}/${month}/${year}`
}

setInterval("clock()", 1000);
