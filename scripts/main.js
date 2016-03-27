var urlInput = $('.urlInput'), captionInput = $('.captionInput');

$('.dropdownBtn').on('click', function(e) {
	$('.dropdownMenu').slideToggle(1000);
});

$('.cancelBtn').on('click', function(e) {
	urlInput.val('');
	captionInput.val('');
	$('.dropdownMenu').slideToggle(1000);
});