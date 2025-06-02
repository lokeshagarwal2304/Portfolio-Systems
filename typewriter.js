document.addEventListener("DOMContentLoaded", () => {
  // Typewriter effect
  const typewriterElement = document.getElementById("typewriter")
  const words = ["Developer", "Techiee", "AI Explorer", "Designer", "Problem Solver"]
  let wordIndex = 0
  let charIndex = 0
  let isDeleting = false
  let typeSpeed = 100

  function type() {
    const currentWord = words[wordIndex]

    if (isDeleting) {
      // Remove a character
      typewriterElement.textContent = currentWord.substring(0, charIndex - 1)
      charIndex--
      typeSpeed = 50 // Faster when deleting
    } else {
      // Add a character
      typewriterElement.textContent = currentWord.substring(0, charIndex + 1)
      charIndex++
      typeSpeed = 150 // Slower when typing
    }

    // If word is complete
    if (!isDeleting && charIndex === currentWord.length) {
      // Pause at the end of a word
      isDeleting = true
      typeSpeed = 1500 // Pause before deleting
    }

    // If word is deleted
    if (isDeleting && charIndex === 0) {
      isDeleting = false
      wordIndex = (wordIndex + 1) % words.length // Move to next word
      typeSpeed = 500 // Pause before typing new word
    }

    setTimeout(type, typeSpeed)
  }

  // Start the typewriter effect
  setTimeout(type, 1000)
})
