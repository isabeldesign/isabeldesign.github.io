
$('ul.navbar-nav li.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(100).slideDown(200);
  }, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).slideUp(200);
  });

 
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 };



 $(document).ready(function(){
	$(window).scroll(function () {
			if ($(this).scrollTop() > 50) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('#back-to-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 400);
			return false;
		});
});

