const daysCounter=document.getElementById('daysCounter');
const hoursCounter =document.getElementById('hoursCounter');
const minutesCounter =document.getElementById('minutesCounter');
const secondsCounter =document.getElementById('secondsCounter');
const buttons = document.querySelectorAll('button');

buttons.forEach(btn=> {
   btn.addEventListener('click', function(e) {
      let x = e.clientX - e.target.offsetLeft;
      let y = e.clientY - e.target.offsetTop;

      let ripples = document.createElement('span');
      ripples.classList.add('ripples');
      ripples.style.left = x +'px';
      ripples.style.top = y +'px';
      this.appendChild(ripples);
      setTimeout(()=> {
         ripples.remove()
      }, 1000);
   })
}
)

const currentYear = new Date().getFullYear();
const christmasDate = new Date(`December 25 ${currentYear} 00:00:00`);

function countDown() {
   const currentTime = new Date();
   const difference = christmasDate - currentTime;

   const d = Math.floor(difference/1000/60/60/24);
   console.log(d);
   const h = Math.floor(difference/1000/60/60%24);
   console.log(h);
   const m = Math.floor(difference/1000/60%60);
   console.log(m);
   const s = Math.floor(difference/1000%60);
   console.log(s);

   if (d < 10) {
      daysCounter.innerHTML = "0" + d;
   } else {
      daysCounter.innerHTML = d;
   }
   hoursCounter.innerHTML = h < 10 ? "0" + h : h;
   minutesCounter.innerHTML = m < 10 ? "0" + m : m;
   secondsCounter.innerHTML = s < 10 ? "0" + s : s;
}

setInterval(countDown, 1000);
