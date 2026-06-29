const contactForm = document.querySelector("#contact-form");
const formNote = document.querySelector("#form-note");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(contactForm);
  const name = formData.get("name").trim();
  const email = formData.get("email").trim();
  const subject = formData.get("subject").trim();
  const message = formData.get("message").trim();

  const body = [
    `Nom: ${name}`,
    `Courriel: ${email}`,
    "",
    "Message:",
    message
  ].join("\n");

  const mailtoUrl = new URL("mailto:contact@kinelytic.com");
  mailtoUrl.searchParams.set("subject", subject || "Demande depuis le site web");
  mailtoUrl.searchParams.set("body", body);

  formNote.textContent = "Ouverture de votre application courriel...";
  window.location.href = mailtoUrl.toString();
});

