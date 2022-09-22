let form = document.querySelector('#protected');
let button = document.querySelector('#accept');
let password = document.querySelector('#password');
let enterPass = document.querySelector('#enter-pass');
form.style.display = 'none';

button.addEventListener('click', function() {
    if(password.value == '7LABA_ETOU_MYLTUBCELEHHOU') {
        form.style.display = 'flex';
        enterPass.style.display = 'none';
    }
});

function sendWebHook() {
    let link = document.querySelector('#link').value;
    let username = document.querySelector('#username').value;
    let content = document.querySelector('#content').value;
    let avatar = document.querySelector('#avatar').value;

    if (link == null || link == "", content == null || content == "") {
        alert("Пожалуйста, заполните все поля с символом *!");
    }
    else {
        $.post(link, {
            "content": content,
            "username": username,
            "avatar_url": avatar
        });
    }
}

document.querySelector('#content').addEventListener('keypress', function(e) {
    if(e.which == 13) {
        sendWebHook();
    }
});
document.querySelector('#send').addEventListener('click', sendWebHook);