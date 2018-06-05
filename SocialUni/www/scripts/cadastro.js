// Para uma introdução ao modelo em branco, consulte a seguinte documentação:
// http://go.microsoft.com/fwlink/?LinkID=397704
// Para depurar códigos no carregamento de página em dispositivos/emuladores Android ou que simulam o Cordova: inicie o aplicativo, defina os pontos de interrupção 
// e execute "window.location.reload()" no Console do JavaScript.

var YVYClient = new WindowsAzure.MobileServiceClient("https://yvy.azurewebsites.net");

(function () {
    "use strict";

    debugger
    
    function onPause() {
        // TODO: este aplicativo foi suspenso. Salve o estado do aplicativo aqui.
    };

    function onResume() {
        // TODO: este aplicativo foi reativado. Restaure o estado do aplicativo aqui.
    };
})();
function onclickProximo() {

    //var reg = {
    //    nome: nome.value,
    //    email: email.value,
    //    senha: senha.value,
    //    sexo: sexo.value,
    //    CPF: cpf.value,
    //    DT_NASCIMENTO: dtNascimento.value,
    //    TELEFONE: telefone.value
    //};

    //table
    //    .insert(newItem)
    //    .done(function (insertedItem) {
    //        var id = insertedItem.id;
    //    }, failure);
    debugger;
    var item = { test: 'Item 1', complete: false };
    YVYClient.getTable('TodoItem').insert(item);
    
    //window.location.href = 'preferencias.html';
};