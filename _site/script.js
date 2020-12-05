
$('ul.navbar-nav li.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(0).slideDown(200);
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



//filtering tags

function filter(tag) {
	setActiveTag(tag);
	showContainer(tag);
  }
  
  function setActiveTag(tag) {
	// loop through all items and remove active class
	var items = document.getElementsByClassName('blog-tag-item');
	for(var i=0; i < items.length; i++) {
	  items[i].setAttribute('class', 'blog-tag-item');
	}
  
	// set the selected tag's item to active
	var item = document.getElementById(tag + '-item');
	if(item) {
	  item.setAttribute('class', 'blog-tag-item active');
	}
  }
  
  function showContainer(tag) {
	// loop through all lists and hide them
	var lists = document.getElementsByClassName('blog-list-container');
	for(var i=0; i < lists.length; i++) {
	  lists[i].setAttribute('class', 'blog-list-container hidden');
	}
  
	// remove the hidden class from the list corresponding to the selected tag
	var list = document.getElementById(tag + '-container');
	if(list) {
	  list.setAttribute('class', 'blog-list-container');
	}
  }
