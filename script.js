// Navbar Scroll Effect
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  // Mobile Menu Toggle
  const toggleBtn = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  toggleBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
  // Removed pricing toggle functionality as it's no longer needed
  // Accordion Functionality
  const accordionButtons = document.querySelectorAll('.border.border-gray-200.rounded button');
  accordionButtons.forEach(button => {
    button.addEventListener('click', function () {
      const content = this.nextElementSibling;
      const icon = this.querySelector('i');
      // Toggle content visibility
      content.classList.toggle('hidden');
      // Toggle icon
      if (content.classList.contains('hidden')) {
        icon.classList.remove('ri-arrow-up-s-line');
        icon.classList.add('ri-arrow-down-s-line');
      } else {
        icon.classList.remove('ri-arrow-down-s-line');
        icon.classList.add('ri-arrow-up-s-line');
      }
      // Close other accordions
      accordionButtons.forEach(otherButton => {
        if (otherButton !== button) {
          const otherContent = otherButton.nextElementSibling;
          const otherIcon = otherButton.querySelector('i');
          otherContent.classList.add('hidden');
          otherIcon.classList.remove('ri-arrow-up-s-line');
          otherIcon.classList.add('ri-arrow-down-s-line');
        }
      });
    });
  });

  // Show first accordion by default
  if (accordionButtons.length > 0) {
    const firstAccordionContent = accordionButtons[0].nextElementSibling;
    const firstAccordionIcon = accordionButtons[0].querySelector('i');
    firstAccordionContent.classList.remove('hidden');
    firstAccordionIcon.classList.remove('ri-arrow-down-s-line');
    firstAccordionIcon.classList.add('ri-arrow-up-s-line');
  }
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: 'smooth'
        });
        // Close mobile menu if open
        if (!mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.add('hidden');
        }
      }
    });
  });
  // Gallery Filtering
  document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("[data-category]");
    const items = document.querySelectorAll(".gallery-item");

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const category = button.getAttribute("data-category");

        // Ubah tampilan tombol aktif
        buttons.forEach((btn) => {
          btn.classList.remove("bg-primary", "text-white");
          btn.classList.add("bg-white", "text-gray-700");
        });

        button.classList.add("bg-primary", "text-white");
        button.classList.remove("bg-white", "text-gray-700");

        // Filter dengan efek transisi
        items.forEach((item) => {
          const itemCategory = item.getAttribute("data-category");

          if (category === "all" || itemCategory === category) {
            item.classList.remove("hidden");
            item.classList.remove("fade-out");
            item.classList.add("fade-in");
          } else {
            item.classList.remove("fade-in");
            item.classList.add("fade-out");
            setTimeout(() => {
              item.classList.add("hidden");
            }, 300); // waktu sesuai dengan transition
          }
        });
      });
    });
  });

  const scrollBtn = document.getElementById('scrollToTopBtn');

  // Tampilkan tombol saat scroll ke bawah
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      scrollBtn.classList.add('show');
    } else {
      scrollBtn.classList.remove('show');
    }
  });

  // Scroll ke atas saat tombol diklik
  scrollBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Counter Animation
   const counters = document.querySelectorAll('.counter');
          const speed = 200; 

          counters.forEach(counter => {
            const animate = () => {
              const value = +counter.getAttribute('data-target');
              const data = +counter.innerText;

              const increment = value / speed;

              if (data < value) {
                counter.innerText = Math.ceil(data + increment);
                setTimeout(animate, 20);
              } else {
                counter.innerText = value + (counter.getAttribute('data-target').includes('%') ? '%' : '+');
              }
            };

            animate();
          });