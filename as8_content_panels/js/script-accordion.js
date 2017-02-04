$(document).ready(function() {
		if ($('#accordion').length) {
				$('#accordion').find('.accordion-toggle').click(function() {
						if ($(this).hasClass('open')) {
								$(this).next().slideUp('fast');
								$(this).removeClass('open');
						} else {
								$(this).next().slideDown('fast');
								$(this).addClass('open');
								$(".accordion-content").not($(this).next()).slideUp('fast');
								$(".accordion-toggle").not($(this)).removeClass('open');
						}
				});
		}
});