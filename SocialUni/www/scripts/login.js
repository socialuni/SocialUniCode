// Para uma introdução ao modelo em branco, consulte a seguinte documentação:
// http://go.microsoft.com/fwlink/?LinkID=397704
// Para depurar códigos no carregamento de página em dispositivos/emuladores Android ou que simulam o Cordova: inicie o aplicativo, defina os pontos de interrupção 
// e execute "window.location.reload()" no Console do JavaScript.
(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);
    function onDeviceReady() {
        // Manipular eventos de pausa e retomada do Cordova
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        var parentElement = document.getElementById('deviceready');
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

    };

    function onPause() {
    };

    function onResume() {
    };
} )();