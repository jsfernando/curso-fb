// https://firebase.google.com/docs/storage/web/create-reference?hl=pt-br
// Obtendo os elementos
var uploader = document.getElementById('uploader')
var fileButton = document.getElementById('fileButton')

// ouvir o evento change
fileButton.addEventListener('change', function(e){ //ouvindo a mudança
    //Obter o arquivo                               // e = elemento que ó fileButton
    var file = e.target.files[0] //array de arquivos..., igual 0 está como single

    //Referenciar o Storage
    var storage = firebase.storage();
    //var storageRef = firebase.storage.ref('arquivos/'+ file.name)
    var storageRef = storage.ref();
    var imagesRef = storageRef.child('arquivos');
    var spaceRef = storageRef.child('arquivos/'+ file.name);

    //Enviar o arquivo
    var task = spaceRef.put(file)

    //Atualizar o Progress Bar
    task.on('state_changed',
        function progress(snapshot){
            var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            uploader.value = percentage

        },
        function error(err){
            console.log(err)
        },
        function complete(){
            alert('Envio Completo!!!')
        }
    )
})
