const image = document.getElementById("cookie");

let i = 0;

function changeSize() {
  if (i==0) {
   image.width = 250;
   image.height = 200;
 i=1;
 } 
  else if (i==1) {
   image.width = 200;
   image.height = 150;
   i = 0;
 }
 };

const timer = document.getElementById("clicker__counter");

timer.textContent = "0"; 

function game() {
  console.log(timer.textContent++)
}; 

image.addEventListener("click", function() {
  changeSize(); 
  game()
});