const link = Array.from(document.querySelectorAll('.menu__link'));

link.forEach((item) => {
   item.onclick = () => {
      const menuItem = item.closest('.menu__item');
      const sub = menuItem.querySelector('.menu_sub');

      if (sub) {
         sub.classList.toggle('menu_active');
         return false;
      }
   }
});