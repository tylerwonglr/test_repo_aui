console.log('video2.js');

YUI.add(
	'video2',
	function(A, NAME) {

		var TRUE = true,
		ID = "id";

		var Video2 = A.Component.create(
			{
				NAME: "video2",
				ATTRS: {
					width: {
						value: "500px"
					},
					height: {
						value: "500px"
					},
					boundingBox: {
						valueFn: "_defaultBB",
						setter: "_setBB",
						writeOnce: TRUE
					},
					color: {
						value: "#FFF"
					},
					render: {
					    value: true
					}
				},
				prototype: {
					renderUI: function() {
						var instance = this;

						console.log("hit render function");
						console.log('hit render function');
						instance._setColor();
					},

					_setColor: function(color) {
						console.log('this color: ' + color);
					},

					_setColor: function() {
						console.log('yes');
					},

				}
			}
		);

		A.Video2 = Video2;
	},
	'',
	{
		requires: ['aui-base', 'aui-component']
	}

);