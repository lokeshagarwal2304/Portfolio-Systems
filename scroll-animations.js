document.addEventListener("DOMContentLoaded", () => {
  // Scroll animations using Intersection Observer
  const scrollAnimationElements = document.querySelectorAll(".scroll-animation")

  const scrollAnimationObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add animation classes based on position
          if (entry.target.classList.contains("timeline-left")) {
            entry.target.classList.add("animate-slide-in")
          } else if (entry.target.classList.contains("timeline-right")) {
            entry.target.classList.add("animate-slide-right")
          } else {
            entry.target.classList.add("animate-fade-in")
          }

          // Stop observing after animation is added
          observer.unobserve(entry.target)
        }
      })
    },
    {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    },
  )

  // Observe all elements with scroll-animation class
  scrollAnimationElements.forEach((element) => {
    scrollAnimationObserver.observe(element)

    // Set initial state (invisible)
    element.style.opacity = "0"
  })
})
