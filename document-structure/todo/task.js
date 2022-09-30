let tasksInput = document.querySelector('.tasks__input');

let tasksList = document.querySelector('.tasks__list');

let tasksForm = document.getElementById('tasks__form');

let task = document.querySelectorAll('.task');

tasksForm.onsubmit = function() {
  let text = tasksInput.value.trim();
  if (text) {
    tasksList.insertAdjacentHTML("beforeend", `<div class="task">
    <div class="task__title">${text}</div>
    <a href="#" class="task__remove">
    &times;
    </a>
    </div>`);
    let taskRemove = document.querySelectorAll('.task__remove');
    taskRemove[taskRemove.length -1].addEventListener('click', function(){
        this.parentElement.remove();
      })
         
   }
     tasksInput.value = '';
     return false;
};