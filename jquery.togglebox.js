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
	 * usage: $("input[type='checkbox']").toggleBox(settings);
	 *
	 * @name  toggleBox
	 * @type  jquery
	 * @param Hash    settings					Settings
 	 * @param String  settings[on_label]		Text used for the left-side (on) label. Defaults to "On"
	 * @param String  settings[off_label]		Text used for the right-side (off) label. Defaults to "Off"
	 * @param String  settings[on_bg_color]		Hex background color for On state
	 * @param String  settings[off_bg_color]	Hex background color for Off state
	 */

    $.fn.toggleBox = function(settings) {

		settings = $.extend({
			on_label	: 'On',
			on_bg_color	: '#5bb554', 
			off_label	: 'Off',
			off_bg_color: '#F8837C'
		}, settings);

		
		function toggle(element){
			
			var checked = $(element).parent().parent().prev().attr("checked");
			
			// if it's set to on
			if(checked){
				
				$(element).animate({marginLeft: '2.125em'},500, 
				
				// callback function
				function(){
					$(element).parent().prev().css("color","#333");
					$(element).parent().next().css("color","#ccc");
					$(element).parent().css("background-color", settings.off_bg_color);
					$(element).parent().parent().prev().removeAttr("checked");
					$(element).removeClass("left").addClass("right");
				});
			
			}else{
			
				$(element).animate({marginLeft: '0em'}, 500, 
				
				// callback function
				function(){
					$(element).parent().prev().css("color","#ccc");
					$(element).parent().next().css("color","#333");
					$(element).parent().css("background-color", settings.on_bg_color);
					$(element).parent().parent().prev().attr("checked","checked");
					$(element).removeClass("right").addClass("left");
					
				});
			
			}
		
		};

		return this.each(function () {
			
			// hide the checkbox
			$(this).css('display','none');
			
			// insert the new toggle markup
			if($(this).attr("checked") == true){
				$(this).after('<div class="toggleSwitch"><span class="leftLabel" style="color:#cccccc;">'+settings.on_label+'<\/span><div class="switchArea" style="background-color: '+settings.on_bg_color+'"><span class="switchHandle left" style="margin-left: 0em;"><\/span><\/div><span class="rightLabel" style="color:#333;">'+settings.off_label+'<\/span><\/div>');
			}else{
				$(this).after('<div class="toggleSwitch"><span class="leftLabel" style="color:#333;">'+settings.on_label+'<\/span><div class="switchArea" style="background-color: '+settings.off_bg_color+'"><span class="switchHandle right" style="margin-left:2.125em"><\/span><\/div><span class="rightLabel" style="color:#cccccc;">'+settings.off_label+'<\/span><\/div>');
			}			
			
			// Bind the switchHandle click events to the internal toggle function			
			$(this).next().find('span.switchHandle').bind("click", function () { toggle(this); })

		});
		

	};

})(jQuery);