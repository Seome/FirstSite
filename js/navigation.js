/************     CHANGE LANGUAGE   *************/


var language_ul = document.getElementById('header-language-ul');
var language_class = document.getElementsByClassName('header-language');
var language = document.getElementById('header-language');
var language_list = document.getElementsByClassName('header-language-list');
var language_list_id = document.getElementById('header-language-list');
var language_caret = document.getElementById('header-language-caret');
var flag_main = document.getElementById('header-flag-main');
var language_div_main = document.getElementById('header-language-div-main');


language_ul.onclick = function(event) {
    if (language_list[0].style.display == "block") {
        language_list[0].style.display = "none";
        language_ul.classList.remove('header-language-ul1');
        language_ul.classList.add('header-language-ul');
        language_caret.classList.remove('fa-caret-up');
        language_caret.classList.add('fa-caret-down');

    } else {
        language_list[0].style.display = "block";
        language_ul.classList.remove('header-language-ul');
        language_ul.classList.add('header-language-ul1');
        language_caret.classList.remove('fa-caret-down');
        language_caret.classList.add('fa-caret-up');

    }

    switch (event.path[1].value || event.path[0].value) {
        case 1:
            flag_main.src = "source/icon/gb.png";
            language_div_main.innerHTML = "EN";
            break;

        case 2:
            flag_main.src = "source/icon/ua.png";
            language_div_main.innerHTML = "UA";
            break;

        case 3:
            flag_main.src = "source/icon/ru.png";
            language_div_main.innerHTML = "RU";
            break;
    }
}




/************     CHANGE CURRENCY   *************/



var currency_ul = document.getElementById('header-currency-ul');
var currency_list = document.getElementsByClassName('header-currency-list');
var currency_class = document.getElementsByClassName('header-currency');
var currency_caret = document.getElementById('header-currency-caret');
var currency_div = document.getElementById('header-currency-div');

currency_ul.onclick = function(event) {
    if (currency_list[0].style.display == "block") {
        currency_list[0].style.display = "none";
        currency_ul.classList.remove('header-currency-ul1');
        currency_ul.classList.add('header-currency-ul');
        currency_caret.classList.remove('fa-caret-up');
        currency_caret.classList.add('fa-caret-down');

    } else {
        currency_list[0].style.display = "block";
        currency_ul.classList.remove('header-currency-ul');
        currency_ul.classList.add('header-currency-ul1');
        currency_caret.classList.remove('fa-caret-down');
        currency_caret.classList.add('fa-caret-up');

    }

    switch (event.path[0].value) {
        case 1:
            currency_div.innerHTML = "$ - USD";
            break;

        case 2:
            currency_div.innerHTML = "&#8372; - UAH";
            break;

        case 3:
            currency_div.innerHTML = "&#8381; - RUB";
            break;
    }
}



/************     ON/OFF CONTROL PANEL ACCOUNT   *************/


var account_ul = document.getElementById('header-account-ul');
var account_list = document.getElementsByClassName('header-account-list');
var account_class = document.getElementsByClassName('header-account');

account_ul.onclick = function() {

    if (account_list[0].style.display == "block") {
        account_list[0].style.display = "none";
        account_ul.classList.remove('header-account-ul1');
        account_ul.classList.add('header-account-ul');


    } else {
        account_list[0].style.display = "block";
        account_ul.classList.remove('header-account-ul');
        account_ul.classList.add('header-account-ul1');
    }
}



/************     ON/OFF LOGIN PANEL    *************/


var header_list = document.getElementsByClassName('header-login-list');
var header_main = document.getElementById('header-login-main');


header_main.onclick = function() {

    if (header_list[0].style.display == "block") {
        header_list[0].style.display = "none";
        header_main.classList.remove('header-login-main-open');


    } else {
        header_list[0].style.display = "block";
        header_main.classList.add('header-login-main-open');
    }

}


/************     ON/OFF SEARCH    *************/
var search_open = document.getElementById('search-open');

var dark_bg = document.getElementsByClassName('dark-bg');
var search_close = document.getElementById('search-close');
var search_one = document.getElementsByClassName('search-one');

// var dark_bg = document.getElementsByClassName('dark-bg-two');
// var search_close = document.getElementById('search-close-two');
// var search_one = document.getElementsByClassName('search-two');

search_open.onclick = function() {

    if (search_one[0].style.display == "block") {
        search_one[0].style.display = "none";
    } else {
        search_one[0].style.display = "block";
    }
    if (dark_bg[0].style.display == "block") {
        dark_bg[0].style.display = "none";
    } else {
        dark_bg[0].style.display = "block";
    }

}
search_close.onclick = function() {

    if (search_one[0].style.display == "block") {
        search_one[0].style.display = "none";
    } else {
        search_one[0].style.display = "block";
    }
    if (dark_bg[0].style.display == "block") {
        dark_bg[0].style.display = "none";
    } else {
        dark_bg[0].style.display = "block";
    }

}




/************************************** DARK AND LIGHT *************************************/
light = document.getElementById('light'),
    dark = document.getElementById('dark'),
    head = document.querySelector('header'),
    footer = document.querySelector('footer'),
    headerSmall = document.querySelector('#headerSmall');

dark.onclick = function() {
    head.className = "dark";
    footer.className = "dark";
    headerSmall.classList.add("dark");
}
light.onclick = function() {
    head.className = "";
    footer.className = "";
    headerSmall.classList.remove("dark");
}


/*************************************** BUrger Header *******************************/