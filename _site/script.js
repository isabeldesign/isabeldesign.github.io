
$('ul.navbar-nav li.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(100).slideDown(200);
  }, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).slideUp(200);
  });

 
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 };