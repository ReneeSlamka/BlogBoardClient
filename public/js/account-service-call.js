
function createAccount() {
    var $newUsername = $("#new-username").val();
    var $newPassword = $("#new-password").val();
    var $newEmail = $("#new-email").val();

    $.ajax({
        type: 'POST',
        cache: false,
        async: false,
        url: 'http://localhost:8080/account',
        data: {"username": $newUsername, "password": $newPassword, "email": $newEmail},
        dataType: 'json',
        error: function(request, textStatus, errorThrown) {
            alert(textStatus);
        },
        complete: function(request, textStatus) { //for additional info
            alert(request.responseText);
            window.location.href = request.responseJSON.httpResponseHeader;

        }
    });
}

function login(event) {
    var $name = $("#login-username").val();
    var $password = $("#login-password").val();

    $.ajax({
        type: 'GET',
        cache: false,
        async: false,
        url: 'http://localhost:8080/account',
        data: {"username": $name, "password": $password},
        dataType: 'json',
        error: function(request, textStatus, errorThrown) {
            alert(textStatus);
        },
        complete: function(request, textStatus) { //for additional info
            alert(request.responseText);
            if (request.responseJSON.sessionId != null) {
                createSessionCookie(request.responseJSON.sessionId, 60);
            }
            var headers = request.getAllResponseHeaders();
            var url = request.getResponseHeader("Location");
            window.location.href = url;

        }
    });
}

function createSessionCookie(sessionId, maxAge) {
    var sessionInfo = {
        sessionId: sessionId
    };

    var sessionInfoJSON = JSON.stringify(sessionInfo);
    document.cookie = "blogBoardCookie=" + sessionInfoJSON + ";max-age="+ maxAge;
}

alert(navigator.cookieEnabled);
alert(getCookieField("blogBoardCookie"));
alert(document.cookie);

function getCookieField(field) {
    var field = field + "=";
    var cookieFields = document.cookie.split(';');

    for(var i=0; i < cookieFields.length; i++) {
        var c = cookieFields[i];
        //TODO alter check for empty cookies?
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(field) == 0) {
            return c.substring(field.length, c.length);
        }
    }
    return "";
}
