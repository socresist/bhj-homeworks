let hasTooltip = document.querySelectorAll('.has-tooltip');

newTooltip = document.createElement('div');

newTooltip.className = 'tooltip';

hasTooltip.forEach((elem) => {
  let coordinates = elem.getBoundingClientRect();
  let left = coordinates.left;
  let top = coordinates.top - newTooltip.offsetHeight + 20;
  elem.addEventListener('click', stop, false);

  function stop(event) {

    if(newTooltip.innerHTML != elem.title) {
      newTooltip.innerHTML = elem.title;
      newTooltip.classList.add('tooltip_active')
      } else {
        newTooltip.classList.remove('tooltip_active')
        newTooltip.innerHTML = '';
      }

      event.preventDefault();

      elem.insertAdjacentElement("beforebegin", newTooltip);
    
    newTooltip.style.left = left + 'px';
        newTooltip.style.top = top + 'px';

      console.log(newTooltip)

      return newTooltip;  
    }
     
});