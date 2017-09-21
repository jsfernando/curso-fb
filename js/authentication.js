//Buttons
var authEmailPassButton = document.getElementById('authEmailPassButton');
var authFacebookButton = document.getElementById('authFacebookButton');
var authTwitterButton = document.getElementById('authTwitterButton');
var authGoogleButton = document.getElementById('authGoogleButton');
var authGitHubButton = document.getElementById('authGitHubButton');
var authAnnymouslyButton = document.getElementById('authAnnymouslyButton');
var createUserButton = document.getElementById('createUserButton');
var logOutButton = document.getElementById('logOutButton');

//Inputs
var emailInput = document.getElementById('emailInput');
var passwordInput = document.getElementById('passwordInput');

//Display
var displayName = document.getElementById('displayName');

createUserButton.addEventListener('click', function(){
    firebase
        .auth()
        .createUserWithEmailAndPassword(emailInput.value, passwordInput.value) //Promisse ... vai ser executado e quando estiver ponto chama uma das 2 funções abaixo...
        .then( function() {
            alert('Bem Vindo '+emailInput.value)
        })
        .catch( function(error){
            console.error(error.code)
            console.error(error.message)
            alert('Falha ao cadastrar, verifique o erro no console')
        })
})