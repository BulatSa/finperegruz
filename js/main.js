/***********************
 отправка формы в php BEGIN
 ***********************/
$(function($){

	$(".validate-form").on("submit", function(event) {
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

		if (send === true) {
			form.get(0).submit();
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

function choose_level(index) {
	$('#modal-order .style-radio').removeClass('active');
	$('.style-radio[data-level='+index+']').addClass('active');
	$('.modal-form').removeClass('active');
	$('.modal-form--'+index).addClass('active');
}

$(function($){
	$('#modal-order .style-radio').on('click touchstart',function () {
		var index = $(this).data('level');
		choose_level(index);
	})
});

function init_fancy() {
	$('.fancy-order').fancybox({
		fullScreen: false,
		slideShow: false,
		thumbs: false,
		transitionEffect : "slide",
		autoFocus : false,
		backFocus : false,
		animationDuration : 400,
		afterLoad: function( instance, current ) {
			var this_level = $(current.opts.$orig).data('level');
			choose_level(this_level);
		}
	});
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

	var coin = $('.levels-coin');

	$('.levels-coin__wrap').waypoint(function (direction) {
		if (direction == 'down') {
			coin.addClass('levels-coin--fixed');
		} else {
			coin.removeClass('levels-coin--fixed');
		}
	}, {
		offset: '45%'
	});

	$('.levels-coin__wrap').waypoint(function (direction) {
		var top_coin = this.element.clientHeight - $('.level--last').outerHeight();
		if (direction == 'down') {
			coin.css('top',top_coin);
			coin.removeClass('levels-coin--fixed');
		} else {
			coin.css('top','');
			coin.addClass('levels-coin--fixed');
		}
	}, {
		offset: function() {
			return (-this.element.clientHeight + $('.level--last').outerHeight() + $(window).outerHeight()/100*45)
		}
	});
});
/***********************
 Waypoints END
 ***********************/


/***********************
CALC BEGIN
***********************/
$(function ($) {

	var levels_name = {
		0: 'Без курса',
		1: 'Финансовая Безопасность',
		2: 'Финансовая Стабильность',
		3: 'Финансовая Независимость',
		4: 'Финансовая Свобода'
	};

	var percents = {
		0: [0,0,0],
		1: [5,10,5],
		2: [20,20,10],
		3: [30,40,15],
		4: [40,40,30]
	};

	// chart
	var chart = Highcharts.chart('chart', {
		chart: {
			zoomType: 'x',
			type: 'spline',
			backgroundColor: "#1a191f",
			style: {
				fontFamily: '"Proxima Nova", Arial, sans-serif;'
			}
		},

		colors: ['#ed0049', '#0bb053', '#009fcc', '#cbd8e3', '#e4b333'],

		plotOptions: {
			spline: {
				lineWidth: 3,
				states: {
					hover: {
						lineWidth: 3,
						marker: {
							enabled: false
						}
					}
				},
				marker: {
					enabled: false
				}
			}
		},

		title: {
			text: null
		},

		xAxis: {
			categories: ['2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027'],
			lineWidth: 0,
			tickWidth: 0,
			labels: {
				style: {
					color: '#FFFFFF',
					fontSize: '14px'
				}
			}
		},

		yAxis: {
			title: {
				text: null
			},
			labels: {
				style: {
					color: '#FFFFFF',
					fontSize: '12px'
				}
			},
			gridLineColor: "#8b765c"
		},

		legend: {
			enabled: false
		},

		tooltip: {
			backgroundColor: 'rgba(255,255,255,0.9)',
			borderColor: '#bc9f7d',
			borderRadius: 0,
			borderWidth: 2,
			valueSuffix: ' руб.'
		},

		credits: {
			enabled: false
		}
	});

	Highcharts.setOptions({
		lang: {
			resetZoom: 'Сбросить'
		}
	});

	function draw_chart(data) {
		var seriesLength = chart.series.length;
		for(var i = seriesLength -1; i > -1; i--) {
			chart.series[i].remove();
		}

		for (var level = 0; level < 5; level++) {
			chart.addSeries({name: levels_name[level], data: data[level]});
		}
	}
	// chart


	// range sliders
	var range_1 = $(".range_1");
	var range_2 = $(".range_2");
	var range_3 = $(".range_3");
	var range_4 = $(".range_4");
	var range_1_cur = $('.range_1_cur');
	var range_2_cur = $('.range_2_cur');
	var range_3_cur = $('.range_3_cur');
	var range_4_cur = $('.range_4_cur');

	range_1.ionRangeSlider({
		from: 300000,
		grid: false,
		min: 0,
		max: 3000000,
		prettify_enabled: true,
		step: 200,
		onStart: function (data) {
			range_1_cur.html(data.from_pretty);
		},
		onChange: function (data) {
			range_1_cur.html(data.from_pretty);
		},
		onFinish: function (data) {
			calc();
		}
	});
	range_2.ionRangeSlider({
		from: 10,
		grid: false,
		min: 0,
		max: 50,
		prettify_enabled: true,
		onStart: function (data) {
			range_2_cur.html(data.from_pretty);
		},
		onChange: function (data) {
			range_2_cur.html(data.from_pretty);
		},
		onFinish: function (data) {
			calc();
		}
	});
	range_3.ionRangeSlider({
		from: 50000,
		grid: false,
		min: 0,
		max: 10000000,
		prettify_enabled: true,
		step: 200,
		onStart: function (data) {
			range_3_cur.html(data.from_pretty);
		},
		onChange: function (data) {
			range_3_cur.html(data.from_pretty);
		},
		onFinish: function (data) {
			calc();
		}
	});
	range_4.ionRangeSlider({
		from: 8000000,
		grid: false,
		min: 0,
		max: 10000000,
		prettify_enabled: true,
		step: 200,
		onStart: function (data) {
			range_4_cur.html(data.from_pretty);
		},
		onChange: function (data) {
			range_4_cur.html(data.from_pretty);
		},
		onFinish: function (data) {
			calc();
		}
	});

	setTimeout(function () {
		calc();
	},1000);
	// range sliders


	// calc
	function calc() {
		var level,year;
		var b4 = range_1.data("from");
		var b5 = range_2.data("from");
		var b6 = range_3.data("from");
		var b7 = range_4.data("from");

		// матрица доходов
		var dohod = [];
		for (level = 0; level < 5; level++) {
			dohod[level] = [];
			dohod[level][0] = 0;
			dohod[level][1] = Math.round(b4*12*(1 + 1/100*percents[level][0]));

			for (year = 2; year < 11; year++) {
				dohod[level][year] = Math.round(dohod[level][year-1]*(1 + percents[level][0]/100));
			}
		}
		// матрица доходов


		// матрица дельты
		var delta = [];
		for (level = 0; level < 5; level++) {
			delta[level] = [];
			delta[level][0] = 0;

			for (year = 1; year < 11; year++) {
				delta[level][year] = Math.round( dohod[level][year] * ( b5/100 + percents[level][1]/100));
			}
		}
		// матрица дельты


		// матрица пред-капитала
		var pred_kapital = [];
		for (level = 0; level < 5; level++) {
			pred_kapital[level] = [];
			pred_kapital[level][0] = b6;

			for (year = 1; year < 11; year++) {
				pred_kapital[level][year] = Math.round(
					pred_kapital[level][year-1] * (1+percents[level][2]/100) + delta[level][year] * (1 + percents[level][2]/100/3)
				);
			}
		}
		// матрица пред-капитала

		// матрица капитала
		var kapital = [];
		for (level = 0; level < 5; level++) {
			kapital[level] = [];
			for (year = 0; year < 11; year++) {
				kapital[level][year] = Math.round(
					pred_kapital[level][year] - b7
				);
			}
		}
		// матрица капитала

		draw_chart(kapital);
	}
	// calc

});
/***********************
 CALC END
***********************/


/***********************
Worth stage BEGIN
***********************/
$(function($){
	$('.js-worth-btn').on('click',function () {
		$('.worth-stage').addClass('active');
		$(this).addClass('disabled');
		$('.worth-bg--blur').addClass('disabled');

		setTimeout(function () {
			var destination = $('#worth-stage').offset().top - 60;
			$('html,body').stop().animate({scrollTop:destination}, 1000);
		},1000)
	})
});
/***********************
Worth stage END
***********************/