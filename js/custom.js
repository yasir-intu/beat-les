$('.slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 100,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

$('.slider2').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 100,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

wow = new WOW({
    boxClass: 'wow', // default
    animateClass: 'animated', // default
    offset: 0, // default
    mobile: true, // default
    live: true // default
})
wow.init();

$(document).ready(function () {
    $('.venobox').venobox({
        framewidth: '400px',
        frameheight: '400px',
        infinigall: true,
        numeratio: true,
        overlayColor: 'rgba(0, 0, 0, 0.5)',
        closeBackground: 'rgba(0, 0, 0, 0.3)',
        numerationBackground: 'rgba(0, 0, 0, 0.3)',
        closeColor: '#5bc5f4',
        spinColor: '#5bc5f4',
        spinner: 'cube-grid',
        arrowsColor: '#5bc5f4'
    });

    $('.venobox2').venobox({
        framewidth: '400px',
        frameheight: '800px',
        infinigall: true,
        numeratio: true,
        overlayColor: 'rgba(0, 0, 0, 0.5)',
        closeBackground: 'rgba(0, 0, 0, 0.3)',
        numerationBackground: 'rgba(0, 0, 0, 0.3)',
        closeColor: '#5bc5f4',
        spinColor: '#5bc5f4',
        spinner: 'cube-grid',
        arrowsColor: '#5bc5f4'
    });
    $('.venobox3').venobox({
        framewidth: '300px',
        frameheight: '300px',
        infinigall: true,
        numeratio: true,
        overlayColor: 'rgba(0, 0, 0, 0.5)',
        closeBackground: 'rgba(0, 0, 0, 0.3)',
        numerationBackground: 'rgba(0, 0, 0, 0.3)',
        closeColor: '#5bc5f4',
        spinColor: '#5bc5f4',
        spinner: 'cube-grid',
        arrowsColor: '#5bc5f4'
    });
});

$(document).ready(function(){
    // Add smooth scrolling to all links
    $(".nav-link").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
    // Add smooth scrolling to all links
    $(".bann_a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
    // Add smooth scrolling to all links
    $(".f_a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 460 ) {
        $('.scrolltop:hidden').stop(true, true).fadeIn();
    } else {
        $('.scrolltop').stop(true, true).fadeOut();
    }
});
$(function(){$(".scroll").click(function(){$("html,body").animate({scrollTop:$(".header_part").offset().top},"1000");return false})})

$(function(){

    var $window = $(window);		//Window object

    var scrollTime = 1.2;			//Scroll time
    var scrollDistance = 170;		//Distance. Use smaller value for shorter scroll and greater value for longer scroll

    $window.on("mousewheel DOMMouseScroll", function(event){

        event.preventDefault();	

        var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
        var scrollTop = $window.scrollTop();
        var finalScroll = scrollTop - parseInt(delta*scrollDistance);

        TweenMax.to($window, scrollTime, {
            scrollTo : { y: finalScroll, autoKill:true },
            ease: Power1.easeOut,	//For more easing functions see https://api.greensock.com/js/com/greensock/easing/package-detail.html
            autoKill: true,
            overwrite: 5							
        });

    });

});