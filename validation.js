const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

checkInputs = () => {
  //get the values from inputs
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (usernameValue === "") {
    //show error
    //add error class
    setErrorFor(username, "Please add a username");
  } else {
    // add success class
    setSuccessFor(username);
  }

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

  if (password2Value === "") {
    setErrorFor(password2, "Please confirm password");
  } else if (passwordValue !== password2Value) {
    setErrorFor(password2, "Password does not match");
  } else {
    setSuccessFor(password2);
  }
};

setErrorFor = (input, message) => {
  const formControl = input.parentElement; //.form-control elem
  const small = formControl.querySelector("small");

  //   add errror msg inside small:
  small.innerText = message;

  //   add error class:
  formControl.className = "form-control error";
};

setSuccessFor = (input) => {
  const formControl = input.parentElement; //.form-control elem
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
