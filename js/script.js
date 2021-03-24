// let blocked = document.createElement('div');
// blocked.className = 'bloked';

// document.body.append(blocked);

window.onload = funOnload;

function getCookies() {
    let a = 1;
    let b = 1;
    let c = 1;
    return [{ 'header': a }, b, c];
}


function funOnload() {
    // if (getCookies()[0]['header'] == 1) {
    //     include("js/Header.js");
    // }

    // include("js/ModalBlocks.js");
    // include("js/SmallVersion.js");
    // include("js/Slider.js");
    // include("js/Banner.js");
    // include("js/Content.js");
    // include("js/Product.js");
    // include("js/Reviews.js");
    // include("js/News.js");
    // include("js/Promotion.js");
    include("js/Footer.js");



    // include("js/navigation.js");
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


// setTimeout(function() {
//     window.scrollTo(0, 0);
// }, 100);