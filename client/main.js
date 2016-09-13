var username;
var password;

$(document).ready(function() {
    function login(event) {

    }
    $('body').on('click', '.btnSubmit', function() {
      var username = document.getElementById("txtUsername").value;
      var password = document.getElementById("txtPass").value;
      var msgElement = document.getElementById("message");
      console.log(username);
      $.ajax({
          url: "/api/user/login",
          method: "POST",
          contentType: "application/json",
          data: JSON.stringify({
              "username": username,
              "password": password
          })
      }).done(function(response) {
          if (response.status) {
              msgElement.innerHTML = "Success";
          } else {
              msgElement.innerHTML = "Fail";
          }
      });
    });
});
