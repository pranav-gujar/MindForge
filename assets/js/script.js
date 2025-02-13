document.addEventListener("DOMContentLoaded", function () {
  let menuBtn = document.getElementById("menu-btn");
  let navLinks = document.getElementById("nav-links");

  menuBtn.addEventListener("click", function () {
      navLinks.classList.toggle("active");

      // Toggle between ☰ and ✖
      if (navLinks.classList.contains("active")) {
          menuBtn.textContent = "✖"; // Change to close icon
      } else {
          menuBtn.textContent = "☰"; // Change back to hamburger icon
      }
  });

  // Close menu when clicking outside
  document.addEventListener("click", function (event) {
      if (!menuBtn.contains(event.target) && !navLinks.contains(event.target)) {
          navLinks.classList.remove("active");
          menuBtn.textContent = "☰"; // Reset to hamburger icon
      }
  });
});

document.addEventListener("DOMContentLoaded", function () {
    let navLinks = document.querySelectorAll("nav ul li a");
    let currentPage = window.location.pathname.split("/").pop();

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});

document.getElementById('filter').addEventListener('change', function() {
    let level = this.value;
    let courses = document.querySelectorAll('.course-card');

    courses.forEach(course => {
        if (level === "all" || course.dataset.level === level) {
            course.style.display = "block";
        } else {
            course.style.display = "none";
        }
    });
});

let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
