$(document).ready(function () {
    $('.team__boxes').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false,
        mobileFirst: true,
        responsive: [{

            breakpoint: 767,
            settings: {
                slidesToShow: 2,
            }
            },
            {
            breakpoint: 1199,
            settings: {
                slidesToShow: 3,
            }
            }
        ],

    });
})