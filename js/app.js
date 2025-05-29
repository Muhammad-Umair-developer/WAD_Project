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
const courses = [
    "Web Development",
    "Machine Learning",
    "Artificial Intelligence",
    "Python Development"
  ];

  function showSuggestions() {
    const input = document.getElementById("searchInput");
    const list = document.getElementById("suggestionsList");
    const search = input.value.toLowerCase();

    list.innerHTML = "";

    if (search === "") {
      list.classList.add("hidden");
      return;
    }

    const filtered = courses.filter(course => course.toLowerCase().includes(search));

    if (filtered.length === 0) {
      list.classList.add("hidden");
      return;
    }

    filtered.forEach(course => {
      const li = document.createElement("li");
      li.textContent = course;
      li.className = "px-4 py-2 hover:bg-blue-100 cursor-pointer";
      li.onclick = () => {
        input.value = course;
        list.classList.add("hidden");
      };
      list.appendChild(li);
    });

    list.classList.remove("hidden");
  }

  document.addEventListener("click", function (event) {
    const list = document.getElementById("suggestionsList");
    if (!event.target.closest("#searchInput")) {
      list.classList.add("hidden");
    }
  });
  
  const userRole = 'guest'; // Change to 'student', 'admin', or 'teacher'

  // Hide all role links initially
  document.querySelectorAll('.role-link').forEach(el => el.style.display = 'none');

  // Show the role link matching userRole
  if(['student', 'admin', 'teacher'].includes(userRole)) {
    document.querySelector(`.role-link.${userRole}`).style.display = 'block';
  }
   