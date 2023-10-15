const passWrappers = document.querySelectorAll(".pass_wrapper");

passWrappers.forEach((block) => {
  const passEye = block.querySelector(".passeye");
  const passwordInput = block.querySelector("input[type='password']");

  passEye.addEventListener("click", () => {
    passEye.classList.toggle("visible");
    passwordInput.type =
      passwordInput.type === "password" ? "text" : "password";
  });
});
