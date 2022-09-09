let countdownTimer = 0; 

  let x = 59; 

function countdown() {
  document.getElementById("timer").innerHTML = x;
    x--; 
    
      if (x<0) {
        clearTimeout(countdownTimer);
          alert('Вы победили в конкурсе')
  } 

             else {
               countdownTimer = setTimeout(countdown, 1000)
  }
}

countdown();
