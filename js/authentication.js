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

//Criar usuario com e-mail/senha
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

// autenticar usuário email/senha
authEmailPassButton.addEventListener('click', function(){
    firebase
        .auth()
        .signInWithEmailAndPassword(emailInput.value, passwordInput.value)
        .then( function(result){
            console.log(result)
            displayName.innerText = 'Bem vindo, '+emailInput.value
            alert('Autenticado ' + emailInput.value)
        })
        .catch(function(error){
            console.error(error.code)
            console.error(error.message)
            alert('Falha ao autenticar, verifique o erro no console')
        })
})

//logoff
logOutButton.addEventListener('click', function(){
    firebase
        .auth()
        .signOut()
        .then( function () {
            displayName.innerText = 'Você não está autenticado'
            alert('Você se deslogou')
        }, function(error){
            console.error(error)
        })
})

//autenticar anonymols
authAnnymouslyButton.addEventListener('click', function(){
    firebase
        .auth()
        .signInAnonymously()
        .then( function () {
            displayName.innerText = 'Bem vindo, desconhecido'
            alert('Autenticado Anonimamemte')
        })
        .catch(function(error){
            console.error(error.code)
            console.error(error.message)
            alert('Falha ao autenticar, verifique o erro no console')
        })
})

//autenticar com GitHub
authGitHubButton.addEventListener('click', function(){
    //Provider
    var provider = new firebase.auth.GithubAuthProvider()
    signIn(provider)
})

//autenticar via google
authGoogleButton.addEventListener('click', function(){
    //Providers
    var provider= new firebase.auth.GoogleAuthProvider()
    signIn(provider)
})

//autenticar com Facebook
authFacebookButton.addEventListener('click', function(){
    //Providers
    var provider= new firebase.auth.FacebookAuthProvider()
    signIn(provider)
})


//autenticar vom Twitter
authTwitterButton.addEventListener('click', function(){
    //Providers
    var provider= new firebase.auth.TwitterAuthProvider()
    signIn(provider)
})


function signIn(provider){
    firebase.auth()
        .signInWithPopup(provider) // na web abre um popup na tela de conexão
        .then(function(result){
            console.log(result)
            var token = result.credential.accessToken // armazenar o token
            displayName.innerText = 'Bem vindo, '+ result.user.displayName
        }).catch(function(error){
            console.log(error)
            alert('Falha na autenticação')
        })
}