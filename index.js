const $form = document.querySelector(".form");
const $input = document.querySelector(".form-input");
const $error = document.querySelector(".submit-error");

const emailIsValid = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

$form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (emailIsValid($input.value)) {
    $form.classList.remove("error");
    $error.style.visibility = "hidden";
    alert("Thank you for signing up!");
  } else {
    $form.classList.add("error");
    $error.style.visibility = "visible";
  }

  $input.value = "";
});
