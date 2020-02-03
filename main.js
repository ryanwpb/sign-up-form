let span = document.querySelector("#overlay-btn");
let overlay = document.querySelector("#overlay");
let signUp = document.querySelector("#sign-up");
let signIn = document.querySelector("#sign-in");

span.addEventListener("click", function(e) {
  if (overlay.classList.contains("move-left")) {
    span.innerHTML = "Sign In";
    signUp.classList.remove("remove-left");
    overlay.classList.remove("move-left");
    signIn.classList.remove("active-right");
  } else if (overlay.classList.contains("move-left")) {
    signUp.classList.add("active-left");
  } else {
    signUp.classList.add("remove-left");
    overlay.classList.add("move-left");
    span.innerHTML = "Sign Up";
    signIn.classList.add("active-right");
  }
});
