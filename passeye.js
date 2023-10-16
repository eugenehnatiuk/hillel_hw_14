const passWrappers = document.querySelectorAll(".pass_wrapper");

passWrappers.forEach((block) => {
  const passEye = block.querySelector(".passeye");
  const passwordInput = block.querySelector("input[type='password']");
  let passwordVisible = false;

  passwordInput.addEventListener("blur", () => {
    passwordVisible = false;
    passwordInput.type = "password";
    passwordInput.style.color = "#153416";
    passEye.classList.remove("visible");
  });

  passEye.addEventListener("click", () => {
    passwordVisible = !passwordVisible;
    passwordInput.type = passwordVisible ? "password" : "text";
    passwordInput.style.color = passwordVisible ? "#153416" : "#fff";
    passEye.classList.add(passwordVisible ? "" : "visible");
    passwordInput.focus();
  });
});
