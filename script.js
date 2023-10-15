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


