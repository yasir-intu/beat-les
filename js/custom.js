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
