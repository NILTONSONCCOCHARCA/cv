// Personaliza estos datos con la información que quieras publicar.
const CONTACT = {
  email: "",       // Ejemplo: "nombre@gmail.com"
  linkedin: ""     // Ejemplo: "https://www.linkedin.com/in/tu-perfil/"
};

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const emailLink = document.getElementById("emailLink");
const linkedinLink = document.getElementById("linkedinLink");

if (CONTACT.email.trim()) {
  emailLink.href = `mailto:${CONTACT.email}`;
  emailLink.textContent = CONTACT.email;
  emailLink.insertAdjacentHTML("beforeend", " <span>↗</span>");
} else {
  emailLink.href = "#";
  emailLink.addEventListener("click", event => event.preventDefault());
}

if (CONTACT.linkedin.trim()) {
  linkedinLink.href = CONTACT.linkedin;
  linkedinLink.target = "_blank";
  linkedinLink.rel = "noopener noreferrer";
} else {
  linkedinLink.href = "#";
  linkedinLink.addEventListener("click", event => event.preventDefault());
}
