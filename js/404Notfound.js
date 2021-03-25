let element = document.createElement('div');
element.className = 'notfound container';
header = document.querySelector('header');
console.log(str3[0]);

let notfoundTitle = "";
if (str3[0] == '404_type1') {
    notfoundTitle = `<img class='notfound-img' src="source/img/notfound/notfound1.png" alt="404">`;
} else if (str3[0] == '404_type2') {
    notfoundTitle = `<div class="notfound-alert">404</div>`;
}


includeCss('style/404_type1.css');
element.innerHTML = `
${notfoundTitle}

<div class="notfound-title">PAGE NOT FOUND</div>
<div class="notfound-subtitle">We can’t seem to find what you’re looking for</div>
<a href="index.html" class="notfound-btn">back to home page</a>
`;





header.insertAdjacentElement('afterend', element);