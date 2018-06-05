function onsubmitbtn(e) {
    e.preventDefault();

    var us = $('#txtUsuario').val();
    var pwd = $('#txtSenha').val();
    ObterToken(us, pwd);

    $.ajax({
        type: "POST",
        url: "",
        data: {
            acao: 'LoginWeb',
            usuario: $("#user").val(),
            senha: $("#password").val()
        },
        async: false,
        dataType: "json",
        success: function (json) {

            if (json.result == true) {
                //redireciona o usuario para pagina
                $("#user").html(json.dados.nome);

                $.mobile.changePage("#index",
                    {
                        transition: "slidefade"
                    });

            } else {
                alert(json.msg);
            }
        },
        error: function (xhr, e, t) {
            console.log(xhr.responseText);
        }
    });
}

function ObterToken(us, pwd) {
    var url = urlUpload.replace("/api/", "/token");
    loginData = "grant_type=password&UserName=" + us + "&Password=" + pwd;

    $.post(url, loginData).success(saveAccessToken);
}


function saveAccessToken(data) {
    tokenType = data.token_type;
    accessToken = data.access_token;
    expireIn = data.expires_in;
}