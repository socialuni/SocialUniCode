    function onsubmitbtn(e) {
        e.preventDefault();

        $.ajax({
            type: "POST",
            url: "procLogin.php",
            data: {
                acao: 'LoginWeb',
                usuario: $("#user").val(),
                senha: $("#password").val()
            },
            async: false,
            dataType: "json",
            success: function(json) {

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
            error: function(xhr, e, t) {
                console.log(xhr.responseText);
            }
        });
    }

