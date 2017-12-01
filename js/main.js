/***********************
 отправка формы в php BEGIN
***********************/
$(function($){

	$(".ajax-form").on("submit", function(event) {
		var form = $(this);
		var send = true;
		event.preventDefault();

		$(this).find("[data-req='true']").each(function(){
			if ($(this).val() === "") {
				$(this).addClass('error');
				send = false;
			}
			if ($(this).is('select')){
				if ($(this).val() === null) {
					$(this).addClass('error');
					send = false;
				}
			}
			if ($(this).is('input[type="checkbox"]')){
				if ($(this).prop('checked') !== true) {
					$(this).addClass('error');
					send = false;
				}
			}
		});

		$(this).find("[data-req='true']").on('focus', function(){
			$(this).removeClass('error');
		});

		var form_data = new FormData(this);

		$("[data-label]").each(function () {
			var input_name = $(this).attr('name');
			var input_label__name = input_name + '_label';
			var input_label__value = $(this).data('label');
			form_data.append(input_label__name,input_label__value)
		});

		if (send === true) {
			$.ajax({
				type: "POST",
				async: true,
				url: "/send.php",
				cache: false,
				contentType: false,
				processData: false,
				data: form_data,
				success: (function(result) {
					var result_from_server = JSON.parse(result);
					console.log(result_from_server);
					$.fancybox.close();
					$.fancybox.open({src  : '#modal-thanks'});
					setTimeout(function() {$.fancybox.close();},4500);
					form[0].reset();
				})
			});
		}
	});
});
/***********************
 отправка формы в php END
***********************/


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
