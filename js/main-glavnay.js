document.addEventListener("DOMContentLoaded", function(){
  $('.menu-btn').on('click', function(e) {
  e.preventDefault();
  $('.menu').toggleClass('menu_active');
});
});