const image = document.getElementById("cookie");


function changeSize() {
  return image.width = image.width === 250 ? 200 : 250
 }


const timer = document.getElementById("clicker__counter");
let text = timer.textContent; 
timer.textContent = "0"; 


function game() {
  console.log(timer.textContent++)
}; 

image.addEventListener("click", function() {
  changeSize(); 
  game()
}
);