(function($) {
    "use strict";
	
	/* ..............................................
	   Loader 
	   ................................................. */
	$(window).on('load', function() {
		$('.preloader').fadeOut();
		$('#preloader').delay(550).fadeOut('slow');
		$('body').delay(450).css({
			'overflow': 'visible'
		});
	});

	/* ..............................................
	   Fixed Menu
	   ................................................. */

	$(window).on('scroll', function() {
		if ($(window).scrollTop() > 50) {
			$('.main-header').addClass('fixed-menu');
		} else {
			$('.main-header').removeClass('fixed-menu');
		}
	});

	/* ..............................................
	   Gallery
	   ................................................. */

	$('#slides-shop').superslides({
		inherit_width_from: '.cover-slides',
		inherit_height_from: '.cover-slides',
		play: 5000,
		animation: 'fade',
	});

	$(".cover-slides ul li").append("<div class='overlay-background'></div>");

	/* ..............................................
	   Map Full
	   ................................................. */

	$(document).ready(function() {
		$(window).on('scroll', function() {
			if ($(this).scrollTop() > 100) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});
		$('#back-to-top').click(function() {
			$("html, body").animate({
				scrollTop: 0
			}, 600);
			return false;
		});
	});

	/* ..............................................
	   Special Menu
	   ................................................. */

	var Container = $('.container');
	Container.imagesLoaded(function() {
		var portfolio = $('.special-menu');
		portfolio.on('click', 'button', function() {
			$(this).addClass('active').siblings().removeClass('active');
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({
				filter: filterValue
			});
		});
		var $grid = $('.special-list').isotope({
			itemSelector: '.special-grid'
		});
	});

	/* ..............................................
	   BaguetteBox
	   ................................................. */

	baguetteBox.run('.tz-gallery', {
		animation: 'fadeIn',
		noScrollbars: true
	});

	/* ..............................................
	   Offer Box
	   ................................................. */

	$('.offer-box').inewsticker({
		speed: 3000,
		effect: 'fade',
		dir: 'ltr',
		font_size: 13,
		color: '#ffffff',
		font_family: 'Montserrat, sans-serif',
		delay_after: 1000
	});

	/* ..............................................
	   Tooltip
	   ................................................. */

	$(document).ready(function() {
		$('[data-toggle="tooltip"]').tooltip();
	});

	/* ..............................................
	   Owl Carousel Instagram Feed
	   ................................................. */

	$('.main-instagram').owlCarousel({
		loop: true,
		margin: 0,
		dots: false,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
		responsive: {
			0: {
				items: 2,
				nav: true
			},
			600: {
				items: 3,
				nav: true
			},
			1000: {
				items: 5,
				nav: true,
				loop: true
			}
		}
	});

	/* ..............................................
	   Featured Products
	   ................................................. */

	$('.featured-products-box').owlCarousel({
		loop: true,
		margin: 15,
		dots: false,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
		responsive: {
			0: {
				items: 1,
				nav: true
			},
			600: {
				items: 3,
				nav: true
			},
			1000: {
				items: 4,
				nav: true,
				loop: true
			}
		}
	});

	/* ..............................................
	   Scroll
	   ................................................. */

	$(document).ready(function() {
		$(window).on('scroll', function() {
			if ($(this).scrollTop() > 100) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});
		$('#back-to-top').click(function() {
			$("html, body").animate({
				scrollTop: 0
			}, 600);
			return false;
		});
	});

	/* ..............................................
	   Dangnhap
	   ................................................. */

	$(document).ready(function() {
		$('.selectpicker').change(function() {
			if ($(this).val() == 'Đăng nhập') {
				window.location.href = 'Login.html';
			}
		});
	});

	/* ..............................................
	   Dangky
	   ................................................. */

	$(document).ready(function() {
		$('.selectpicker').change(function() {
			if ($(this).val() == 'Đăng ký ngay') {
				window.location.href = 'Register.html';
			}
		});
	});

/* ..............................................
	   Detail product for Apple
	   ................................................. */

	$(document).ready(function() {
		$('.img-apple').click(function() {
		  window.location.href = 'shop-detail.html';
		});
	  });
	  

	/* ..............................................
	   Slider Range
	   ................................................. */

	// $(function() {
	// 	$("#slider-range").slider({
	// 		range: true,
	// 		min: 0,
	// 		max: 4000,
	// 		values: [1000, 3000],
	// 		slide: function(event, ui) {
	// 			$("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
	// 		}
	// 	});
	// 	$("#amount").val("$" + $("#slider-range").slider("values", 0) +
	// 		" - $" + $("#slider-range").slider("values", 1));
	// });


	
	/* ..............................................
	   Add new Items
	   ................................................. */

	$(document).ready(function() {
  
		$('#add-product-btn').click(function() {
		  // Lấy giá trị của các input
	  var productName = $('#product-name').val();
	  var productPrice = $('#product-price').val();
	  var productImage = $('#product-image')[0].files[0];
	  
	  // Tạo các phần tử HTML mới
	  var $productWrap = $('<div>').addClass('product-wrap');
	  var $productImg = $('<div>').addClass('product-img');
	  var $img = $('<img>').attr('src', URL.createObjectURL(productImage)).attr('alt', productName + '_img');
	  var $productIcons = $('<div>').addClass('product-icons');
	  var $addToFavorite = $('<div>').addClass('add-to-favorite');
	  var $heartIcon = $('<span>').addClass('icon-heart');
	  var $discount = $('<p>').append($('<span>').addClass('discount').text('12% off'));
	  var $productDescription = $('<div>').addClass('product-description');
	  var $productName = $('<p>').addClass('product-name').text(productName);
	  var $price = $('<p>').addClass('price');
	  var $strong = $('<strong>').text('Giá:');
	  var $del = $('<del>');
	  var $fProductPrice = $('<span>').addClass('f-product-price').text('350');
	  var $ins = $('<ins>');
	  var $fCurPrice = $('<span>').addClass('f-cur-price').text(productPrice);
	  var $fProductUnit = $('<span>').addClass('f-product-unit').text('kg');
	  var $addToCartBtn = $('<div>').addClass('add-to-cart-btn');
	  var $cartPlusIcon = $('<span>').addClass('icon-cart-plus');
	  var $p = $('<p>').append($cartPlusIcon).append('Thêm vào giỏ');
	  
	  // Ghép các phần tử HTML với nhau để tạo thành sản phẩm mới
	  $productImg.append($img);
	  $addToFavorite.append($heartIcon);
	  $productIcons.append($addToFavorite).append($discount);
	  $del.append($fProductPrice).append('k/kg');
	  $ins.append($fCurPrice).append('k/kg');
	  $price.append($strong).append($del).append($ins).append($fProductUnit);
	  $addToCartBtn.append($p);
	  $productDescription.append($productName).append($price).append($addToCartBtn);
	  $productWrap.append($productImg).append($productIcons).append($productDescription);
	  
	  // Thêm sản phẩm mới vào danh sách sản phẩm
	  $('.featured-products').append($productWrap);
	  
		});
	  });

	  /* ..............................................
	   Search in Shop.html
	   ................................................. */
	  
	  $(document).ready(function(){
        // Lấy giá trị từ ô tìm kiếm khi submit form
        $('.search-product form').submit(function(event){
            event.preventDefault(); // Ngăn chặn form submit mặc định
            var searchValue = $(this).find('input[type="text"]').val().toLowerCase();

            // Lặp qua tất cả các sản phẩm và kiểm tra xem tên sản phẩm có chứa từ khóa tìm kiếm không
            $('.products-single').each(function(){
                var productName = $(this).find('h4').text().toLowerCase();
                if(productName.indexOf(searchValue) != -1){
                    $(this).show(); // Nếu tìm thấy sản phẩm thì hiển thị
                } else {
                    $(this).hide(); // Nếu không tìm thấy sản phẩm thì ẩn đi
                }
            });
            
        });
    });

	/* ..............................................
	   Sort high price -> low or low -> high in shop.html
	   ................................................. */

	$(document).ready(function() {
		var originalList = $('.products').html(); // lưu trữ danh sách sản phẩm ban đầu
		$('.select1').change(function() {
			var sortType = $(this).val();
			var productsList = $('.products-single');
			if (sortType == 2) {
				productsList.sort(function(a, b) {
					return parseFloat($('.why-text h5', a).text()) - parseFloat($('.why-text h5', b).text());
				}).appendTo('.products');
			} else if (sortType == 3) {
				productsList.sort(function(a, b) {
					return parseFloat($('.why-text h5', b).text()) - parseFloat($('.why-text h5', a).text());
				}).appendTo('.products');
			} else { // Nếu chọn Nothing, đưa danh sách sản phẩm về trạng thái ban đầu
				window.location.href = 'shop.html';
			}
		});
	});
}(jQuery));