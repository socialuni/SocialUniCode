var $MakeSafeIdentifierName(ServiceInstance.Name)$Client;
document.addEventListener("deviceready", function () {
    $MakeSafeIdentifierName(ServiceInstance.Name)$Client = new WindowsAzure.MobileServiceClient(
                    "https://$ServiceInstance.ApplicationUrl$");
});