const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Mobile submenu toggle
document.querySelectorAll('.has-submenu').forEach(item => {
    item.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            this.classList.toggle('active');
            const subMenu = this.nextElementSibling;
            subMenu.classList.toggle('active');
        }
    });
});

// Add resize listener to reset menu state on screen size change
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        document.querySelectorAll('.sub-menu, .has-submenu').forEach(item => {
            item.classList.remove('active');
        });
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
    }
});

// Fixed Nav Menu 
window.onscroll = function() { stickyNavbar() };

var navbar = document.querySelector(".main-nav");
var sticky = navbar.offsetTop;

function stickyNavbar() {
    if (window.pageYOffset > 100) {
        navbar.classList.add("fixed");
    } else {
        navbar.classList.remove("fixed");
    }
}


 // Get all sections and menu links
 const sections = document.querySelectorAll('.section');
 const menuLinks = document.querySelectorAll('.menu-link');

 // Function to check which section is in the viewport
 function setActiveLink() {
     let currentSection = null;
     
     sections.forEach((section, index) => {
         const rect = section.getBoundingClientRect();
         
         // Check if the section is in view (top of the section is within 100px of the top of the viewport)
         if (rect.top <= 100 && rect.bottom >= 100) {
             currentSection = index;
         }
     });

     // Remove the 'active' class from all menu items
     menuLinks.forEach(link => {
         link.classList.remove('active');
     });

     // Add 'active' class to the corresponding menu item
     if (currentSection !== null) {
         menuLinks[currentSection].classList.add('active');
     }
 }

 // Listen for scroll events
 window.addEventListener('scroll', setActiveLink);

 // Set the initial active link (in case the page is loaded at a scrolled position)
 setActiveLink();



// Slider 
var swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
        delay: 3000,
    },
    pagination: {
        el: '.swiper-pagination', 
        clickable: true,
    },
  });