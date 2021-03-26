let str = window.location.href;
let str2 = str.split('/');
let str3 = str2[str2.length - 1].split('.');
let root = document.getElementById('root');

function namePages(name) {
    el = document.createElement('div');
    el.className = 'name_pages-block';
    el.innerHTML = `
    <div class="name_pages-title">${name}</div>
        <div class="name_pages-away"><a href="index.html">Home <i class="fas fa-chevron-right"></i></a> </i> ${name}</div>
    `;
    return el;
}

function rootLastElemet(el) {
    rootLast = document.querySelectorAll('#root>div');
    // return rootLast[rootLast.length - 1];
    rootLast[rootLast.length - 1].insertAdjacentElement('afterend', el);
}


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
        include("js/Slider.js")
        include("js/Banner.js");
        include("js/Brands.js");
        include("js/Product.js");
        // include("js/Reviews.js");
        // include("js/News.js");
        // include("js/Promotion.js");
        // include("js/Footer.js");

        include("js/FooterSecondType.js");
        // include("js/navigation.js");
    } else if (str3[0] == '404_type1' || str3[0] == '404_type2') {
        include("js/Header.js");
        include("js/SmallVersion.js");
        include("js/ModalBlocks.js");
        include("js/404Notfound.js");
        include("js/FooterSecondType.js");
        // include("js/navigation.js");
    }


}




function include(url) {
    elem = document.createElement('script');
    elem.src = url;
    document.getElementsByTagName('head')[0].appendChild(elem);
}


function includeCss(url) {
    var script = document.createElement('link');
    script.rel = "stylesheet";
    script.href = url;
    document.getElementsByTagName('head')[0].appendChild(script);
}

setTimeout(function() {
    document.getElementById('load').style.display = 'none';
}, 500);

class OpenMenuOut {
    constructor(parent, open, classOpen) {
        this.parent = parent;
        this.open = open;
        this.classOpen = classOpen;
        this.firstEl = document.querySelector(this.parent);
        this.thirdEl = document.querySelector(this.open);
    }
    OpenMenu() {
        this.firstEl.addEventListener('click', { handleEvent: this.Open, index: this.thirdEl, indexClass: this.classOpen });
    }
    Open(e) {
        e.preventDefault();
        console.log(this.index);
        this.index.classList.toggle(this.indexClass);
    }

    OpenMenuMain() {
        this.firstEl.addEventListener('click', { handleEvent: this.blockBody, index: this.thirdEl, indexClass: this.classOpen });
    }
    blockBody(e) {
        e.preventDefault();
        this.index.classList.toggle(this.indexClass);
        document.body.classList.toggle('stopOverflow');
    }
}