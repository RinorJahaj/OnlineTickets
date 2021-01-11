const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

checkInputs = () => {
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (emailValue === "") {
    setErrorFor(email, "Please add an email address");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Please add an email valid");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "Please add a password");
  } else if (passwordLength(passwordValue, 6)) {
    setErrorFor(password, "Password should have at least 6 characters");
  } else {
    setSuccessFor(password);
  }
};

setErrorFor = (input, message) => {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  small.innerText = message;

  formControl.className = "form-control error";
};

setSuccessFor = (input) => {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
};

isEmail = (email) => {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
};

passwordLength = (p, int) => {
  return p.length >= int ? false : true;
};
