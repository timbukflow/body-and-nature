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
    $(document).ready(function() {
        let currentIndex = 0;
        const slides = $('.slide');
        const totalSlides = slides.length;
        const slideWidth = $('.slider').width();
        let slideInterval;
        let startX = 0;
        let endX = 0;
    
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
            currentIndex = (currentIndex + 1) % totalSlides;
            goToSlide(currentIndex);
        }
    
        $('.bullet').on('click', function() {
            clearInterval(slideInterval);
            const index = $(this).data('index');
            goToSlide(index);
        });
    
        $('.slider').hover(
            function() {
                clearInterval(slideInterval);
            },
            function() {
                slideInterval = setInterval(autoSlide, 4000);
            }
        );
    
        $('.slider').on('touchstart', function(event) {
            startX = event.originalEvent.touches[0].clientX;
        });
    
        $('.slider').on('touchmove', function(event) {
            endX = event.originalEvent.touches[0].clientX;
        });
    
        $('.slider').on('touchend', function() {
            if (startX > endX + 50) { // Swipe left
                currentIndex = (currentIndex + 1) % totalSlides;
                goToSlide(currentIndex);
            } else if (startX < endX - 50) { // Swipe right
                currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
                goToSlide(currentIndex);
            }
        });
    
        slideInterval = setInterval(autoSlide, 4000);
        goToSlide(currentIndex);
    });
    
    
    
    
    
});
