document.addEventListener("DOMContentLoaded", () => {
  // Project filtering functionality
  const filterButtons = document.querySelectorAll(".filter-btn")
  const projectCards = document.querySelectorAll(".project-card")

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => {
        btn.classList.remove("active", "bg-primary", "text-white")
        btn.classList.add("bg-gray-200", "dark:bg-gray-700")
      })

      // Add active class to clicked button
      this.classList.add("active", "bg-primary", "text-white")
      this.classList.remove("bg-gray-200", "dark:bg-gray-700")

      const filter = this.getAttribute("data-filter")

      // Show/hide projects based on filter
      projectCards.forEach((card) => {
        if (filter === "all" || card.getAttribute("data-category") === filter) {
          card.style.display = "block"
        } else {
          card.style.display = "none"
        }
      })
    })
  })

  // Project card click to open GitHub
  projectCards.forEach((card) => {
    card.addEventListener("click", function () {
      const link = this.querySelector(".project-overlay a")
      if (link) {
        window.open(link.getAttribute("href"), "_blank")
      }
    })
  })
})
