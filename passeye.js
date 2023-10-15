
const passeye = document.querySelector(".passeye");
const passwordInput = document.querySelector("input[type='password']");

passeye.addEventListener("click", () => {
  passeye.classList.toggle("notHiden");
  passwordInput.type = passwordInput.type === "password" ? "text" : "password";
});