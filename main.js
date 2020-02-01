var span = document.getElementById("overlay-btn");
var overlay = document.getElementById("overlay");
var signUp = $("#sign-up");
var signIn = $("#sign-in");

$(span).on("click", function() {
  if ($(overlay).hasClass("move-left")) {
    $(span).html("Sign In");
    $(signUp).removeClass("remove-left");
    $(overlay).removeClass("move-left");
    $(signIn).removeClass("active-right");
  } else if ($(!overlay).hasClass("move-left")) {
    $(signUp).addClass("active-left");
  } else {
    $(signUp).addClass("remove-left");
    $(overlay).addClass("move-left");
    $(span).html("Sign Up");
    $(signIn).addClass("active-right");
  }
});

let form = document.querySelector(".sign-up-form");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  console.log(event);
  console.log(event.target);
});
