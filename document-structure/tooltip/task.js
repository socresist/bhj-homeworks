let hasTooltip = document.querySelectorAll('.has-tooltip');

newTooltip = document.createElement('div');

newTooltip.className = 'tooltip';

hasTooltip.forEach((elem) => {

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

      console.log(newTooltip)

      return newTooltip;  
    }
     
});