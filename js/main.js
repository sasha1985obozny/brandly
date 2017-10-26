$(function(){

	$('.btn_menu').click(function(){
    $('.menu ul').slideToggle();
    });

	$('#owl1').owlCarousel({
		singleItem: true,
		pagination: true,
		paginationSpeed: 500,
	});

	$('#owl2').owlCarousel({
		singleItem: true,
		pagination: true,
		paginationSpeed: 500,
	});

	$('#owl-example').owlCarousel({
		// singleItem: true,
		navigation: true,
		pagination: false,
		navigationText: ['<img src="img/arrowLeft.png" alt="left">', '<img src="img/arrowRight.png" alt="right.png">'],
		items: 2,
		itemsDesktop: [1199,2],
		itemsDesktopSmall: [979,2],
		itemsTablet: [768,1],
		itemsMobile: [479,1]
	});


	$('.box3 .sizes a').click(function() {
        $('.box3 .sizes a').removeClass("active"); // удаляем у всех ссылок класс active
        $(this).addClass("active"); // устанавливаем класс active при нажатии
    });


});