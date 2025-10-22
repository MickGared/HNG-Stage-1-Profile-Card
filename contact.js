document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");
  const successMsg = document.getElementById("success");
  let isValid = true;
  document.querySelectorAll(".error").forEach(el => (el.textContent = ""));
  if (!name.value.trim()) {
    document.getElementById("error-name").textContent = "Name is required.";
    isValid = false;
  }
  if (!email.value.trim() || !/^[^@]+@[^@]+\.[^@]+$/.test(email.value)) {
    document.getElementById("error-email").textContent = "Enter a valid email address.";
    isValid = false;
  }
  if (!subject.value.trim()) {
    document.getElementById("error-subject").textContent = "Subject is required.";
    isValid = false;
  }
  if (message.value.trim().length < 10) {
    document.getElementById("error-message").textContent = "Message must be at least 10 characters.";
    isValid = false;
  }
  if (isValid) {
    successMsg.classList.remove("hidden");
    this.reset();
  } else {
    successMsg.classList.add("hidden");
  }
});