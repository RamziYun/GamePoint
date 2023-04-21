const body = document.body;

let language__modal = document.getElementById('change_language__modal'),
    change__language = document.getElementById('change__language');

change__language.onclick = function () {
    language__modal.style.display = "block";
};




let teams__modal = document.getElementById('teams__modal'),
    teams__button = document.getElementById('teams__button');

teams__button.onclick = function () {
    teams__modal.style.display = "block";
};


let registration__modal = document.getElementById('registration__modal'),
    reg__cross = document.getElementById('reg__cross'),
    reg = document.getElementById('reg'),
    reg__button = document.getElementById('reg__button'),
    reg__login = document.getElementById('reg__login');

reg.onclick = function () {
    registration__modal.style.display = "block";
    body.style.overflow = "hidden";
};

reg__cross.onclick = function () {
    registration__modal.style.display = "none";
    body.style.overflow = "auto";
};

reg__login.onclick = function () {
    login__modal.style.display = "block";
    registration__modal.style.display = "none";
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
        nick.style.border = "1px solid #bd0000";
    }
    if (15 < password.value.length || password.value.length < 8) {
        password.style.border = "1px solid #bd0000";
    }
    if (30 < email.value.length || email.value.length < 16) {
        email.style.border = "1px solid #bd0000";
    }
    if (age.value < 16 || age.value > 100) {
        age.style.border = "1px solid #bd0000";
    }
    if ((15 >= nick.value.length && nick.value.length >= 8) && (15 >= password.value.length && password.value.length >= 8) && (35 >= email.value.length && email.value.length >= 12) && (age.value >= 16 && age.value <= 100)) {
        nick.style.border = "none";
        password.style.border = "none";
        email.style.border = "none";
        age.style.border = "1px solid #bd0000";
        registration__modal.style.display = "none";
    }
};


let login__button = document.getElementById('login__button'),
    login__email = document.getElementById('login__email'),
    login__password = document.getElementById('login__password');

login__button.onclick = function () {
    if (15 < login__password.value.length || login__password.value.length < 8) {
        login__password.style.border = "1px solid #bd0000";
    }
    if (30 < login__email.value.length || login__email.value.length < 16) {
        login__email.style.border = "1px solid #bd0000";
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

let reg_log__modal = document.getElementById('reg_login__modal'),
    account__button = document.getElementById('account__button'),
    menu__account = document.getElementById('menu__account'),
    menu__cross = document.getElementById('menu__cross'),
    reg_login__later = document.getElementById('reg_login__later');

account__button.onclick = function () {
    reg_log__modal.style.display = "block";
};

menu__account.onclick = function () {
    reg_log__modal.style.display = "block";
};

menu__cross.onclick = function () {
    navbar__menu.style.display = "none";
};

reg_login__later.onclick = function () {
    reg_log__modal.style.display = "none";
};

let category = document.getElementById('category'),
    category__modal = document.getElementById('category__modal'),
    category__lists = document.getElementById('category__lists');

category.onclick = function () {
    category__modal.style.display = "block";
    category__lists.style.display = "block";

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
    } else if (e.target == reg_log__modal) {
        reg_log__modal.style.display = "none";
    } else if (e.target == category__modal) {
        category__modal.style.display = "none";
        category__lists.style.display = "none";
    }
};


let scroll_up = document.getElementById('scroll_up');

scroll_up.onclick = function (e) {
    e.preventDefault();
    scroll({ top: 0, behavior: "smooth" });
};


let banner1 = document.getElementById("switch1"),
    banner2 = document.getElementById("switch2"),
    banner3 = document.getElementById("switch3"),
    banner4 = document.getElementById("switch4"),
    banner5 = document.getElementById("switch5"),
    count = 0,
    banners = {
        0: banner1,
        1: banner2,
        2: banner3,
        3: banner4,
        4: banner5,
    };

setInterval(() => {
    if (banner1.checked == true) {
        count = 0;
    } else if (banner2.checked == true) {
        count = 1;
    } else if (banner3.checked == true) {
        count = 2;
    } else if (banner4.checked == true) {
        count = 3;
    } else if (banner5.checked == true) {
        count = 4;
    }
    if(count < 4) {
        count = count + 1;
        banners[count].checked = true;
    } else {
        banners[0].checked = true;
        count = count - 4;
    }
}, 5000);