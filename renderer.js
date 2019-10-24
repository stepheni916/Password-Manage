var signInBtn = document.getElementById('signInButton');
var signUpBtn = document.getElementById('signUpButton');

signInBtn.addEventListener('click', function(){
    var emailField = document.getElementById('email2').value;
    var passwordField = document.getElementById('password').value;
});

signUpBtn.addEventListener('click', function() {
    var emailField = document.getElementById('email2').value;
    var passwordField = document.getElementById('password').value;

    firebase.auth().createUserWithEmailAndPassword(emailField, passwordField).catch(function(error){
        if(error != null){
            console.log(error.message);
            return;
        }
        alert('User Created!');
    })
});