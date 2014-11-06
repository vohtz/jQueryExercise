(function($){
	$.fn.rainbow = function(){
		var target = $(this).attr('style');
		if (target == undefined || target == ''){
			$(this).attr('style', 'background: -webkit-linear-gradient(left top, red , blue, green, yellow);')
		} 
		else if (target == 'background: -webkit-linear-gradient(left top, red , blue, green, yellow);' ){
			$(this).removeAttr("style");
		}
	}
})(jQuery);