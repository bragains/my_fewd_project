//Services section: function to show/hide tabs

$(document).ready(function() {
	$('.tabs .tab-links a').on('click', function(e) {
		var currentAttrValue = $(this).attr('href');

		//Show/Hide Tabs
		$('.tabs ' + currentAttrValue).slideDown(400).siblings().slideUp(400);

		//Change/remove current tab to active
		$(this).parent('li').addClass('active').siblings().removeClass('active');

		e.preventDefault();
	});
});




//Team section: function to display skills/interests when clicked.

$(document).ready(function() {
	$('.teammate .team-links a').on('click', function() {
		var currentAttrValue = $(this).attr('href');

		//Show/Hide Tabs
		$('.teammate ' + currentAttrValue).slideDown(400).siblings().slideUp(400);

		e.preventDefault();
	});
});
