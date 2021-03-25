let str = window.location.href;
let str2 = str.split('/');
let str3 = str2[str2.length - 1].split('.');



window.onload = funOnload;

function getCookies() {
    let a = 1;
    let b = 1;
    let c = 1;
    return [{ 'header': a }, b, c];
}


function funOnload() {

    if (str3[0] == 'index') {
        include("js/Header.js");
        include("js/ModalBlocks.js");
        include("js/SmallVersion.js");
        include("js/Slider.js");
        include("js/Banner.js");
        include("js/Content.js");
        include("js/Product.js");
        include("js/Reviews.js");
        include("js/News.js");
        include("js/Footer.js");
        include("js/Promotion.js");
        include("js/navigation.js");
    } else if (str3[0] == '404_type1' || str3[0] == '404_type2') {
        include("js/Header.js");
        include("js/404Notfound.js");
        include("js/ModalBlocks.js");
        include("js/SmallVersion.js");
        include("js/FooterSecondType.js");
        // include("js/navigation.js");
    }








}

function include(url) {
    var script = document.createElement('script');
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
}


function includeCss(url) {
    var script = document.createElement('link');
    script.rel = "stylesheet";
    script.href = url;
    document.getElementsByTagName('head')[0].appendChild(script);
}

// let element = document.createElement('div');
// element.id = 'newElement';
// let header = document.querySelector('header');
// header.insertAdjacentElement('afterend', element);