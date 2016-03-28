var urlInput = $('.urlInput'), captionInput = $('.captionInput');
var urlValid = false, captionValid = false;

var imageDetails = {
	url: urlInput.val(),
	caption: captionInput.val()
}

$('.dropdownBtn').on('click', function(e) {
	$('.dropdownMenu').slideToggle(1000);
});

$('.cancelBtn').on('click', function(e) {
	urlInput.val('');
	captionInput.val('');
	$('.dropdownMenu').slideToggle(1000);
});

$('.addImageBtn').on('click', function(e) {
	if(!urlInput.val()) {
		$('.urlError').html('//Please enter something for your url');
	} else if (urlInput.val().substr(0, 7) !== 'http://') {
		$('.urlError').html('//Your URL should start with "http://"');
	} else {
		console.log('Url works');
		$('.urlError').html('');
		urlValid = true;
	}

	if(!captionInput.val()) {
		$('.captionError').html('//Please enter something for your caption');
	} else {
		console.log('Caption works');
		$('.captionError').html('');
		captionValid = true;
	}

	if(urlValid && captionValid) {
		// $.ajax(postSettings);
	}
});

// var postSettings = {
// 	url: 'https://small-tiyfe.herokuapp.com/collections/nate-hawthorne/',
// 	type: 'post',
// 	data: imageDetails,
// 	dataType: 'json',
// 	success: function() {
// 		console.log('Image submitted! :D');
// 	},
// 	error: function(err) {
// 		console.log('Something went wrong...');
// 	},
// 	complete: function() {
// 		console.log('Well, the button works as intended. That\'s something.');
// 	}
// }