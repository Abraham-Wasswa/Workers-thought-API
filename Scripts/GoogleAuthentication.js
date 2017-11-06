//<reference path="jquery-1.10.2.min.js" />

function getAccessToken() {
    if (location.hash) {
        if (location.hash.split('access_token=')) {
            var accessToken = location.hash.split('access_token=')[1].split('&')[0];
            if (accessToken) {
                isUserRegistered(accessToken);
            }
        }
    }
}

function isUserRegistered(accessToken) {
    $.ajax({
        url: '/api/Account/UserInfo',
        methord: 'GET',
        headers: {
            'content-type' : 'application/json',
            'Authorization' : 'Bearer ' + accessToken
        },
        success: function (response) {
            if (response.HasRegistered) {
                localStorage.setItem('accessToken', accessToken);
                localStorage.setItem('userName', response.Email);
                window.location.href = "Data.html";
            }
            else {
                signupExternalUser(accessToken, response);
            }
        }
    });
}

function signupExternalUser(accessToken, provider) {
    $.ajax({
        url: '/api/Account/RegisterExternal',
        methord: 'POST',
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + accessToken
        },
        success: function () {
            window.location.href = "/api/Account/ExternalLogin?provider=" + provider + "& response_type=token & client_id=self & redirect_uri=http % 3A% 2F% 2Flocalhost% 3A50311% 2FLogin.html & state=w2APwazPVjAUFv4s - bb9IXrOnPC6cn3uWJ16rKNE4yk1";
        }
    });
}