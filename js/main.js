document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const mobileMenuButton = document.getElementById("mobile-menu-button")
  const mobileMenu = document.getElementById("mobile-menu")
  const hamburger = document.querySelector(".hamburger")

  mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden")

    // Animate hamburger to X
    const spans = hamburger.querySelectorAll("span")
    if (mobileMenu.classList.contains("hidden")) {
      spans[0].classList.remove("rotate-45", "translate-y-2")
      spans[1].classList.remove("opacity-0")
      spans[2].classList.remove("-rotate-45", "-translate-y-2")
    } else {
      spans[0].classList.add("rotate-45", "translate-y-2")
      spans[1].classList.add("opacity-0")
      spans[2].classList.add("-rotate-45", "-translate-y-2")
    }
  })

  // Close mobile menu when clicking on a link
  const mobileLinks = mobileMenu.querySelectorAll("a")
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden")

      // Reset hamburger
      const spans = hamburger.querySelectorAll("span")
      spans[0].classList.remove("rotate-45", "translate-y-2")
      spans[1].classList.remove("opacity-0")
      spans[2].classList.remove("-rotate-45", "-translate-y-2")
    })
  })

  // Ripple effect on hero section
  const heroSection = document.getElementById("home")
  heroSection.addEventListener("click", function (e) {
    const ripple = document.createElement("span")
    ripple.classList.add("ripple")

    const x = e.clientX - e.target.offsetLeft
    const y = e.clientY - e.target.offsetTop

    ripple.style.left = `${x}px`
    ripple.style.top = `${y}px`

    this.appendChild(ripple)

    setTimeout(() => {
      ripple.remove()
    }, 600)
  })

  // Active navigation link based on scroll position
  const sections = document.querySelectorAll("section")
  const navLinks = document.querySelectorAll(".nav-link")

  window.addEventListener("scroll", () => {
    let current = ""

    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.clientHeight

      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id")
      }
    })

    navLinks.forEach((link) => {
      link.classList.remove("active")
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active")
      }
    })

    // Show/hide scroll to top button
    const scrollTopButton = document.getElementById("scroll-top")
    if (window.pageYOffset > 300) {
      scrollTopButton.style.display = "block"
    } else {
      scrollTopButton.style.display = "none"
    }

    // Shrink navbar on scroll
    const navbar = document.getElementById("navbar")
    if (window.pageYOffset > 50) {
      navbar.classList.add("py-2")
      navbar.classList.remove("py-4")
    } else {
      navbar.classList.add("py-4")
      navbar.classList.remove("py-2")
    }
  })

  // Scroll to top functionality
  const scrollTopButton = document.getElementById("scroll-top")
  scrollTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  })

  // Name hover effect
  const nameElement = document.getElementById("name")
  nameElement.addEventListener("mouseover", function () {
    this.classList.add("text-gold-dark")
  })

  nameElement.addEventListener("mouseout", function () {
    this.classList.remove("text-gold-dark")
  })
})
