/**
 * Created by renee on 2015-10-27.
 */
function getData(event) {
    var $name = $("#new-username").val();
    var $password = $("#new-password").val();

    $.ajax({
        cache: false,
        async: false,
        url: "http://localhost:8080/login",
        data: {"username": $name, "password": $password},
        dataType: 'json',
        success: function(result){
            alert("token recieved: " + result);
            $('.account-name').append('<p> Name: ' + result.name + '</p>');
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