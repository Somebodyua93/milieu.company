$(document).ready(function() {

	//Toggle
	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".hidden-mnu").slideToggle();
		$(".fixed-logo").fadeToggle(300);
		$("body").toggleClass("scrolloff");

		return false;
	});
	//$(".toggle-mnu").slideToggle(400);

	//toggle for mobile scroll menu
	$(".scrolluse").click(function() {
		$("body").toggleClass("scrollon");
	});
	//toggle for mobile scroll menu

	//Закрытие меню в моб или планшетах при нажатие на меню
	$(".navmenu").click(function() {
		$(".toggle-mnu").toggleClass("on");
		$(".hidden-mnu").slideUp("fast");
		$(".fixed-logo").fadeToggle(300);

		return false;
	});

	//Toggle service
	$(".service").click(function() {
		$(this).next().slideToggle();
		$(this).toggleClass("service-shadow");
		$("i", this).toggleClass("fa-angle-down fa-angle-up");

		return false;
	});


	//Toggle service









	//PopUp
	$(".mfp-gallery").magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		image: {
			verticalFit: false
		},
		gallery: {
			enabled: true
		},
	});
	$(".phts-builds").magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		image: {
			verticalFit: false
		},
		gallery: {
			enabled: true
		},
	});



	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//Stellar - Parallax Plugin
	//Документация: https://github.com/markdalgleish/stellar.js
	//HTML: <div class="parallax" data-stellar-background-ratio="0.5"></div>
	$.stellar({
		horizontalScrolling: false,
		verticalOffset: 40
	});

	//equalheight - одинаковая высота колонок
	//Пример списка элементов:
	//var eqElement = ".cat_container > div, .home_news > div"
	var eqElement = ".element"
	$(window).load(function(){equalheight(eqElement);}).resize(function(){equalheight(eqElement);});

	//Masked Input Plugin
	//Документация: http://digitalbush.com/projects/masked-input-plugin/
	//$("#date").mask("99/99/9999", {placeholder : "mm/dd/yyyy"});

	//Таймер обратного отсчета
	//Документация: http://keith-wood.name/countdown.html
	//<div class="countdown" date-time="2015-01-07"></div>
	var austDay = new Date($(".countdown").attr("date-time"));
	$(".countdown").countdown({until: austDay, format: 'yowdHMS'});

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();


	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>
	$(".top_mnu").navigation();

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	/*$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100});*/
	
	
	//	$(".menu-tr-line").navigation(); старая, ниже более новое
	
	$(document).ready(function(){
   $('a[href*=#]').bind("click", function(e){
      var anchor = $(this);
      $('html, body').stop().animate({
         scrollTop: $(anchor.attr('href')).offset().top
      }, 1000);
      e.preventDefault();
   });
   return false;
	});
	

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$("a.scroll").click(function() {
		$.scrollTo($(".div"), 800, {
			offset: -90
		});
	});
	
	//Скролл до id, указанного в hash URL
	var elem = window.location.hash;
	if(elem) {
		$.scrollTo(elem, 800, {
			offset: -90
		});
	};


	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	/*function carousel_1() {
		var owl = $(".carousel");
		owl.owlCarousel({
			items : 1,
			loop : true,
			autoHeight : true,
			dots : true,
			singleItem : true
		});
		owl.on("mousewheel", ".owl-wrapper", function (e) {
			if (e.deltaY > 0) {
				owl.trigger("owl.prev");
			} else {
				owl.trigger("owl.next");
			}
			e.preventDefault();
		});
		$(".next_button").click(function() {
			owl.trigger("owl.next");
		});
		$(".prev_button").click(function() {
			owl.trigger("owl.prev");
		});
		owl.on("resized.owl.carousel", function(event) {
			var $this = $(this);
			$this.find(".owl-height").css("height", $this.find(".owl-item.active").height());
		});
		setTimeout(function() {
			owl.find(".owl-height").css("height", owl.find(".owl-item.active").height());
		}, 5000);
	};
	carousel_1();*/

    /*$(document).ready(function(){
        $(".owl-carousel").owlCarousel({
            loop:true,
            margin:10,
            nav:true,
						navigation : true,
						navigationText : ["prev","next"],
						rewindNav : true,
						scrollPerPage : true,
						baseClass : "owl-carousel",
						theme : "owl-theme",
						items : 5,
						itemsCustom : false,
						itemsDesktop : [1199,4],
						itemsDesktopSmall : [980,3],
						itemsTablet: [768,2],
						itemsTabletSmall: false,
						itemsMobile : [479,1],
						singleItem : false,
						itemsScaleUp : false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:5
                }
            }
        });
    });*/

	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/

	//main-callback
	$("#main-callback-ua").submit(function() {
		$.ajax({
			type: "GET",
			url: "main-mail-ua.php",
			data: $("#main-callback-ua").serialize()
		}).done(  function (data){
			if (data==1){
				$('#send-res').html('Ваш запит прийнятно');
				$('#myModal').modal('show');
				setTimeout(function(){
					$('#myModal').modal('hide');
					$('#comments').val(' ');
				}, 300);
			}
			else {
				$('#send-res').html('Спробуйте ще раз');
				$('#myModal').modal('show');
			}
			setTimeout(function() {
				$.fancybox.close();
			});
		});
		return false;
	});

	$("#main-callback-en").submit(function() {
		$.ajax({
			type: "GET",
			url: "main-mail-en.php",
			data: $("#main-callback-en").serialize()
		}).done(  function (data){
			if (data==1){
				$('#send-res').html('Ваш запит прийнятно');
				$('#myModal').modal('show');
				setTimeout(function(){
					$('#myModal').modal('hide');
					$('#comments').val(' ');
				}, 300);
			}
			else {
				$('#send-res').html('Спробуйте ще раз');
				$('#myModal').modal('show');
			}
			setTimeout(function() {
				$.fancybox.close();
			});
		});
		return false;
	});

	$("#main-callback-ru").submit(function() {
		$.ajax({
			type: "GET",
			url: "main-mail-ru.php",
			data: $("#main-callback-ru").serialize()
		}).done(  function (data){
			if (data==1){
				$('#send-res').html('Ваш запит прийнятно');
				$('#myModal').modal('show');
				setTimeout(function(){
					$('#myModal').modal('hide');
					$('#comments').val(' ');
				}, 300);
			}
			else {
				$('#send-res').html('Спробуйте ще раз');
				$('#myModal').modal('show');
			}
			setTimeout(function() {
				$.fancybox.close();
			});
		});
		return false;
	});
	//main-callback

	//phone-callback
	$("#callback-phone-ua").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail-phone-ua.php",
			data: $("#callback-phone-ua").serialize()
		}).done(  function (data){
			if (data==1){
				$('#send-res').html('Ваш запит прийнятно');
				$('#myModal').modal('show');
				setTimeout(function(){
					$('#myModal').modal('hide');
					$('#comments').val(' ');
				}, 300);
			}
			else {
				$('#send-res').html('Спробуйте ще раз');
				$('#myModal').modal('show');
			}
			setTimeout(function() {
				$.fancybox.close();
			});
		});
		return false;
	});

	$("#callback-phone-en").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail-phone-en.php",
			data: $("#callback-phone-en").serialize()
		}).done(  function (data){
			if (data==1){
				$('#send-res').html('Ваш запит прийнятно');
				$('#myModal').modal('show');
				setTimeout(function(){
					$('#myModal').modal('hide');
					$('#comments').val(' ');
				}, 300);
			}
			else {
				$('#send-res').html('Спробуйте ще раз');
				$('#myModal').modal('show');
			}
			setTimeout(function() {
				$.fancybox.close();
			});
		});
		return false;
	});

	$("#callback-phone-ru").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail-phone-ru.php",
			data: $("#callback-phone-ru").serialize()
		}).done(  function (data){
			if (data==1){
				$('#send-res').html('Ваш запит прийнятно');
				$('#myModal').modal('show');
				setTimeout(function(){
					$('#myModal').modal('hide');
					$('#comments').val(' ');
				}, 300);
			}
			else {
				$('#send-res').html('Спробуйте ще раз');
				$('#myModal').modal('show');
			}
			setTimeout(function() {
				$.fancybox.close();
			});
		});
		return false;
	});


	//phone-callback

	$(function($){
		$("#phone").mask("+38 (099) 999-99-99");
		$("#phone2").mask("+38 (099) 999-99-99");
		$("#phone3").mask("+38 (099) 999-99-99");
		$("#phone4").mask("+38 (099) 999-99-99");
		$("#phone5").mask("+38 (099) 999-99-99");
		$("#phone6").mask("+38 (099) 999-99-99");
		$("#main-form-ua").mask("+38 (099) 999-99-99");
		$("#main-form-en").mask("+38 (099) 999-99-99");
		$("#main-form-ru").mask("+38 (099) 999-99-99");
		$("#phone-ua").mask("+38 (099) 999-99-99");
		$("#phone-en").mask("+38 (099) 999-99-99");
		$("#phone-ru").mask("+38 (099) 999-99-99");

	});

	// PARALLAX<<<<<<<<<<<<<<<<<<< до 103 строки
	/* detect touch */
	if("ontouchstart" in window){
		document.documentElement.className = document.documentElement.className + " touch";
	}
	if(!$("html").hasClass("touch")){
		/* background fix */
		$(".parallax").css("background-attachment", "fixed");
	}

	/* fix vertical when not overflow
	 call fullscreenFix() if .fullscreen content changes */
	function fullscreenFix(){
		var h = $('body').height();
		// set .fullscreen height
		$(".content-b").each(function(i){
			if($(this).innerHeight() > h){ $(this).closest(".fullscreen").addClass("overflow");
			}
		});
	}
	$(window).resize(fullscreenFix);
	fullscreenFix();

	/* resize background images */
	function backgroundResize(){
		var windowH = $(window).height();
		$(".background").each(function(i){
			var path = $(this);
			// variables
			var contW = path.width();
			var contH = path.height();
			var imgW = path.attr("data-img-width");
			var imgH = path.attr("data-img-height");
			var ratio = imgW / imgH;
			// overflowing difference
			var diff = parseFloat(path.attr("data-diff"));
			diff = diff ? diff : 0;
			// remaining height to have fullscreen image only on parallax
			var remainingH = 0;
			if(path.hasClass("parallax") && !$("html").hasClass("touch")){
				var maxH = contH > windowH ? contH : windowH;
				remainingH = windowH - contH;
			}
			// set img values depending on cont
			imgH = contH + remainingH + diff;
			imgW = imgH * ratio;
			// fix when too large
			if(contW > imgW){
				imgW = contW;
				imgH = imgW / ratio;
			}
			//
			path.data("resized-imgW", imgW);
			path.data("resized-imgH", imgH);
			path.css("background-size", imgW + "px " + imgH + "px");
		});
	}
	$(window).resize(backgroundResize);
	$(window).focus(backgroundResize);
	backgroundResize();

	/* set parallax background-position */
	function parallaxPosition(e){
		var heightWindow = $(window).height();
		var topWindow = $(window).scrollTop();
		var bottomWindow = topWindow + heightWindow;
		var currentWindow = (topWindow + bottomWindow) / 2;
		$(".parallax").each(function(i){
			var path = $(this);
			var height = path.height();
			var top = path.offset().top;
			var bottom = top + height;
			// only when in range
			if(bottomWindow > top && topWindow < bottom){
				var imgW = path.data("resized-imgW");
				var imgH = path.data("resized-imgH");
				// min when image touch top of window
				var min = 0;
				// max when image touch bottom of window
				var max = - imgH + heightWindow;
				// overflow changes parallax
				var overflowH = height < heightWindow ? imgH - height : imgH - heightWindow; // fix height on overflow
				top = top - overflowH;
				bottom = bottom + overflowH;
				// value with linear interpolation
				var value = min + (max - min) * (currentWindow - top) / (bottom - top);
				// set background-position
				var orizontalPosition = path.attr("data-oriz-pos");
				orizontalPosition = orizontalPosition ? orizontalPosition : "50%";
				$(this).css("background-position", orizontalPosition + " " + value + "px");
			}
		});
	}
	if(!$("html").hasClass("touch")){
		$(window).resize(parallaxPosition);
		//$(window).focus(parallaxPosition);
		$(window).scroll(parallaxPosition);
		parallaxPosition();
	}
// PARALLAX<<<<<<<<<<<<<<<<<<<


	/*//jQuery active scroll active scroll active scroll jQuery*/
	/*$(document).on("scroll", onScroll);*/

	/*//smoothscroll*/
	/*$('a[href^="#"]').on('click', function (e) {*/
	/*	e.preventDefault();*/
	/*	$(document).off("scroll");*/

	/*	$('a').each(function () {*/
	/*		$(this).removeClass('active');*/
	/*	})*/
	/*	$(this).addClass('active');*/

	/*	var target = this.hash,*/
	/*			menu = target;*/
	/*	$target = $(target);*/
	/*	$('html, body').stop().animate({*/
	/*		'scrollTop': $target.offset().top+2*/
	/*	}, 500, 'swing', function () {*/
	/*		window.location.hash = target;*/
	/*		$(document).on("scroll", onScroll);*/
	/*	});*/
	/*});*/
	/*//jQuery active scroll active scroll active scroll jQuery*/

});

/*//JS active scroll active scroll active scroll JS
function onScroll(event){
	var scrollPos = $(document).scrollTop();
	$("#menu-white a").each(function () {
		var currLink = $(this);
		var refElement = $(currLink.attr("href"));
		if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
			$("#menu-white ul li a").removeClass("active");
			currLink.addClass("active");
		}
		else{
			currLink.removeClass("active");
		}
	});
}
//JS active scroll active scroll active scroll JS*/

//multilanguage multilanguage multilanguage
(function(){
	var body = document.getElementsByTagName('body')[0];

	var switcherRU = document.getElementById('switcher-ru');
	var switcherEN = document.getElementById('switcher-en');
	var switcherUA = document.getElementById('switcher-ua');
	var switchermobRU = document.getElementById('switchermob-ru');
	var switchermobEN = document.getElementById('switchermob-en');
	var switchermobUA = document.getElementById('switchermob-ua');

	// Заранее считаем срок хранения кук
	var expires = new Date();
	expires.setDate(expires.getDate() + 366);
	expires.toUTCString();

	// Русский и английский заголовки
	var titleRU = document.getElementById('title-ru');
	var titleEN = document.getElementById('title-en');
	var titleUA = document.getElementById('title-ua');
	var title = {
		ru: titleRU.getAttribute('content'),
		en: titleEN.getAttribute('content'),
		ua: titleUA.getAttribute('content')
	}

	var switchLang = function() {
		var lang = this.id;
		lang = lang.replace('switcher-', ''),
		lang = lang.replace('switchermob-', '');

		// Меняем класс для BODY
		body.className = lang;

		// Записываем куки
		document.cookie = [
			'lang=' + lang
			,'; expires=' + expires // используем expires, max-age не поддерживается в ИЕ
			,'; path=/'
			,'; domain=' + document.location.host
		].join('');
		document.title = title[lang];
	}

	switcherRU.onclick = switchLang;
	switcherEN.onclick = switchLang;
	switcherUA.onclick = switchLang;
	switchermobRU.onclick = switchLang;
	switchermobEN.onclick = switchLang;
	switchermobUA.onclick = switchLang;
})();
//multilanguage multilanguage multilanguage