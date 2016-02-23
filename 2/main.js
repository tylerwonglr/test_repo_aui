var test = document.getElementById('test-div');
test.innerHTML = "testing";

var testDiv = $('#test-div').html('hello');

testDiv.on(
	'click',
	function(e) {
		var currentTarget = e.currentTarget;
	}
);