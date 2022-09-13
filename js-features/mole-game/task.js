for (let i = 1; i < 10; i++) {
    
    const dead = document.getElementById("dead");
    const lost = document.getElementById("lost");
    let index ='hole' + i;
    const hole = document.getElementById(index);
 
    hole.onclick = function() {

       if (hole.className.includes('hole_has-mole')) {
         dead.textContent ++;
       } else {
          lost.textContent ++;
          }

       if (dead.textContent === "5") {
          message ("You have win!")
          }

       if (lost.textContent === "10") {
          message ("You have lost!")
          }
       } 
    
    function message (text) {
       alert(text);
       dead.textContent = 0;
       lost.textContent = 0;
    }
 }