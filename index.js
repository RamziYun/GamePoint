const body = document.body;

let language__modal = document.getElementById('change_language__modal'),
    change__language = document.getElementById('change__language');

change__language.onclick = function () {
    language__modal.style.display = "block";
};

window.onclick = function (e) {
    if (e.target == language__modal) {
        language__modal.style.display = "none";
    } else if (e.target == teams__modal) {
        teams__modal.style.display = "none";
        isTeam__modal = false;
    } else if (e.target == registration__modal) {
        registration__modal.style.display = "none";
        body.style.overflow = "auto";
    } else if (e.target == login__modal) {
        login__modal.style.display = "none";
        body.style.overflow = "auto";
    } else if (e.target == navbar__menu) {
        navbar__menu.style.display = "none";
        body.style.overflow = "auto";
    }
};


let teams__modal = document.getElementById('teams__modal'),
    teams__button = document.getElementById('teams__button');

teams__button.onclick = function () {
    teams__modal.style.display = "block";
};


let registration__modal = document.getElementById('registration__modal'),
    reg__cross = document.getElementById('reg__cross'),
    reg = document.getElementById('reg'),
    reg__button = document.getElementById('reg__button');

reg.onclick = function () {
    registration__modal.style.display = "block";
    body.style.overflow = "hidden";
};

reg__cross.onclick = function () {
    registration__modal.style.display = "none";
    body.style.overflow = "auto";
};


let login__modal = document.getElementById('login__modal'),
    login__cross = document.getElementById('login__cross'),
    login = document.getElementById('login');

login.onclick = function () {
    login__modal.style.display = "block";
    registration__modal.style.display = "none";
};

login__cross.onclick = function () {
    login__modal.style.display = "none";
    body.style.overflow = "auto";
};

reg__button.onclick = function () {
    registration__modal.style.display = "block";
    login__modal.style.display = "none";
};


let nick = document.getElementById('nick'),
    email = document.getElementById('email'),
    password = document.getElementById('password'),
    age = document.getElementById('age'),
    ready = document.getElementById('ready');

ready.onclick = function () {
    if (15 < nick.value.length || nick.value.length < 8) {
        nick.style.border = "2px solid #800000";
    }
    if (15 < password.value.length || password.value.length < 8) {
        password.style.border = "2px solid #800000";
    }
    if (30 < email.value.length || email.value.length < 16) {
        email.style.border = "2px solid #800000";
    }
    if (age.value < 16 || age.value > 100) {
        age.style.border = "2px solid #800000";
    }
    if ((15 >= nick.value.length && nick.value.length >= 8) && (15 >= password.value.length && password.value.length >= 8) && (35 >= email.value.length && email.value.length >= 12) && (age.value >= 16 && age.value <= 100)) {
        nick.style.border = "none";
        password.style.border = "none";
        email.style.border = "none";
        age.style.border = "1px solid #ff4f00";
        registration__modal.style.display = "none";
    }
};


let login__button = document.getElementById('login__button'),
    login__email = document.getElementById('login__email'),
    login__password = document.getElementById('login__password');

login__button.onclick = function () {
    if (15 < login__password.value.length || login__password.value.length < 8) {
        login__password.style.border = "2px solid #800000";
    }
    if (30 < login__email.value.length || login__email.value.length < 16) {
        login__email.style.border = "2px solid #800000";
    }
    if ((15 >= login__password.value.length && login__password.value.length >= 8) && (35 >= login__email.value.length && login__email.value.length >= 12)) {
        login__password.style.border = "none";
        login__email.style.border = "none";
        login__modal.style.display = "none";
    }
};


let burger = document.getElementById('burger'),
    navbar__menu = document.getElementById('navbar__menu');

burger.onclick = function () {
    navbar__menu.style.display = "block";
    body.style.overflow = "hidden";
};


let recommendations = document.getElementById('recommendations'),
    news = document.getElementById('news'),
    discussed = document.getElementById('discussed'),
    border__bottom = 1;
    recommendations.style.borderBottom = "2px solid #ff4f00";

recommendations.onclick = function () {
    recommendations.style.borderBottom = "2px solid #ff4f00";
    news.style.borderBottom = "none";
    discussed.style.borderBottom = "none";
    border__bottom = 1;
};

news.onclick = function () {
    news.style.borderBottom = "2px solid #ff4f00";
    recommendations.style.borderBottom = "none";
    discussed.style.borderBottom = "none";
    border__bottom = 2;
};

discussed.onclick = function () {
    discussed.style.borderBottom = "2px solid #ff4f00";
    recommendations.style.borderBottom = "none";
    news.style.borderBottom = "none";
    border__bottom = 3;
};