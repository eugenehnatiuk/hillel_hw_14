const passWrappers = document.querySelectorAll(".pass_wrapper");

passWrappers.forEach((block) => {
  const passEye = block.querySelector(".passeye");
  const passwordInput = block.querySelector("input[type='password']");

  // passEye.addEventListener("mouseenter", () => {
  //   passEye.classList.add("visible");
  // });

  // passEye.addEventListener("mouseleave", () => {
  //   passEye.classList.remove("visible");
  // passwordInput.type = "password";
  // });

  passEye.addEventListener("click", () => {
    passwordInput.type =
      passwordInput.type === "password" ? "text" : "password";
    passEye.classList.toggle("visible");
    passwordInput.focus();
  });

  passwordInput.addEventListener("blur", () => {
    passwordInput.type = "password";
    passEye.classList.remove("visible");
  });
});
