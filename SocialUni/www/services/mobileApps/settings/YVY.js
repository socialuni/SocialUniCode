debugger

var YVYClient;
document.addEventListener("deviceready", function () {
    YVYClient = new WindowsAzure.MobileServiceClient(
                    "https://yvy.azurewebsites.net");
});