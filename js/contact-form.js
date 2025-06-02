document.addEventListener("DOMContentLoaded", () => {
  // Contact form submission
  const contactForm = document.getElementById("contact-form")
  const toast = document.getElementById("toast")

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Get form values
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const message = document.getElementById("message").value

    // Here you would typically send the form data to a server
    // For this demo, we'll just show a success message
    console.log("Form submitted:", { name, email, message })

    // Show toast notification
    toast.classList.add("show")

    // Hide toast after 3 seconds
    setTimeout(() => {
      toast.classList.remove("show")
    }, 3000)

    // Reset form
    contactForm.reset()
  })
})
