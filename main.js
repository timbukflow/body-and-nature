$(document).ready(function() {
    // Accordion
    $('.acctitle').click(function() {
        $accCross = $(this).children('.pmcontainer');
        $('.pmcontainer').not($accCross).removeClass('pmrotate');
        $(this).children('.pmcontainer').toggleClass('pmrotate');

        $accordion_content = $(this).siblings('.acclist');
        $('.acclist').not($accordion_content).slideUp(600);
        $accordion_content.stop(true, false).slideToggle(600);
    });

    //Slider
        let currentIndex = 0;
        const slides = $('.slide');
        const totalSlides = slides.length;
        let slideWidth = $('.slider').width();
        let slideInterval;
    
        function goToSlide(index) {
            $('.slides').css('transition', 'transform 1.5s ease-in-out');
            $('.slides').css('transform', `translateX(${-index * slideWidth}px)`);
            currentIndex = index;
            updateBullets();
        }
    
        function updateBullets() {
            $('.bullet').removeClass('active');
            $(`.bullet[data-index=${currentIndex % totalSlides}]`).addClass('active');
        }
    
        function autoSlide() {
            currentIndex++;
            if (currentIndex === totalSlides) {
                setTimeout(function() {
                    $('.slides').css('transition', 'none');
                    $('.slides').css('transform', `translateX(0px)`);
                    currentIndex = 0;
                    updateBullets();
                }, 500);
            } else {
                goToSlide(currentIndex);
            }
        }
    
        function startAutoSlide() {
            if ($(window).width() > 600) {
                slideInterval = setInterval(autoSlide, 4000);
            }
        }
    
        function stopAutoSlide() {
            clearInterval(slideInterval);
        }
    
        $('.bullet').on('click', function() {
            stopAutoSlide();
            const index = $(this).data('index');
            goToSlide(index);
        });
    
        $('.slider').hover(function() {
            stopAutoSlide();
        }, function() {
            startAutoSlide();
        });
    
        $(window).on('resize', function() {
            slideWidth = $('.slider').width();
            goToSlide(currentIndex);
            stopAutoSlide();
            startAutoSlide();
        });
    
        goToSlide(currentIndex);
        startAutoSlide();
    
    
});
