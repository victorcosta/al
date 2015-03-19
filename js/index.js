// var app = {
//     // Application Constructor
//     initialize: function() {
//         this.bindEvents();
//         var ref = window.open(encodeURI('http://www.al.rn.gov.br/portal/app/home'), '_self', 'location=no');
//     },
//     // Bind Event Listeners
//     //
//     // Bind any events that are required on startup. Common events are:
//     // 'load', 'deviceready', 'offline', and 'online'.
//     bindEvents: function() {
//         document.addEventListener('deviceready', this.onDeviceReady, false);
//     },
//     // deviceready Event Handler
//     //
//     // The scope of 'this' is the event. In order to call the 'receivedEvent'
//     // function, we must explicitly call 'app.receivedEvent(...);'
//     onDeviceReady: function() {
//         app.receivedEvent('deviceready');
//     },
//     // Update DOM on a Received Event
//     receivedEvent: function(id) {
//         console.log('Received Event: ' + id);
//     },
//     onOffLine: function(){
//         navigator.notification.vibrate(100);
//         navigator.notification.alert("Você está sem conexão com internet",closeApp,"Alerta",'OK!');
//     },
//     closeApp: function(){
//         if (navigator.app) {
//             navigator.app.exitApp();
//         }else if (navigator.device) {
//             navigator.device.exitApp();
//         }
//     }
// };

function onDeviceReady() {
    this.bindEvents();
    var ref = window.open(encodeURI('http://www.al.rn.gov.br/portal/app/home'), '_self', 'location=no');
    checkConection();
}
function onOffLine() {
    navigator.notification.vibrate(100);
    navigator.notification.alert("Você está sem conexão com internet",closeApp,"Alerta",'OK!');
}
function closeApp(){
    if (navigator.app) {
        navigator.app.exitApp();
    }else if (navigator.device) {
        navigator.device.exitApp();
    }
}
document.addEventListener('deviceready', onDeviceReady, true);
document.addEventListener("offline", onOffLine, false);
