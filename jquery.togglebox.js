/**
 *
 * Copyright (c) 2009 Tony Dewan (http://www.tonydewan.com/)
 * Licensed under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   http://www.tonydewan.com/code/checkToggle/
 * 
 */

(function($) {
	/**
	 * Version 1.0
	 * Replaces checkboxes with a toggle switch.
	 * usage: $("input[type='checkbox']").toggleBox();
	 *
	 * @name  toggleBox
	 * @type  jquery
	 * @param Hash    settings					Settings
 	 * @param String  settings[onLabel]			Text used for the left-side (on) label. Defaults to "On"
	 * @param String  settings[offLabel]		Text used for the right-side (off) label. Defaults to "Off"
	 */

    $.fn.toggleBox = function(settings) {

		settings = $.extend({
			onLabel:'On', 
			offLabel:'Off'
		}, settings);

		return this.each(function () {
			
			state = ( $(this).attr("checked") ) ? 'on' : 'off';		
			
			// build the switch
			var toggle = $('<div/>').addClass('toggleSwitch').addClass(state);
			var left = $('<span/>').addClass('onLabel').html(settings.onLabel).appendTo(toggle);
			var area = $('<div/>').addClass('switchArea').appendTo(toggle);
			var handle = $('<span/>').addClass('switchHandle').appendTo(area);
			var right = $('<span/>').addClass('offLabel').html(settings.offLabel).appendTo(toggle);		
			
			$(handle).bind("click", function(){ 
				
				if( $(this).closest('.toggleSwitch').prev().attr("checked") ){

					newMargin = $(this).parent().width() - $(this).width() + 'px';

					$(this).animate({marginLeft: newMargin}, 500, function(){
						$(this).closest('.toggleSwitch').removeClass('on').addClass("off");
						$(this).closest('.toggleSwitch').prev().removeAttr("checked");
					});

				}else{

					$(this).animate({marginLeft: '0'}, 500, function(){
						$(this).closest('.toggleSwitch').removeClass('off').addClass("on");
						$(this).closest('.toggleSwitch').prev().attr("checked","checked");
					});

				}
			});
			
			
			$(this).hide().after(toggle);
		});
		

	};

})(jQuery);