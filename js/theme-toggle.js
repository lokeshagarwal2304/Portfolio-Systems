document.addEventListener("DOMContentLoaded", () => {
  // Theme toggle functionality
  const themeToggleBtn = document.getElementById("theme-toggle")
  const htmlElement = document.documentElement

  // Check for saved theme preference or use system preference
  const savedTheme = localStorage.getItem("theme")
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

  // Set initial theme
  if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
    htmlElement.classList.add("dark")
  } else {
    htmlElement.classList.remove("dark")
  }

  // Toggle theme on button click
  themeToggleBtn.addEventListener("click", () => {
    if (htmlElement.classList.contains("dark")) {
      // Switch to light theme
      htmlElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    } else {
      // Switch to dark theme
      htmlElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    }
  })

  // Listen for system preference changes
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    if (!localStorage.getItem("theme")) {
      if (e.matches) {
        htmlElement.classList.add("dark")
      } else {
        htmlElement.classList.remove("dark")
      }
    }
  })
})
