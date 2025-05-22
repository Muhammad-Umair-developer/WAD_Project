$(document).ready(function () {
    let currentSlide = 0;
    const slides = $('.slider-image');
    const totalSlides = slides.length
    function showSlide(index) {
        slides.addClass('opacity-0').removeClass('opacity-100');
        slides.eq(index).removeClass('opacity-0').addClass('opacity-100');
        $('.dot').removeClass('bg-white').addClass('bg-white/50');
        $('.dot').eq(index).removeClass('bg-white/50').addClass('bg-white');
        currentSlide = index;
    
        $('#next').click(function () {
            let nextSlide = (currentSlide + 1) % totalSlides;
            showSlide(nextSlide);
        })
        $('#prev').click(function () {
            let prevSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            showSlide(prevSlide);
        })
        $('.dot').click(function () {
            let slideIndex = $(this).data('index');
            showSlide(slideIndex);
        })
        let autoplay = setInterval(() => {
            $('#next').click();
        }, 5000)
        $('#slider').hover(
            function () { clearInterval(autoplay); },
            function () {
                autoplay = setInterval(() => {
                    $('#next').click();
                }, 5000);
            }
        )
        showSlide(0);
    }   
});

document.getElementById('signupBtn').addEventListener('click', function () {
    window.location.href = 'signup.html';
});

document.querySelectorAll('.faq-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    // Toggle visibility
    content.classList.toggle('hidden');
    // Rotate the icon
    const icon = button.querySelector('svg');
    icon.classList.toggle('rotate-180');
  });
});