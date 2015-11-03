
function createAccount() {
    var $newUsername = $("#new-username").val();
    var $newPassword = $("#new-password").val();
    var $newEmail = $("#new-email").val();

    $.ajax({
        cache: false,
        async: false,
        url: "http://localhost:8080/create-account",
        data: {"username": $newUsername, "password": $newPassword, "email": $newEmail},
        dataType: 'json',
        success: function(result){
            alert("token recieved: " + result);
        },
        error: function(request, textStatus, errorThrown) {
            alert(textStatus);
        },
        complete: function(request, textStatus) { //for additional info
            alert(request.responseText);
            alert(textStatus);
            alert(request.responseJSON.httpResponseHeader);
            window.location.href = request.responseJSON.httpResponseHeader;

        }
    });
}

function login(event) {
    var $name = $("#login-username").val();
    var $password = $("#login-password").val();

    $.ajax({
        cache: false,
        async: false,
        url: "http://localhost:8080/login",
        data: {"username": $name, "password": $password},
        dataType: 'json',
        success: function(result){
            alert("token recieved: " + result);
        },
        error: function(request, textStatus, errorThrown) {
            alert(textStatus);
        },
        complete: function(request, textStatus) { //for additional info
            alert(request.responseText);
            alert(textStatus);
            window.location.href = request.responseJSON.httpResponseHeader;

        }
    });
}
