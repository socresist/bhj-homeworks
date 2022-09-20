let modal = document.getElementById("modal_main");

modal.classList.add('modal_active');

let close = document.getElementsByClassName('modal__close');

let closeArray = Array.from(close);

let success = document.getElementById('modal_success');

let showSuccess = document.querySelector('.show-success');


for (let i = 0; i < closeArray.length; i++) {
  closeArray[i].onclick = function() {
    modal.classList.remove('modal_active');
    success.classList.remove("modal_active");
  }
};

showSuccess.onclick = function() {
    modal.classList.remove('modal_active');
    success.classList.add('modal_active');
}
