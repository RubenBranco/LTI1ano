"use strict";

function logout() {
    localStorage.removeItem('currentUser');
    document.getElementById('logout').style.visibility = 'hidden';
    window.location.reload();
}

function openTabz(tabzNameToShow, tabzNameToHide) {
    $(tabzNameToShow).css("display","block");
    $(tabzNameToHide).css("display","none");
}

function main(){
    if (localStorage.getItem('currentUser') !== null) {
        document.getElementById('logout').style.visibility = 'visible';
        document.getElementById('logout').addEventListener('click', logout);
        document.getElementById('loginOrUser').innerHTML = 'Profile';
        document.getElementById('loginOrUser').href = './UserPage.html'
    }
    else {
        document.getElementById('loginOrUser').innerHTML = 'Login';
        document.getElementById('loginOrUser').href = './login.html'
    }
}



document.addEventListener('DOMContentLoaded', function(event){main()});