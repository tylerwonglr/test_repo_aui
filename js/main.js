console.log('hello');

YUI.add(
	'video-player',
	function(A, NAME) {

		/**
		 * The Responsive Video Component
		 *
		 * @module video-player
		 */

		var Lang = A.Lang,
		UA = A.UA,
		getClassName = A.getClassName,

		CSS_VIDEO_NODE = getClassName('video', 'node'),

		DEFAULT_PLAYER_PATH = A.config.base + 'aui-video/assets/player.swf?t=' + Lang.now(),

		DOC = A.config.doc,

		TPL_VIDEO = '<video id="{id}" controls="controls" class="' + CSS_VIDEO_NODE + '" {height} {width}></video>',
		TPL_VIDEO_FALLBACK = '<div class="' + CSS_VIDEO_NODE + '"></div>';


		/**
		 *A base responsive class for Video.
		 *
		 * Check the demo out!
		 *
		 * @class A.RVideo
		 * @extends A.Component
		 * @param {Object} config Object literal specifying widget configuration
		 *     properties
		 * @constructor
		 * @include http://...
		 */
		var RVideo = A.Component.create({
			/**
			 * Static property provides a string to identify the class.
			 *
			 * @property NAME
			 * @type String
			 * @static
			 */
			NAME: 'video'

			/**
			 * Static property used to define the default attribute
			 * configuration for the Video.
			 *
			 * @property ATTRS
			 * @type Object
			 * @static
			 */
			ATTRS: {

				/**
				 * The required Flash version for the swf player
				 *
				 * @attribute flashPlayerVersion
				 * @default '9,0,0,0'
				 * @type String
				 */
				flashPlayerVersion: {
				    validator: Lang.isString,
				    value: '9,0,0,0'
				},


		});








	},
	'',
	{
		"requires": [
			'aui-base'
		],
		"skinnable": true
	}
);