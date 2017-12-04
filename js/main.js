/***********************
Input mask BEGIN
***********************/
$(function($){
	$("input[type='tel']").mask("+7 (999) 999-99-99");
});
/***********************
Input mask END
***********************/


/***********************
 fancybox BEGIN
 ***********************/
function init_fancy() {
	$('.fancy').fancybox({
		fullScreen: false,
		slideShow: false,
		thumbs: false,
		transitionEffect : "slide",
		autoFocus : false,
		backFocus : false,
		animationDuration : 400
	});
	$('.fancy-map').fancybox({
		toolbar: false,
		smallBtn : true,
		transitionEffect : "slide",
		autoFocus : false,
		backFocus : false,
		animationDuration : 400
	});
}
function init_fancy__video() {
	$('.fancy-video').fancybox({
		toolbar: false,
		smallBtn : true,
		fullScreen: false,
		thumbs: false,
		youtube: {
			controls : 1,
			showinfo : 0,
			autoplay: 1
		},
		onUpdate : function( instance, current ) {
			var width,
				height,
				ratio = 16 / 9,
				video = current.$content;
			if ( video ) {
				video.hide();
				width  = current.$slide.width() - 30;
				height = current.$slide.height() - 100;
				if ( height * ratio > width ) {
					height = width / ratio;
				} else {
					width = height * ratio;
				}
				video.css({
					width  : width,
					height : height
				}).show();
			}
		}
	});
}
$(function(){
	init_fancy();
	init_fancy__video();
});
/***********************
 fancybox END
 ***********************/


/***********************
 Прокрутка к секциям BEGIN
 ***********************/
$(function($){
	$('.scrollto').click(function () {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;
		$('html,body').stop().animate({scrollTop:destination}, 1000);
		return false;
	});
});
/***********************
 Прокрутка к секциям END
 ***********************/


/***********************
 Counter BEGIN
 ***********************/
$(document).ready(function() {
	function formatStr(str) {
		str = str.replace(/(\.(.*))/g, '');
		var arr = str.split('');
		var str_temp = '';
		if (str.length > 3) {
			for (var i = arr.length - 1, j = 1; i >= 0; i--, j++) {
				str_temp = arr[i] + str_temp;
				if (j % 3 == 0) {
					str_temp = ' ' + str_temp;
				}
			}
			return str_temp;
		} else {
			return str;
		}
	}

	function number_to(element,from,to,duration){
		var start = new Date().getTime();
		setTimeout(function() {
			var now = (new Date().getTime()) - start;
			var progress = now / duration;
			var result = Math.floor((to - from) * progress + from);
			var text_to_show = progress < 1 ? result : to;
			var formated_text = formatStr(text_to_show.toString());
			element.text(formated_text);
			if (progress < 1) setTimeout(arguments.callee, 10);
		}, 10);
	}

	$('.num').waypoint(function (direction) {
		var elem_counter = $(this.element);
		var to = elem_counter.data('num');
		if (!elem_counter.hasClass('ended')){
			number_to(elem_counter,0,to,1500);
		}
		elem_counter.addClass('ended');
	}, {
		offset: '80%'
	});
});
/***********************
 Counter END
 ***********************/


/***********************
faq BEGIN
***********************/
$(function($){
	$('.faq-item').on('click',function () {
		var this_item = $(this);
		var this_faq = this_item.parents('.faq');
		var this_answer = this_item.find('.faq-item__answer');
		this_faq.find('.faq-item').not(this_item).removeClass('active');
		this_item.addClass('active');
		this_faq.find('.faq-item__answer').not(this_answer).stop().slideUp();
		this_answer.stop().slideDown();
	})
});
/***********************
faq END
***********************/


/***********************
Review slider BEGIN
***********************/
$(function($){
	var reviews_slider = $('.reviews-slider');

	reviews_slider.flickity({
		pageDots: false,
		prevNextButtons: true,
		cellAlign: 'left',
		dragThreshold: 30,
		arrowShape: 'M13.76,37.45,1.43,49.78a.31.31,0,0,0,0,.48L13.76,62.59a.33.33,0,0,0,.48,0L15.83,61,6.1,51.28H97.22a1.38,1.38,0,0,0,1.36-1.39h0a1.38,1.38,0,0,0-1.36-1.36H6.33L15.83,39l-1.59-1.59a.33.33,0,0,0-.48,0Z',
		cellSelector: '.review',
		imagesLoaded: true
	});

	reviews_slider.on( 'select.flickity', function() {
		reviews_slider.find('.review.is-selected').removeClass('past');
		reviews_slider.find('.review.is-selected').prevAll('.review').addClass('past');
		reviews_slider.find('.review.is-selected').nextAll('.review').removeClass('past');
	});

	var reviews_slider_data = reviews_slider.data('flickity');
	var review_current_element = $('.reviews-slider-counter__cur');
	var review_all_element = $('.reviews-slider-counter__all');

	review_current_element.text(reviews_slider_data.selectedIndex+1);
	review_all_element.text(reviews_slider_data.slides.length);

	reviews_slider.on( 'select.flickity', function() {
		review_current_element.text(reviews_slider_data.selectedIndex+1);
		review_all_element.text(reviews_slider_data.slides.length);
	});
});
/***********************
Review slider END
***********************/


/***********************
preim slider BEGIN
***********************/
$(function($){
	var preims_slider = $('.preims-slider');

	preims_slider.flickity({
		pageDots: false,
		prevNextButtons: true,
		cellAlign: 'left',
		dragThreshold: 30,
		arrowShape: 'M13.76,37.45,1.43,49.78a.31.31,0,0,0,0,.48L13.76,62.59a.33.33,0,0,0,.48,0L15.83,61,6.1,51.28H97.22a1.38,1.38,0,0,0,1.36-1.39h0a1.38,1.38,0,0,0-1.36-1.36H6.33L15.83,39l-1.59-1.59a.33.33,0,0,0-.48,0Z',
		cellSelector: '.preim',
		imagesLoaded: true
	});

	var preims_slider_data = preims_slider.data('flickity');
	var preims_current_element = $('.preims-slider-counter__cur');
	var preims_all_element = $('.preims-slider-counter__all');

	preims_current_element.text(preims_slider_data.selectedIndex+1);
	preims_all_element.text(preims_slider_data.slides.length);
	set_preims_nav(0);

	preims_slider.on( 'select.flickity', function() {
		preims_current_element.text(preims_slider_data.selectedIndex+1);
		preims_all_element.text(preims_slider_data.slides.length);
		set_preims_nav(preims_slider_data.selectedIndex);
	});

	function set_preims_nav(index) {
		$('.preims-nav li').removeClass('active').eq(index).addClass('active');
	}

	$('.preims-nav li').on('click',function () {
		var this_index = $(this).index();
		preims_slider.flickity( 'select', this_index );
	});


	var $imgs = $('.preim__img img');
	var $titles = $('.preim__title');
	var $texts = $('.preim__text');

	preims_slider.on( 'scroll.flickity', function() {
		preims_slider_data.slides.forEach( function( slide, i ) {
			var img = $imgs[i];
			var title = $titles[i];
			var text = $texts[i];
			var x = ( slide.target + preims_slider_data.x ) * -1;
			var x2 = ( slide.target + preims_slider_data.x ) * -1;
			var x3 = ( slide.target + preims_slider_data.x ) * -1;
			img.style.transform = 'translateX( ' + x  + 'px)';
			title.style.transform = 'translateX( ' + x2  + 'px)';
			text.style.transform = 'translateX( ' + x3  + 'px)';
		});
	});
});
/***********************
preim slider END
***********************/


/***********************
 Link anchors BEGIN
 ***********************/
$(function($){

	$('.header-menu__nav a').each(function () {
		var target = $(this).attr('href');
		$(target).addClass('__nav-section');
	});

	$(window).scroll(function() {
		var w_scroll = $(window).scrollTop();
		var w_height = $(window).height();
		$('.header-menu__nav li').removeClass('active');
		$('.__nav-section').each(function() {
			var section_top = $(this).offset().top;
			var section_h = $(this).outerHeight();

			if ((w_scroll >= section_top-w_height/2) && (w_scroll < section_top + section_h-80)){
				var section_index = $(this).index('.__nav-section');
				$('.header-menu__nav li').eq(section_index).addClass('active');
			}
		});
	});

});
/***********************
 Link anchors END
 ***********************/


/***********************
 Waypoints BEGIN
 ***********************/
$(function($){
	$('.anim').waypoint(function () {
		$(this.element).toggleClass('animated');
	}, {
		offset: '85%'
	});


});
/***********************
 Waypoints END
 ***********************/

