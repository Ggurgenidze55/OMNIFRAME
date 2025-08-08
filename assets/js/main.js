(function ($) {
    "use strict";
    /*=================================
        JS Index Here
    ==================================*/
    /*
    01. On Load Function
    02. Preloader
    03. Mobile Menu
    04. Sticky fix
    05. Scroll To Top
    06. Set Background Image Color & Mask
    07. Global Slider
    08. Ajax Contact Form
    09. Search Box Popup
    10. Popup Sidemenu
    11. Magnific Popup
    12. Section Position
    13. Filter
    14. Counter Up
    15. Shape Mockup
    16. Progress Bar Animation
    17. Countdown
    18. Image to SVG Code
    00. Woocommerce Toggle
    00. Color Scheme
    00. Right Click Disable
    */
    /*=================================
        JS Index End
    ==================================*/
    /*

  /*---------- 01. On Load Function ----------*/
    $(window).on("load", function () {
        $(".preloader").fadeOut();
    });

    /*---------- 02. Preloader ----------*/
    if ($(".preloader").length > 0) {
        $(".preloaderCls").each(function () {
            $(this).on("click", function (e) {
                e.preventDefault();
                $(".preloader").css("display", "none");
            });
        });
    }

    /*---------- 03. Mobile Menu ----------*/
    $.fn.thmobilemenu = function (options) {
        var opt = $.extend(
            {
                menuToggleBtn: ".th-menu-toggle",
                bodyToggleClass: "th-body-visible",
                subMenuClass: "th-submenu",
                subMenuParent: "menu-item-has-children",
                thSubMenuParent: "th-item-has-children",
                subMenuParentToggle: "th-active",
                meanExpandClass: "th-mean-expand",
                appendElement: '<span class="th-mean-expand"></span>',
                subMenuToggleClass: "th-open",
                toggleSpeed: 400,
            },
            options
        );
    
        return this.each(function () {
            var menu = $(this); // Select menu
    
            // Menu Show & Hide
            function menuToggle() {
                menu.toggleClass(opt.bodyToggleClass);
    
                // collapse submenu on menu hide or show
                var subMenu = "." + opt.subMenuClass;
                $(subMenu).each(function () {
                    if ($(this).hasClass(opt.subMenuToggleClass)) {
                        $(this).removeClass(opt.subMenuToggleClass);
                        $(this).css("display", "none");
                        $(this).parent().removeClass(opt.subMenuParentToggle);
                    }
                });
            }
    
            // Class Set Up for every submenu
            menu.find("." + opt.subMenuParent).each(function () {
                var submenu = $(this).find("ul");
                submenu.addClass(opt.subMenuClass);
                submenu.css("display", "none");
                $(this).addClass(opt.subMenuParent);
                $(this).addClass(opt.thSubMenuParent); // Add th-item-has-children class
                $(this).children("a").append(opt.appendElement);
            });
    
            // Toggle Submenu
            function toggleDropDown($element) {
                var submenu = $element.children("ul");
                if (submenu.length > 0) {
                    $element.toggleClass(opt.subMenuParentToggle);
                    submenu.slideToggle(opt.toggleSpeed);
                    submenu.toggleClass(opt.subMenuToggleClass);
                }
            }
    
            // Submenu toggle Button
            var itemHasChildren = "." + opt.thSubMenuParent + " > a";
            $(itemHasChildren).each(function () {
                $(this).on("click", function (e) {
                    e.preventDefault();
                    toggleDropDown($(this).parent());
                });
            });
    
            // Menu Show & Hide On Toggle Btn click
            $(opt.menuToggleBtn).each(function () {
                $(this).attr('aria-expanded', 'false');
                $(this).on("click", function () {
                    menuToggle();
                    // reflect expanded state for a11y
                    var isExpanded = menu.hasClass(opt.bodyToggleClass);
                    $(this).attr('aria-expanded', isExpanded ? 'true' : 'false');
                });
            });
    
            // Hide Menu On outside click
            menu.on("click", function (e) {
                e.stopPropagation();
                menuToggle();
            });
    
            // Stop Hide full menu on menu click
            menu.find("div").on("click", function (e) {
                e.stopPropagation();
            });
        });
    };
    
    $(".th-menu-wrapper").thmobilemenu();

    /*---------- 04. Sticky fix ----------*/
    // Throttled scroll handler to reduce jank
    (function(){
        var ticking = false;
        $(window).on('scroll', function(){
            if (!ticking) {
                window.requestAnimationFrame(function(){
                    var topPos = window.pageYOffset || document.documentElement.scrollTop;
                    if (topPos > 1000) {
                        $('.sticky-wrapper').addClass('sticky');
                        $('.category-menu').addClass('close-category');
                    } else {
                        $('.sticky-wrapper').removeClass('sticky')
                        $('.category-menu').removeClass('close-category');
                    }
                    ticking = false;
                });
                ticking = true;
            }
        });
    })();

    $(".menu-expand").each(function () {
        $(this).on("click", function (e) {
            e.preventDefault();
            $('.category-menu').toggleClass('open-category');
        });
    });

    /*----------- One Page Nav ----------*/
    function onePageNav(element) {
        if ($(element).length > 0) {
            $(element).each(function () {
            var link = $(this).find('a');
            $(this).find(link).each(function () {
                $(this).on('click', function () {
                var target = $(this.getAttribute('href'));
                if (target.length) {
                    event.preventDefault();
                    $('html, body').stop().animate({
                    scrollTop: target.offset().top - 10
                    }, 1000);
                };
    
                });
            });
            })
        }
    };
    onePageNav('.onepage-nav');
    onePageNav('.scroll-down');

    /*---------- 05. Scroll To Top ----------*/
    if ($('.scroll-top').length > 0) {
        
        var scrollTopbtn = document.querySelector('.scroll-top');
        var progressPath = document.querySelector('.scroll-top path');
        var pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
        var updateProgress = function () {
            var scroll = $(window).scrollTop();
            var height = $(document).height() - $(window).height();
            var progress = pathLength - (scroll * pathLength / height);
            progressPath.style.strokeDashoffset = progress;
        }
        updateProgress();
        $(window).scroll(updateProgress);	
        var offset = 50;
        var duration = 750;
        jQuery(window).on('scroll', function() {
            if (jQuery(this).scrollTop() > offset) {
                jQuery(scrollTopbtn).addClass('show');
            } else {
                jQuery(scrollTopbtn).removeClass('show');
            }
        });				
        jQuery(scrollTopbtn).on('click', function(event) {
            event.preventDefault();
            jQuery('html, body').animate({scrollTop: 0}, duration);
            return false;
        })
    }

    /*---------- 06. Set Background Image Color & Mask ----------*/
    if ($("[data-bg-src]").length > 0) {
        $("[data-bg-src]").each(function () {
            var src = $(this).attr("data-bg-src");
            $(this).css("background-image", "url(" + src + ")");
            $(this).removeAttr("data-bg-src").addClass("background-image");
        });
    }

    if ($('[data-bg-color]').length > 0) {
        $('[data-bg-color]').each(function () {
          var color = $(this).attr('data-bg-color');
          $(this).css('background-color', color);
          $(this).removeAttr('data-bg-color');
        });
    };

    if ($('[data-theme-color]').length > 0) {
        $('[data-theme-color]').each(function () {
          var $color = $(this).attr('data-theme-color');
          $(this).get(0).style.setProperty('--theme-color', $color);
          $(this).removeAttr('data-theme-color');
        });
    };

    $('[data-border]').each(function() {
        var borderColor = $(this).data('border');
        $(this).css('--th-border-color', borderColor);
    });
      
    if ($('[data-mask-src]').length > 0) {
        $('[data-mask-src]').each(function () {
          var mask = $(this).attr('data-mask-src');
          $(this).css({
            'mask-image': 'url(' + mask + ')',
            '-webkit-mask-image': 'url(' + mask + ')'
          });
          $(this).addClass('bg-mask');
          $(this).removeAttr('data-mask-src');
        });
    };

    /*----------- 07. Global Slider ----------*/   
    $('.th-slider').each(function () {
        var thSlider = $(this);
        var settings = $(this).data('slider-options') || {};
        
        // Store references to the navigation buttons
        var prevArrow = thSlider.find('.slider-prev');
        var nextArrow = thSlider.find('.slider-next');
        var paginationEl1 = thSlider.find('.slider-pagination').get(0);
        var paginationEl2 = thSlider.find('.slider-pagination2');
        var progressBarEl = thSlider.find('.slider-pagination-progressbar2 .slider-progressbar-fill');
    
        var sliderDefault = {
            slidesPerView: 1,
            spaceBetween: settings.spaceBetween || 24,
            loop: settings.loop !== false,
            speed: settings.speed || 1000,
            autoplay: settings.autoplay || { delay: 6000, disableOnInteraction: false },
            navigation: {
                prevEl: prevArrow.get(0),
                nextEl: nextArrow.get(0),
            },
            pagination: {
                el: paginationEl1,
                type: settings.paginationType || 'bullets',
                clickable: true,
                renderBullet: function (index, className) {
                    var number = index + 1;
                    var formattedNumber = number < 10 ? '0' + number : number;
                    return '<span class="' + className + '" aria-label="Go to Slide ' + formattedNumber + '"></span>';
                },
            },
            on: {
                init: function () {
                    updatePagination(this);
                    updateProgressBar(this);
                },
                slideChange: function () {
                    updatePagination(this);
                    updateProgressBar(this);
                },
            },
        };
    
        var options = $.extend({}, sliderDefault, settings);
        var swiperInstance = new Swiper(thSlider.get(0), options);
    
        // Update Pagination and other UI elements
        function updatePagination(swiper) {
            var activeIndex = swiper.realIndex + 1; 
            var totalSlides = swiper.slides.length;
            paginationEl2.html(
                '<span class="current-slide">' +
                (activeIndex < 10 ? '0' + activeIndex : activeIndex) +
                '</span> <span class="divider">/</span> <span class="total-slides">' +
                (totalSlides < 10 ? '0' + totalSlides : totalSlides) +
                '</span>'
            );
        }
    
        function updateProgressBar(swiper) {
            var progress = ((swiper.realIndex + 1) / swiper.slides.length) * 100;
            progressBarEl.css('height', progress + '%');
        }

        if ($('.slider-area').length > 0) {
            $('.slider-area').closest(".container").parent().addClass("arrow-wrap");
        }
    
    });
    
    // Function to add animation classes
    function animationProperties() {
        $('[data-ani]').each(function () {
            var animationName = $(this).data('ani');
            $(this).addClass(animationName);
        });
    
        $('[data-ani-delay]').each(function () {
            var delayTime = $(this).data('ani-delay');
            $(this).css('animation-delay', delayTime);
        });
    }
    animationProperties();
    
    // Add click event handlers for external slider arrows based on data attributes
    $('[data-slider-prev], [data-slider-next]').on('click', function () {
        var sliderSelector = $(this).data('slider-prev') || $(this).data('slider-next');
        var targetSlider = $(sliderSelector);
    
        if (targetSlider.length) {
            var swiper = targetSlider[0].swiper;
    
            if (swiper) {
                if ($(this).data('slider-prev')) {
                    swiper.slidePrev();
                } else {
                    swiper.slideNext();
                }
            }
        }
    }); 

    /*----------- 08. Ajax Contact Form ----------*/
    var form = ".ajax-contact";
    var invalidCls = "is-invalid";
    var $email = '[name="email"]';
    var $validation =
        '[name="name"],[name="email"],[name="subject"],[name="number"],[name="message"]'; // Must be use (,) without any space
    var formMessages = $(".form-messages");

    function sendContact() {
        var formData = $(form).serialize();
        var valid;
        valid = validateContact();
        if (valid) {
            jQuery
            .ajax({
                url: $(form).attr("action"),
                data: formData,
                type: "POST",
            })
            .done(function (response) {
                // Make sure that the formMessages div has the 'success' class.
                formMessages.removeClass("error");
                formMessages.addClass("success");
                // Set the message text.
                formMessages.text(response);
                // Clear the form.
                $(
                    form +
                        ' input:not([type="submit"]),' +
                        form +
                        " textarea"
                ).val("");
            })
            .fail(function (data) {
                // Make sure that the formMessages div has the 'error' class.
                formMessages.removeClass("success");
                formMessages.addClass("error");
                // Set the message text.
                if (data.responseText !== "") {
                    formMessages.html(data.responseText);
                } else {
                    formMessages.html(
                        "Oops! An error occured and your message could not be sent."
                    );
                }
            });
        }
    }

    function validateContact() {
        var valid = true;
        var formInput;

        function unvalid($validation) {
            $validation = $validation.split(",");
            for (var i = 0; i < $validation.length; i++) {
                formInput = form + " " + $validation[i];
                if (!$(formInput).val()) {
                    $(formInput).addClass(invalidCls);
                    valid = false;
                } else {
                    $(formInput).removeClass(invalidCls);
                    valid = true;
                }
            }
        }
        unvalid($validation);

        if (
            !$($email).val() ||
            !$($email)
                .val()
                .match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)
        ) {
            $($email).addClass(invalidCls);
            valid = false;
        } else {
            $($email).removeClass(invalidCls);
            valid = true;
        }
        return valid;
    }

    $(form).on("submit", function (element) {
        element.preventDefault();
        sendContact();
    });

    /*---------- 09. Search Box Popup ----------*/
    function popupSarchBox($searchBox, $searchOpen, $searchCls, $toggleCls) {
        $($searchOpen).on("click", function (e) {
            e.preventDefault();
            $($searchBox).addClass($toggleCls);
        });
        $($searchBox).on("click", function (e) {
            e.stopPropagation();
            $($searchBox).removeClass($toggleCls);
        });
        $($searchBox)
            .find("form")
            .on("click", function (e) {
                e.stopPropagation();
                $($searchBox).addClass($toggleCls);
            });
        $($searchCls).on("click", function (e) {
            e.preventDefault();
            e.stopPropagation();
            $($searchBox).removeClass($toggleCls);
        });
    }
    popupSarchBox( ".popup-search-box", ".searchBoxToggler", ".searchClose", "show" );

    /*---------- 10. Popup Sidemenu ----------*/
    function popupSideMenu($sideMenu, $sideMunuOpen, $sideMenuCls, $toggleCls) {
        // Sidebar Popup
        $($sideMunuOpen).on('click', function (e) {
        e.preventDefault();
        $($sideMenu).addClass($toggleCls);
        });
        $($sideMenu).on('click', function (e) {
        e.stopPropagation();
        $($sideMenu).removeClass($toggleCls)
        });
        var sideMenuChild = $sideMenu + ' > div';
        $(sideMenuChild).on('click', function (e) {
        e.stopPropagation();
        $($sideMenu).addClass($toggleCls)
        });
        $($sideMenuCls).on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        $($sideMenu).removeClass($toggleCls);
        });
    };
    popupSideMenu('.sidemenu-cart', '.sideMenuToggler', '.sideMenuCls', 'show');
    popupSideMenu('.sidemenu-info', '.sideMenuInfo', '.sideMenuCls', 'show');

    /*----------- 11. Magnific Popup ----------*/
    /* magnificPopup img view */
    $(".popup-image").magnificPopup({
        type: "image",
        mainClass: 'mfp-zoom-in', 
        removalDelay: 260,
        gallery: {
            enabled: true,
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title');
            }
        }
    });
    

    /* magnificPopup video view */
    $(".popup-video").magnificPopup({
        type: "iframe",
        mainClass: 'mfp-zoom-in', 
    });

    /* magnificPopup video view */
    $(".popup-content").magnificPopup({
        type: "inline",
        midClick: true,
    });

    /*---------- 12. Section Position ----------*/
    // Interger Converter
    function convertInteger(str) {
        return parseInt(str, 10);
    }

    $.fn.sectionPosition = function (mainAttr, posAttr) {
        $(this).each(function () {
            var section = $(this);

            function setPosition() {
                var sectionHeight = Math.floor(section.height() / 2), // Main Height of section
                    posData = section.attr(mainAttr), // where to position
                    posFor = section.attr(posAttr), // On Which section is for positioning
                    topMark = "top-half", // Pos top
                    bottomMark = "bottom-half", // Pos Bottom
                    parentPT = convertInteger($(posFor).css("padding-top")), // Default Padding of  parent
                    parentPB = convertInteger($(posFor).css("padding-bottom")); // Default Padding of  parent

                if (posData === topMark) {
                    $(posFor).css(
                        "padding-bottom",
                        parentPB + sectionHeight + "px"
                    );
                    section.css("margin-top", "-" + sectionHeight + "px");
                } else if (posData === bottomMark) {
                    $(posFor).css(
                        "padding-top",
                        parentPT + sectionHeight + "px"
                    );
                    section.css("margin-bottom", "-" + sectionHeight + "px");
                }
            }
            setPosition(); // Set Padding On Load
        });
    };

    var postionHandler = "[data-sec-pos]";
    if ($(postionHandler).length) {
        $(postionHandler).imagesLoaded(function () {
            $(postionHandler).sectionPosition("data-sec-pos", "data-pos-for");
        });
    }

    /*----------- 14. Filter ----------*/
    $(".filter-active").imagesLoaded(function () {
        var $filter = ".filter-active",
            $filterItem = ".filter-item",
            $filterMenu = ".filter-menu-active";

        if ($($filter).length > 0) {
            var $grid = $($filter).isotope({
                itemSelector: $filterItem,
                filter: "*",
                masonry: {
                    // use outer width of grid-sizer for columnWidth
                    // columnWidth: 1,
                },
            });

            // filter items on button click
            $($filterMenu).on("click", "button", function () {
                var filterValue = $(this).attr("data-filter");
                $grid.isotope({
                    filter: filterValue,
                });
            });

            // Menu Active Class
            $($filterMenu).on("click", "button", function (event) {
                event.preventDefault();
                $(this).addClass("active");
                $(this).siblings(".active").removeClass("active");
            });
        }
    });

    $(".masonary-active, .woocommerce-Reviews .comment-list").imagesLoaded(function () {
        var $filter = ".masonary-active, .woocommerce-Reviews .comment-list",
            $filterItem = ".filter-item, .woocommerce-Reviews .comment-list li";

        if ($($filter).length > 0) {
            $($filter).isotope({
                itemSelector: $filterItem,
                filter: "*",
                masonry: {
                    // use outer width of grid-sizer for columnWidth
                    columnWidth: 1,
                },
            });
        }
        $('[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
            $($filter).isotope({
                filter: "*",
            });
        });
    });

    /*----------- 14. Counter Up ----------*/
    $(".counter-number").counterUp({
        delay: 10,
        time: 1000,
    });

    /*----------- 15. Shape Mockup ----------*/
    $.fn.shapeMockup = function () {
        var $shape = $(this);
        $shape.each(function () {
            var $currentShape = $(this),
                shapeTop = $currentShape.data("top"),
                shapeRight = $currentShape.data("right"),
                shapeBottom = $currentShape.data("bottom"),
                shapeLeft = $currentShape.data("left");
            $currentShape
                .css({
                    top: shapeTop,
                    right: shapeRight,
                    bottom: shapeBottom,
                    left: shapeLeft,
                })
                .removeAttr("data-top")
                .removeAttr("data-right")
                .removeAttr("data-bottom")
                .removeAttr("data-left")
                .parent()
                .addClass("shape-mockup-wrap");
        });
    };

    if ($(".shape-mockup")) {
        $(".shape-mockup").shapeMockup();
    }

    /*----------- 16. Progress Bar Animation ----------*/
    $('.progress-bar').waypoint(function() {
        $('.progress-bar').css({
        animation: "animate-positive 1.8s",
        opacity: "1"
        });
    }, { offset: '100%' });

    /*---------- 18. Image to SVG Code ----------*/
    const cache = {};

    $.fn.inlineSvg = function fnInlineSvg() {
        this.each(imgToSvg);

        return this;
    };

    function imgToSvg() {
        const $img = $(this);
        const src = $img.attr("src");

        // fill cache by src with promise
        if (!cache[src]) {
            const d = $.Deferred();
            $.get(src, (data) => {
                d.resolve($(data).find("svg"));
            });
            cache[src] = d.promise();
        }

        // replace img with svg when cached promise resolves
        cache[src].then((svg) => {
            const $svg = $(svg).clone();

            if ($img.attr("id")) $svg.attr("id", $img.attr("id"));
            if ($img.attr("class")) $svg.attr("class", $img.attr("class"));
            if ($img.attr("style")) $svg.attr("style", $img.attr("style"));

            if ($img.attr("width")) {
                $svg.attr("width", $img.attr("width"));
                if (!$img.attr("height")) $svg.removeAttr("height");
            }
            if ($img.attr("height")) {
                $svg.attr("height", $img.attr("height"));
                if (!$img.attr("width")) $svg.removeAttr("width");
            }

            $svg.insertAfter($img);
            $img.trigger("svgInlined", $svg[0]);
            $img.remove();
        });
    }

    $(".svg-img").inlineSvg();
    
    /*---------- 19. Circle Progress ----------*/
    document.addEventListener("DOMContentLoaded", function () {
        const progressBars = document.querySelectorAll('.circular-progress');
    
        progressBars.forEach(progressBar => {
            const circle = progressBar.querySelector('.circle');
            const percentageDisplay = progressBar.querySelector('.percentage');
            const target = parseInt(progressBar.getAttribute('data-target'), 10);
            let progressValue = 0;
    
            const animateProgress = () => {
                if (progressValue <= target) {
                    const offset = 100 - (progressValue * 100) / 100;
                    circle.style.strokeDashoffset = offset;
                    percentageDisplay.textContent = progressValue + "%";
                    progressValue++;
                    requestAnimationFrame(animateProgress);
                }
            };
    
            animateProgress();
        });
    });

    /*----------- 00. Woocommerce Toggle ----------*/
    // Ship To Different Address
    $(document).on("change", "#ship-to-different-address-checkbox", function () {
        const $shippingAddress = $("#ship-to-different-address").next(".shipping_address");
        $(this).is(":checked") ? $shippingAddress.slideDown() : $shippingAddress.slideUp();
    });

    // Login Toggle
    $(document).on("click", ".woocommerce-form-login-toggle a", function (e) {
        e.preventDefault();
        $(".woocommerce-form-login").slideToggle();
    });

    // Coupon Toggle
    $(document).on("click", ".woocommerce-form-coupon-toggle a", function (e) {
        e.preventDefault();
        $(".woocommerce-form-coupon").slideToggle();
    });

    // Shipping Calculator Toggle
    $(document).on("click", ".shipping-calculator-button", function (e) {
        e.preventDefault();
        $(this).next(".shipping-calculator-form").slideToggle();
    });

    // Payment Method Toggle
    $(".wc_payment_methods input[type='radio']:checked").siblings(".payment_box").show();

    $(document).on("change", ".wc_payment_methods input[type='radio']", function () {
        $(".payment_box").slideUp();
        $(this).siblings(".payment_box").slideDown();
    });

    // Rating Stars Toggle
    $(document).on("click", ".rating-select .stars a", function (e) {
        e.preventDefault();
        $(this).siblings().removeClass("active");
        $(this).parent().parent().addClass("selected");
        $(this).addClass("active");
    });

    // Quantity Plus Minus ---------------------------
    $(document).on("click", ".quantity-plus", function (e) {
        e.preventDefault();
        const $qty = $(this).siblings(".qty-input");
        const currentVal = parseInt($qty.val(), 10); // radix specified
        if (!isNaN(currentVal)) {
            $qty.val(currentVal + 1);
        }
    });

    $(document).on("click", ".quantity-minus", function (e) {
        e.preventDefault();
        const $qty = $(this).siblings(".qty-input");
        const currentVal = parseInt($qty.val(), 10); // radix specified
        if (!isNaN(currentVal) && currentVal > 1) {
            $qty.val(currentVal - 1);
        }
    });

    // /*----------- 00.Color Scheme ----------*/
    $('.color-switch-btns button').each(function () {
        // Get color for button
        const button = $(this);
        const color = button.data('color');
        button.css('--theme-color', color);

        // Change theme color on click
        button.on('click', function () {
            const clickedColor = $(this).data('color');
            $(':root').css('--theme-color', clickedColor);
        });
    });

    $(document).on('click','.switchIcon',function() {
        $('.color-scheme-wrap').toggleClass('active');
    });

    // /*----------- lettering js ----------*/
    function injector(t, splitter, klass, after) {
		var a = t.text().split(splitter), inject = '';
		if (a.length) {
			$(a).each(function(i, item) {
				inject += '<span class="'+klass+(i+1)+'">'+item+'</span>'+after;
			});	
			t.empty().append(inject);
		}
	}
	
	var methods = {
		init : function() {

			return this.each(function() {
				injector($(this), '', 'char', '');
			});

		},

		words : function() {

			return this.each(function() {
				injector($(this), ' ', 'word', ' ');
			});

		},
		
		lines : function() {

			return this.each(function() {
				var r = "eefec303079ad17405c889e092e105b0";
				// Because it's hard to split a <br/> tag consistently across browsers,
				// (*ahem* IE *ahem*), we replaces all <br/> instances with an md5 hash 
				// (of the word "split").  If you're trying to use this plugin on that 
				// md5 hash string, it will fail because you're being ridiculous.
				injector($(this).children("br").replaceWith(r).end(), r, 'line', '');
			});

		}
	};

	$.fn.lettering = function( method ) {
		// Method calling logic
		if ( method && methods[method] ) {
			return methods[ method ].apply( this, [].slice.call( arguments, 1 ));
		} else if ( method === 'letters' || ! method ) {
			return methods.init.apply( this, [].slice.call( arguments, 0 ) ); // always pass an array
		}
		$.error( 'Method ' +  method + ' does not exist on jQuery.lettering' );
		return this;
	};
    $(".circle-title-anime").lettering();


    // ---------- Smooth Scroll ----------
    gsap.registerPlugin(ScrollTrigger);

    let lenis;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function initializeLenis() {
        lenis = new Lenis({
            lerp: 0.07, // Smoothing factor
        });

        lenis.on("scroll", ScrollTrigger.update);

        // Use GSAP's ticker to sync with animations
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        // Allow native scroll inside specified elements
        document.querySelectorAll(".allow-natural-scroll").forEach((el) => {
            el.addEventListener("wheel", (e) => e.stopPropagation(), { passive: true });
            el.addEventListener("touchmove", (e) => e.stopPropagation(), { passive: true });
        });
    }

    function enableOrDisableLenis() {
        if (prefersReducedMotion) return;

        if (window.innerWidth > 991) {
            if (!lenis) initializeLenis();
            lenis.start();
        } else {
            if (lenis) {
                lenis.stop();
                lenis = null;
            }
        }
    }

    // Initial call
    enableOrDisableLenis();
    window.addEventListener("resize", enableOrDisableLenis);


    // ---------- GSAP Text Animation ----------
    function animateText(selector, config) {
        const elements = document.querySelectorAll(selector);
        if (!elements.length) return;

        elements.forEach((el) => {
            const split = new SplitText(el, { type: "chars, words" });
            gsap.from(split.chars, {
                duration: config.duration,
                delay: config.delay,
                x: config.x,
                autoAlpha: 0,
                stagger: config.stagger,
                ease: config.ease,
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                },
            });
        });
    }

    animateText(".text-anim", {
        duration: 1,
        delay: 0.5,
        x: 20,
        stagger: 0.05,
        ease: "power2.out",
    });

    animateText(".text-anim2", {
        duration: 1,
        delay: 0.1,
        x: 20,
        stagger: 0.03,
        ease: "power2.out",
    });

    /*---------- Hover Item Active Class ----------*/
    $(document).on('mouseover', '.hover-item', function () {
        $(this).addClass('item-active').siblings('.hover-item').removeClass('item-active');
    });

    /*----------- Price Slider ----------*/
    $(".price_slider").slider({
        range: true,
        min: 0,
        max: 350,
        values: [0, 350],
        slide: function (event, ui) {
          $(".from").text("$" + ui.values[0]);
          $(".to").text("$" + ui.values[1]);
        }
    });
    $(".from").text("$" + $(".price_slider").slider("values", 0));
    $(".to").text("$" + $(".price_slider").slider("values", 1));
    
    // /*----------- 00. Right Click Disable ----------*/
    //   window.addEventListener('contextmenu', function (e) {
    //     // do something here...
    //     e.preventDefault();
    //   }, false);

    // /*----------- 00. Inspect Element Disable ----------*/
    //   document.onkeydown = function (e) {
    //     if (event.keyCode == 123) {
    //       return false;
    //     }
    //     if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
    //       return false;
    //     }
    //     if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
    //       return false;
    //     }
    //     if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
    //       return false;
    //     }
    //     if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
    //       return false;
    //     }
    //   }
    
})(jQuery);

// Language Switcher Functionality
$(document).ready(function() {
    const languageToggle = document.getElementById('languageToggle');
    const languageDropdown = document.getElementById('languageDropdown');
    const currentLang = document.querySelector('.current-lang');
    const mobileLanguageToggle = document.getElementById('mobileLanguageToggle');
    const mobileLanguageDropdown = document.getElementById('mobileLanguageDropdown');
    const currentLangMobile = document.querySelector('.current-lang-mobile');
    
    // Function to handle language switching
    function handleLanguageSwitch(lang) {
        // Update current language display
        if (currentLang) currentLang.textContent = lang.toUpperCase();
        if (currentLangMobile) currentLangMobile.textContent = lang.toUpperCase();
        
        // Store language preference
        localStorage.setItem('selectedLanguage', lang);
        
        // Translate content
        translateContent(lang);
        
        // Close all dropdowns
        if (languageDropdown) languageDropdown.classList.remove('active');
        if (mobileLanguageDropdown) mobileLanguageDropdown.classList.remove('active');
    }
    
    // Desktop language switcher
    if (languageToggle && languageDropdown) {
        languageToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            languageDropdown.classList.toggle('active');
        });
    }
    
    // Mobile language switcher
    if (mobileLanguageToggle && mobileLanguageDropdown) {
        mobileLanguageToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            mobileLanguageDropdown.classList.toggle('active');
        });
    }
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function() {
        if (languageDropdown) languageDropdown.classList.remove('active');
        if (mobileLanguageDropdown) mobileLanguageDropdown.classList.remove('active');
    });
    
    // Language selection for both desktop and mobile
    document.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.getAttribute('data-lang');
            handleLanguageSwitch(lang);
        });
    });
    
    // Load saved language preference
    const savedLang = localStorage.getItem('selectedLanguage');
    if (savedLang) {
        if (currentLang) currentLang.textContent = savedLang.toUpperCase();
        if (currentLangMobile) currentLangMobile.textContent = savedLang.toUpperCase();
        translateContent(savedLang);
    }
    
    // Translation function
    function translateContent(lang) {
        const translations = {
            en: {
                // Hero Section
                'hero-title': 'Transform Ideas into High-Impact Digital Products',
                'hero-text': 'From concept to code — we craft fast and beautifully designed web solutions tailored to your business goals.',
                'discover-more': 'Services',
                'contact-us': 'Contact Us',
                
                // Navigation
                'home': 'Home',
                'about-us': 'About Us',
                'services': 'Services',
                'pages': 'Pages',
                'blog': 'Blog',
                'get-started': 'Get Started Now',
                'contact-us-nav': 'Contact Us',
                
                // About Section
                'who-we-are': 'Who We Are?',
                'about-text': 'OMNIframe is your tech partner for building modern websites that are fast, beautiful, and tailored to your goals.',
                'customers-satisfaction': '100% Satisfaction',
                'quality-assurance': 'Quality Assurance',
                'about-feature-text-1': 'We deliver high-quality, scalable web solutions that exceed expectations.',
                'about-feature-text-2': 'Our team of experienced developers and QA specialists ensure precision, performance, and long-term reliability.',
                
                // Services Section
                'our-services': 'OUR SERVICES',
                'services-title': 'we offer modern web development services',
                'ai-development': 'WordPress Development',
                'ai-development-text': 'Custom WordPress sites with fast performance and flexible editing.',
                'data-analytics': 'WooCommerce Store Setup',
                'data-analytics-text': 'Scalable online stores built on WordPress + WooCommerce platform.',
                'machine-learning': 'Shopify Store Development',
                'machine-learning-text': 'Branded Shopify stores with clean UI and full e-commerce tools.',
                'ai-consulting': 'Custom Web Development',
                'ai-consulting-text': 'Fully coded websites using React, Next.js, or any framework.',
                'automation-process': 'SEO & Google Optimization',
                'automation-process-text': 'Technical SEO, speed, and content strategy for Google ranking.',
                'education-science': 'CMS Integration (WordPress, Headless)',
                'education-science-text': 'Content systems connected to custom frontends or admin panels.',
                'ai-research': 'API Integration & Automation',
                'ai-research-text': 'Connect external services like CRMs, payments, or emails.',
                'ai-cybersecurity': 'Website Migration & Redesign',
                'ai-cybersecurity-text': 'Move from old platforms or redesign for better UX and speed.',
                'read-more': 'Read More',
                
                // Why Choose Us Section
                'why-choose-us': 'WHY CHOOSE US',
                'why-choose-title': 'We don’t just build websites — we create meaningful digital experiences',
                'years-experience': 'Years Of Experience',
                'technology-integration': 'Reliability',
                'certified-experts': 'Efficiency',
                'effortless-engagement': 'Alignment',
                'future-vision': 'Flexibility',
                'why-text-1': 'Trusted by teams who need stability, quality, and long-term partnerships.',
                'why-text-2': 'We minimize complexity and deliver results with focused precision.',
                'why-text-3': 'Our work reflects your goals, timelines, and internal standards.',
                'why-text-4': 'Need something changed? We adapt quickly and with a smile.',
                
                // Project Section
                'case-study': 'Case Study',
                'ai-projects-case': 'AI Projects Case Study',
                'case-study-text': 'An AI agency is a specialized organization dedicated to helping businesses and organizations leverage artificial intelligence to achieve their goals.',
                'robotics-program': 'Robotics, Program',
                'ai-machine-learning': 'AI Machine Learning',
                'user-research': 'User Research',
                'speech-recognizer': 'Speech recognizer using deep learning',
                
                // Testimonial Section
                'testimonials': 'Testimonials',
                'what-clients-say': 'What Our Clients Say About us',
                'co-founder': 'Co-founder',
                'co-founder-xyz': 'Co-founder, XYZ',
                
                // Feature Section
                'advanced-technology': 'advanced technology',
                'future-is-here': 'The Future is Here: Advance AI Technology',
                'tech-support': 'Tech support',
                'robo-genius': 'Robo Genius',
                'image-generation': 'Image Generation',
                'chatbots': 'Chatbots',
                'feature-text': 'To empower businesses with intelligent, scalable, and impactful solutions that drive progress',
                
                // FAQ Section
                'faqs': 'Faq\'s',
                'frequently-asked': 'Frequently asked questions',
                'faq-question-1': 'What is an AI startup, and what services do you offer?',
                'faq-question-2': 'Do you offer pre-built AI models or create everything from scratch?',
                'faq-question-3': 'What is the process for developing an AI solution for my business?',
                'faq-question-4': 'What is an AI startup, and what services do you offer?',
                'faq-question-5': 'How do you ensure data privacy and compliance with regulations?',
                'faq-answer': 'An AI Software as a Service startup combines the scalability of cloud-based platforms with the power of artificial intelligence to deliver innovative, on-demand solutions. These startups cater to a wide range of industries by offering AI-driven tools and applications that solve specific business challenges, enhance efficiency, and drive data-informed decisions. The AI industry is rapidly expanding, with opportunities to disrupt traditional industries and create entirely new markets. Continuous advancements in hardware and algorithms position AI startups to play a pivotal role in shaping the future.',
                
                // Pricing Section
                'pricing-plan': 'PRICING PLAN',
                'affordable-pricing': 'Affordable Pricing Plan',
                'basic': 'Basic',
                'standard': 'Standard',
                'premium': 'Premium',
                'pricing-text': 'This is an excellent option for people & small businesses who are starting out.',
                'per-month': '/Per month',
                'up-to-10-members': 'Up to 10 Members per month',
                'cultivation-plans': 'Cultivation plans and field boundaries',
                'scouting-app': 'Scouting app/module',
                'satellite-moisture': 'Satellite relative crop moisture',
                'choose-your-plan': 'Choose Your plan',
                
                // Blog Section
                'news': 'News',
                'latest-news': 'Our Latest News & Blog',
                'view-all-post': 'View All Post',
                'by-admin': 'by admin',
                'blog-title-1': 'The rise of AI and Robotics in retail customer experiences',
                'blog-title-2': 'How AI is Transforming Businesses Across Industries',
                'blog-title-3': 'Understanding Deep Learning and Neural Networks in AI',
                
                // Footer
                'get-started-footer': 'Get Started',
                'lets-make-great': 'Let\'s Make Something Great Together',
                'footer-about-text': 'Data privacy and security are at the core of our operations, ensuring compliance with global standards like GDPR and HIPAA.',
                'quick-links': 'Useful Links',
                'company': 'Company',
                'what-we-offer': 'What we Offer',
                'our-story': 'Our Story',
                'latest-posts': 'Latest Posts',
                'help-center': 'Help Center',
                'our-partners': 'Our Partners',
                'our-service': 'Our Service',
                'robotic-automation': 'Robotic Automation',
                'education-science-footer': 'Education & Science',
                'machine-learning-footer': 'Machine Learning',
                'predictive-analysis': 'Predictive Analysis',
                'data-security': 'Data Security',
                'get-the-app': 'Get the app',
                'suggest-connecting': 'We suggest connecting apps',
                'all-rights-reserved': 'All Rights Reserved.',
                'privacy-policy': 'Privacy Policy',
                'terms-services': 'Terms of services',
                'disclaimer': 'Disclaimer',

                // Cart Page
                'coupon-code': 'Coupon Code...',
                'apply-coupon': 'Apply Coupon',
                'update-cart': 'Update cart',
                'continue-shopping': 'Continue Shopping',
                'cart-totals': 'Cart Totals',
                'cart-subtotal': 'Cart Subtotal',
                'shipping-and-handling': 'Shipping and Handling',
                'free-shipping': 'Free shipping',
                'flat-rate': 'Flat rate',
                'shipping-updated-on-checkout': 'Shipping options will be updated during checkout.',
                'change-address': 'Change address',
                'select-an-option': 'Select an option…',
                'town-city': 'Town / City',
                'postcode-zip': 'Postcode / ZIP',
                'update': 'Update',
                'order-total': 'Order Total',
                'proceed-to-checkout': 'Proceed to checkout',

                // Shop Details Page
                'availability': 'Availability:',
                'in-stock': 'In Stock',
                'add-to-cart': 'Add to Cart',
                'customer-reviews': 'customer reviews',
                'sku': 'SKU:',
                'category': 'Category:',
                'tags': 'Tags:'
            },
            ka: {
                // Hero Section
                'hero-title': 'გარდაქმენი იდეები მაღალეფექტურ ციფრულ პროდუქტებად',
                'hero-text': 'იდეიდან კოდამდე — ვქმნით სწრაფ და ესთეტიკურ ვებგადაწყვეტილებებს, მორგებულს შენს ბიზნეს მიზნებზე.',
                'discover-more': 'სერვისები',
                'contact-us': 'კონტაქტი',
                
                // Navigation
                'home': 'მთავარი',
                'about-us': 'ჩვენს შესახებ',
                'services': 'სერვისები',
                'pages': 'გვერდები',
                'blog': 'ბლოგი',
                'get-started': 'დავიწყოთ ახლა',
                'contact-us-nav': 'კონტაქტი',
                
                // About Section
                'who-we-are': 'ვინ ვართ ჩვენ?',
                'about-text': 'OMNIframe არის შენი ტექნოლოგიური პარტნიორი თანამედროვე ვებსაიტების შესაქმნელად — სწრაფი, ლამაზი და ზუსტად მიზნებზე მორგებული.',
                'customers-satisfaction': '100% კმაყოფილება',
                'quality-assurance': 'ხარისხის გარანტია',
                'about-feature-text-1': 'ჩვენ ვაწვდით მაღალი ხარისხის, მასშტაბირებად ვებ გამოთვლის, რომელიც გადააჭარბებს მოლოდინებს.',
                'about-feature-text-2': 'ჩვენი გამოცდილი გუნდითა და ხარისხის კონტროლის სპეციალისტებით, ვსასტურებთ ზუსტ, სწრაფ და ხანგრძლივი წარმატების გარანტიას.',
                
                // Services Section
                'our-services': 'ჩვენი სერვისები',
                'services-title': 'ჩვენ გთავაზობთ თანამედროვე ვებ დეველოპმენტ სერვისებს',
                'ai-development': 'WordPress განვითარება',
                'ai-development-text': 'სწრაფი და მარტივად სამართავი WordPress ვებსაიტების შექმნა.',
                'data-analytics': 'WooCommerce მაღაზიის დაყენება',
                'data-analytics-text': 'მასშტაბირებადი ონლაინ მაღაზიები WooCommerce პლატფორმაზე.',
                'machine-learning': 'Shopify მაღაზიის განვითარება',
                'machine-learning-text': 'ბრენდირებული Shopify მაღაზიები, სრულფასოვანი ფუნქციონალით.',
                'ai-consulting': 'მორგებული ვებ განვითარება',
                'ai-consulting-text': 'დაკოდილი ვებსაიტები Next.js-ით ან სასურველი ფრეიმვორკით.',
                'automation-process': 'SEO და Google ოპტიმიზაცია',
                'automation-process-text': 'ტექნიკური SEO, სიჩქარე და კონტენტ სტრატეგია Google-ისთვის.',
                'education-science': 'CMS ინტეგრაცია (WordPress, Headless)',
                'education-science-text': 'კონტენტ მენეჯმენტი WordPress ან Headless ინტეგრაციით.',
                'ai-research': 'API ინტეგრაცია და ავტომატიზაცია',
                'ai-research-text': 'API-ებით CRM, გადახდებისა და მეილის სისტემების ინტეგრაცია.',
                'ai-cybersecurity': 'ვებსაიტის მიგრაცია და რედიზაინი',
                'ai-cybersecurity-text': 'პლატფორმიდან პლატფორმაზე გადატანა და UX-ზე მორგებული რედიზაინი.',
                'read-more': 'მეტის ნახვა',
                
                // Why Choose Us Section
                'why-choose-us': 'რატომ აირჩიოთ ჩვენ',
                'why-choose-title': 'ჩვენ არ ვქმნით უბრალოდ ვებსაიტებს — ჩვენ ვქმნით მნიშვნელოვან ციფრულ გამოცდილებას',
                'years-experience': 'წლის გამოცდილება',
                'technology-integration': 'სანდოობა',
                'certified-experts': 'ეფექტურობა',
                'effortless-engagement': 'მიზნებთან გასწორება',
                'future-vision': 'მოქნილობა',
                'why-text-1': 'გვენდობიან მათ, ვისაც სჭირდება სტაბილურობა და ხარისხი.',
                'why-text-2': 'ჩვენ ვუმცირებთ სირთულეს და შედეგს ვაწვდით ფოკუსირებული სიზუსტით.',
                'why-text-3': 'ჩვენი სამუშაო ასახავს თქვენს მიზნებს, ვადებს და შიდა სტანდარტებს.',
                'why-text-4': 'რაღაც შეიცვალა? ჩვენ ადვილად მოვერგებით და გაგიღიმებთაც.',
                
                // Project Section
                'case-study': 'ქეისის შესწავლა',
                'ai-projects-case': 'AI პროექტების ქეისის შესწავლა',
                'case-study-text': 'AI სააგენტო არის სპეციალიზებული ორგანიზაცია, რომელიც ეძღვნება ბიზნესებისა და ორგანიზაციების დახმარებას ხელოვნური ინტელექტის გამოყენებით მათი მიზნების მისაღწევად.',
                'robotics-program': 'რობოტიკა, პროგრამა',
                'ai-machine-learning': 'AI მანქანური სწავლება',
                'user-research': 'მომხმარებელთა კვლევა',
                'speech-recognizer': 'საუბრის ამომცნობი ღრმა სწავლების გამოყენებით',
                
                // Testimonial Section
                'testimonials': 'მიმოხილვები',
                'what-clients-say': 'რას ამბობენ ჩვენი კლიენტები',
                'co-founder': 'თანადამფუძნებელი',
                'co-founder-xyz': 'თანადამფუძნებელი, XYZ',
                
                // Feature Section
                'advanced-technology': 'მოწინავე ტექნოლოგია',
                'future-is-here': 'მომავალი აქ არის: მოწინავე AI ტექნოლოგია',
                'tech-support': 'ტექნიკური მხარდაჭერა',
                'robo-genius': 'რობო გენიუსი',
                'image-generation': 'სურათის გენერაცია',
                'chatbots': 'ჩატბოტები',
                'feature-text': 'ბიზნესების უფლებამოსილების გაზრდა ინტელექტუალური, მასშტაბური და ეფექტური გადაწყვეტილებებით, რომლებიც ხელს უწყობენ პროგრესს',
                
                // FAQ Section
                'faqs': 'ხშირი კითხვები',
                'frequently-asked': 'ხშირად დასმული კითხვები',
                'faq-question-1': 'რა არის AI სტარტაპი და რა სერვისებს გთავაზობთ?',
                'faq-question-2': 'გთავაზობთ წინასწარ შექმნილ AI მოდელებს თუ ყველაფერს ნულიდან ქმნით?',
                'faq-question-3': 'რა არის AI გადაწყვეტილების შემუშავების პროცესი ჩემი ბიზნესისთვის?',
                'faq-question-4': 'რა არის AI სტარტაპი და რა სერვისებს გთავაზობთ?',
                'faq-question-5': 'როგორ უზრუნველყოფთ მონაცემთა კონფიდენციალურობას და შესაბამისობას რეგულაციებთან?',
                'faq-answer': 'AI Software as a Service სტარტაპი აერთიანებს ღრუბლოვანი პლატფორმების მასშტაბურობას ხელოვნური ინტელექტის ძალასთან, რათა მიაწოდოს ინოვაციური, მოთხოვნაზე დაფუძნებული გადაწყვეტილებები. ეს სტარტაპები ემსახურება ფართო სპექტრის ინდუსტრიებს AI-ზე დაფუძნებული ინსტრუმენტებისა და აპლიკაციების შეთავაზებით, რომლებიც წყვეტენ კონკრეტულ ბიზნეს გამოწვევებს, აუმჯობესებენ ეფექტურობას და ხელს უწყობენ მონაცემებზე დაფუძნებულ გადაწყვეტილებებს. AI ინდუსტრია სწრაფად ფართოვდება, შესაძლებლობებით ტრადიციული ინდუსტრიების დარღვევისა და სრულიად ახალი ბაზრების შექმნის. უწყვეტი წინსვლა ჰარდვერში და ალგორითმებში AI სტარტაპებს საშუალებას აძლევს მნიშვნელოვან როლს ითამაშონ მომავლის ჩამოყალიბებაში.',
                
                // Pricing Section
                'pricing-plan': 'ფასების გეგმა',
                'affordable-pricing': 'ხელმისაწვდომი ფასების გეგმა',
                'basic': 'ძირითადი',
                'standard': 'სტანდარტული',
                'premium': 'პრემიუმი',
                'pricing-text': 'ეს არის შესანიშნავი ვარიანტი ადამიანებისთვის და მცირე ბიზნესებისთვის, რომლებიც იწყებენ.',
                'per-month': '/თვეში',
                'up-to-10-members': '10 წევრამდე თვეში',
                'cultivation-plans': 'მოყვანის გეგმები და ველის საზღვრები',
                'scouting-app': 'შეგროვების აპლიკაცია/მოდული',
                'satellite-moisture': 'სატელიტური ფარდობითი კულტურის ტენიანობა',
                'choose-your-plan': 'აირჩიეთ თქვენი გეგმა',
                
                // Blog Section
                'news': 'სიახლეები',
                'latest-news': 'ჩვენი უახლესი სიახლეები და ბლოგი',
                'view-all-post': 'ყველა პოსტის ნახვა',
                'by-admin': 'ადმინისტრატორის მიერ',
                'blog-title-1': 'AI-ისა და რობოტიკის აღმავლობა საცალო ვაჭრობის მომხმარებელთა გამოცდილებაში',
                'blog-title-2': 'როგორ ცვლის AI ბიზნესებს ყველა ინდუსტრიაში',
                'blog-title-3': 'ღრმა სწავლებისა და ნეირონული ქსელების გაგება AI-ში',
                
                // Footer
                'get-started-footer': 'დავიწყოთ',
                'lets-make-great': 'მოდი რაღაც დიდი შევქმნათ ერთად',
                'footer-about-text': 'მონაცემთა კონფიდენციალურობა და უსაფრთხოება ჩვენი ოპერაციების ბირთვშია, რაც უზრუნველყოფს შესაბამისობას გლობალურ სტანდარტებთან, როგორიცაა GDPR და HIPAA.',
                'quick-links': 'სასარგებლო ბმულები',
                'company': 'კომპანია',
                'what-we-offer': 'რას ვთავაზობთ',
                'our-story': 'ჩვენი ისტორია',
                'latest-posts': 'ბოლო პოსტები',
                'help-center': 'დახმარების ცენტრი',
                'our-partners': 'ჩვენი პარტნიორები',
                'our-service': 'ჩვენი სერვისი',
                'robotic-automation': 'რობოტული ავტომატიზაცია',
                'education-science-footer': 'განათლება და მეცნიერება',
                'machine-learning-footer': 'მანქანური სწავლება',
                'predictive-analysis': 'პროგნოზირებადი ანალიზი',
                'data-security': 'მონაცემთა უსაფრთხოება',
                'get-the-app': 'ჩამოტვირთეთ აპლიკაცია',
                'suggest-connecting': 'ჩვენ ვთავაზობთ აპლიკაციების დაკავშირებას',
                'all-rights-reserved': 'ყველა უფლება დაცულია.',
                'privacy-policy': 'კონფიდენციალურობის პოლიტიკა',
                'terms-services': 'სერვისის პირობები',
                'disclaimer': 'განთავისუფლება',

                // Cart Page
                'coupon-code': 'კუპონის კოდი...',
                'apply-coupon': 'კუპონის გამოყენება',
                'update-cart': 'კალათის განახლება',
                'continue-shopping': 'შოპინგის გაგრძელება',
                'cart-totals': 'კალათის ჯამი',
                'cart-subtotal': 'ქვე-ჯამი',
                'shipping-and-handling': 'მიწოდება და დამუშავება',
                'free-shipping': 'უფასო მიწოდება',
                'flat-rate': 'ფიქსირებული ტარიფი',
                'shipping-updated-on-checkout': 'მიწოდების ოფციები განახლდება ანგარიშსწორებისას.',
                'change-address': 'მისამართის შეცვლა',
                'select-an-option': 'აირჩიეთ ვარიანტი…',
                'town-city': 'ქალაქი',
                'postcode-zip': 'საფოსტო ინდექსი',
                'update': 'განახლება',
                'order-total': 'საბოლოო ჯამი',
                'proceed-to-checkout': 'გადახდის გაგრძელება',

                // Shop Details Page
                'availability': 'ხელმისაწვდომობა:',
                'in-stock': 'მარაგშია',
                'add-to-cart': 'კალათაში დამატება',
                'customer-reviews': 'მომხმარებლის მიმოხილვა',
                'sku': 'SKU:',
                'category': 'კატეგორია:',
                'tags': 'ტეგები:'
            }
        };
        
        const t = translations[lang] || translations.en;

        // Update <html lang=".."> for a11y/SEO
        if (document.documentElement) {
            document.documentElement.setAttribute('lang', lang);
        }

        // Generic: translate any element annotated with data-translate
        document.querySelectorAll('[data-translate]').forEach(function(el){
            var key = el.getAttribute('data-translate');
            if (t[key]) {
                el.textContent = t[key];
            }
        });
        
        // Function to translate text content
        function translateTextContent(element, key) {
            if (element && t[key]) {
                element.textContent = t[key];
            }
        }
        
        // Function to translate HTML content
        function translateHTMLContent(element, key) {
            if (element && t[key]) {
                element.innerHTML = t[key];
            }
        }
        
        // Hero Section
        translateTextContent(document.querySelector('.hero-title'), 'hero-title');
        translateTextContent(document.querySelector('.hero-text'), 'hero-text');
        
        // Navigation
        const navLinks = {
            'a[href="index.html"]': 'home',
            'a[href="about.html"]': 'about-us',
            'a[href="service.html"]': 'services',
            'a[href="blog.html"]': 'blog',
            'a[href="contact.html"]': 'contact-us-nav'
        };
        
        Object.keys(navLinks).forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                if (element.textContent.trim() === translations.en[navLinks[selector]]) {
                    translateTextContent(element, navLinks[selector]);
                }
            });
        });
        
        // Hero buttons
        const heroButtons = {
            '.th-btn.style2[href="service.html"]': 'discover-more',
            '.th-btn.style-border2[href="contact.html"]': 'contact-us',
            '.th-btn.style2[href="contact.html"]': 'get-started'
        };
        
        Object.keys(heroButtons).forEach(selector => {
            const element = document.querySelector(selector);
            if (element) {
                translateTextContent(element, heroButtons[selector]);
            }
        });
        
        // About Section
        translateTextContent(document.querySelector('.sub-title.style2.before-none'), 'who-we-are');
        translateTextContent(document.querySelector('.sec-title[data-cue="slideInLeft"][data-delay="300"]'), 'about-text');
        
        // About feature cards (keep if exists)
        const aboutCards = document.querySelectorAll('.about-feature-card .box-title');
        aboutCards.forEach((card, index) => {
            const keys = ['customers-satisfaction', 'quality-assurance'];
            if (keys[index]) {
                translateTextContent(card, keys[index]);
            }
        });

        const aboutTexts = document.querySelectorAll('.about-feature-card .box-text');
        aboutTexts.forEach((el, index) => {
            const key = index === 0 ? 'about-feature-text-1' : 'about-feature-text-2';
            translateTextContent(el, key);
        });
        
        // Services Section (handled via data-translate if present)
        
        // Service cards
        const serviceCards = document.querySelectorAll('.service-card');
        const serviceKeys = [
            'ai-development', 'data-analytics', 'machine-learning', 
            'ai-consulting', 'automation-process', 'education-science',
            'ai-research', 'ai-cybersecurity'
        ];
        
        serviceCards.forEach((card, index) => {
            const titleElement = card.querySelector('.box-title a');
            const textElement = card.querySelector('.box-text');
            const readMoreElement = card.querySelector('.link-btn');
            
            if (titleElement && serviceKeys[index]) {
                translateTextContent(titleElement, serviceKeys[index]);
                translateTextContent(textElement, serviceKeys[index] + '-text');
                if (readMoreElement) {
                    translateHTMLContent(readMoreElement, 'read-more');
                }
            }
        });
        
        // Why Choose Us Section (handled via data-translate if present)
        
        const whyCards = document.querySelectorAll('.why-card');
        const whyTitles = ['technology-integration', 'certified-experts', 'effortless-engagement', 'future-vision'];
        whyCards.forEach((card, index) => {
            const titleElement = card.querySelector('.box-title');
            if (titleElement && whyTitles[index]) {
                translateTextContent(titleElement, whyTitles[index]);
            }
        });
        
        // Project Section (handled via data-translate if present)
        
        // Feature Section (handled via data-translate if present)
        
        const featureCards = document.querySelectorAll('.feature-card');
        const featureTitles = ['tech-support', 'robo-genius', 'image-generation', 'chatbots'];
        featureCards.forEach((card, index) => {
            const titleElement = card.querySelector('.box-title');
            const textElement = card.querySelector('.box-text');
            if (titleElement && featureTitles[index]) {
                translateTextContent(titleElement, featureTitles[index]);
                translateTextContent(textElement, 'feature-text');
            }
        });
        
        // FAQ Section (handled via data-translate if present)
        
        const faqQuestions = document.querySelectorAll('.accordion-button');
        const faqKeys = ['faq-question-1', 'faq-question-2', 'faq-question-3', 'faq-question-4', 'faq-question-5'];
        faqQuestions.forEach((question, index) => {
            if (faqKeys[index]) {
                translateTextContent(question, faqKeys[index]);
            }
        });
        
        const faqAnswers = document.querySelectorAll('.faq-text');
        faqAnswers.forEach(answer => {
            translateTextContent(answer, 'faq-answer');
        });
        
        // Pricing Section (handled via data-translate if present)
        
        const pricingCards = document.querySelectorAll('.price-card');
        const pricingTitles = ['basic', 'standard', 'premium'];
        pricingCards.forEach((card, index) => {
            const titleElement = card.querySelector('.box-title');
            const textElement = card.querySelector('.box-text');
            const durationElement = card.querySelector('.duration');
            const subtitleElement = card.querySelector('.box-subtitle');
            const planButton = card.querySelector('.th-btn');
            
            if (titleElement && pricingTitles[index]) {
                translateTextContent(titleElement, pricingTitles[index]);
                translateTextContent(textElement, 'pricing-text');
                translateTextContent(durationElement, 'per-month');
                translateTextContent(subtitleElement, 'up-to-10-members');
                translateTextContent(planButton, 'choose-your-plan');
            }
        });
        
        // Blog Section (handled via data-translate if present)
        
        // Footer (handled via data-translate if present)
        
        // --- Helpers ---
        function translateTextBySelector(selector, key) {
            var el = document.querySelector(selector);
            if (el && t[key]) el.textContent = t[key];
        }
        function translateHTMLBySelector(selector, key) {
            var el = document.querySelector(selector);
            if (el && t[key]) el.innerHTML = t[key];
        }
        function translateAttrBySelector(selector, attr, key) {
            var el = document.querySelector(selector);
            if (el && t[key]) el.setAttribute(attr, t[key]);
        }
        function replaceIfExact(selector, fromKey, toKey) {
            var el = document.querySelector(selector);
            if (!el) return;
            var from = translations.en[fromKey] || '';
            if (from && el.textContent.trim() === from && t[toKey]) {
                el.textContent = t[toKey];
            }
        }

        // --- Page-specific translations ---
        var path = (window.location && window.location.pathname) ? window.location.pathname : '';

        // Cart Page
        if (path.indexOf('cart') !== -1) {
            // Coupon area
            translateAttrBySelector('.th-cart-coupon input.form-control', 'placeholder', 'coupon-code');
            var actionButtons = document.querySelectorAll('.actions .th-btn');
            if (actionButtons && actionButtons.length >= 2) {
                if (t['apply-coupon']) actionButtons[0].textContent = t['apply-coupon'];
                if (t['update-cart']) actionButtons[1].textContent = t['update-cart'];
            }
            translateTextBySelector('.actions a.th-btn.style3', 'continue-shopping');
            translateTextBySelector('.summary-title', 'cart-totals');

            // Totals table
            var subtotalLabel = document.querySelector('.cart_totals tbody tr:first-child td:first-child');
            if (subtotalLabel && t['cart-subtotal']) subtotalLabel.textContent = t['cart-subtotal'];
            translateTextBySelector('.cart_totals .shipping th', 'shipping-and-handling');
            replaceIfExact('label[for="free_shipping"]', 'free-shipping', 'free-shipping');
            replaceIfExact('label[for="flat_rate"]', 'flat-rate', 'flat-rate');
            translateTextBySelector('.woocommerce-shipping-destination', 'shipping-updated-on-checkout');
            translateTextBySelector('.shipping-calculator-button', 'change-address');
            // Calculator placeholders
            var calcForm = document.querySelector('.shipping-calculator-form');
            if (calcForm) {
                var inputs = calcForm.querySelectorAll('input.form-control');
                if (inputs && inputs.length >= 2) {
                    inputs[0].setAttribute('placeholder', t['town-city'] || inputs[0].getAttribute('placeholder') || '');
                    inputs[1].setAttribute('placeholder', t['postcode-zip'] || inputs[1].getAttribute('placeholder') || '');
                }
                var updateBtn = calcForm.querySelector('button.th-btn');
                if (updateBtn && t['update']) updateBtn.textContent = t['update'];
            }
            // Order total row label
            var orderTotalLabel = document.querySelector('.cart_totals tfoot .order-total td:first-child');
            if (orderTotalLabel && t['order-total']) orderTotalLabel.textContent = t['order-total'];
            translateTextBySelector('.wc-proceed-to-checkout .th-btn', 'proceed-to-checkout');
        }

        // Shop Details Page
        if (path.indexOf('shop-details') !== -1) {
            // Availability label
            var availabilityLabel = document.querySelector('.product-about .text-title');
            if (availabilityLabel && t['availability']) availabilityLabel.textContent = t['availability'];
            // In-stock text (preserve icon if exists)
            var stockEl = document.querySelector('.product-about .stock.in-stock');
            if (stockEl && t['in-stock']) {
                stockEl.innerHTML = stockEl.innerHTML.replace(/In Stock/i, t['in-stock']);
            }
            // Add to cart button
            translateTextBySelector('.product-about .actions .th-btn', 'add-to-cart');
            // Reviews link
            var reviewLink = document.querySelector('.product-about .woocommerce-review-link');
            if (reviewLink && t['customer-reviews']) {
                // keep count number if present
                var countSpan = reviewLink.querySelector('.count');
                var countText = countSpan ? countSpan.textContent.trim() + ' ' : '';
                reviewLink.textContent = '(' + countText + t['customer-reviews'] + ')';
            }
            // Meta labels
            var skuWrapper = document.querySelector('.product_meta .sku_wrapper');
            if (skuWrapper && t['sku']) skuWrapper.innerHTML = skuWrapper.innerHTML.replace(/^\s*SKU:/i, t['sku']);
            var postedIn = document.querySelector('.product_meta .posted_in');
            if (postedIn && t['category']) postedIn.innerHTML = postedIn.innerHTML.replace(/^\s*Category:/i, t['category']);
            var tagsEl = document.querySelector('.product_meta span');
            if (tagsEl && t['tags']) {
                // replace first occurrence of 'Tags:' in meta block
                var meta = document.querySelector('.product_meta');
                if (meta) meta.innerHTML = meta.innerHTML.replace(/Tags:/i, t['tags']);
            }
        }

        // Contact Page
        if (path.indexOf('contact') !== -1) {
            // Replace common info box titles only if they match EN defaults
            document.querySelectorAll('.contact-info .box-title').forEach(function(el){
                var txt = el.textContent.trim();
                if (txt === (translations.en['location'] || 'Location')) el.textContent = t['location'] || txt;
                if (txt === (translations.en['email-us'] || 'Email us')) el.textContent = t['email-us'] || txt;
                if (txt === (translations.en['free-call'] || 'Free Call')) el.textContent = t['free-call'] || txt;
                if (txt === (translations.en['opening-hour'] || 'Opening hour')) el.textContent = t['opening-hour'] || txt;
            });
        }
    }
});

// scrollCue
scrollCue.init({
    percentage: 0.5,
    duration : 600,
});






