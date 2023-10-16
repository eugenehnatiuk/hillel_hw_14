// SWITCH

const switcher = document.querySelector(".switch input");
const regForm = document.querySelector(".reg_form");

switcher.addEventListener("change", () => {
  if (switcher.checked) {
    regForm.style.transform = "translateX(-125%)";
    regForm.style.transition = "transform 0.3s linear";
  } else {
    regForm.style.transform = "translateX(0)";
    regForm.style.transition = "transform 0.3s linear";
  }
});

// PASSWORD BEHEVIOR
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

// PLACEHOLDERS

// for email
const emailPlaceholder = document.querySelectorAll(".email");

emailPlaceholder.forEach((email) => {
  email.addEventListener("focus", () => {
    email.placeholder = "";
  });

  email.addEventListener("blur", () => {
    email.placeholder = "Введіть ваш e-mail";
  });
});

// for password
const passwordPlaceholder = document.querySelectorAll(".password");

passwordPlaceholder.forEach((password) => {
  password.addEventListener("focus", () => {
    password.placeholder = "";
  });
  password.addEventListener("blur", () => {
    password.placeholder = "Пароль";
  });
});

// for password confirm
const passwordConfirmPlaceholder = document.querySelector(".passwordConfirm");

passwordConfirmPlaceholder.addEventListener("focus", () => {
  passwordConfirmPlaceholder.placeholder = "";
});
passwordConfirmPlaceholder.addEventListener("blur", () => {
  passwordConfirmPlaceholder.placeholder = "Повторіть пароль";
});
