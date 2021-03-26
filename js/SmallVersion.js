smallVersion = document.createElement('div');
smallVersion.id = 'smallVersion';
header = document.querySelector('header');

smallVersion.innerHTML = `
<!------------------------------------ SMALL-VERSION ----------------------------->
    <div id="headerSmall" class="container header-small">
        <div class="logo"><img src="source/img/logo.png" alt="logo"></div>
        <div class="navigation-small">
            <button id="smallSearch"><i class="fas fa-search"></i></button>
            <button id="smallCart"><a href=""><i class="fas fa-shopping-cart"></a></i></button>
            <button id="smallBars"><i class="fas fa-bars"></i></button>
        </div>
    </div>
    <div id="burgerMenu" class="burger-menu">
        <div id="burgerClose" class="burger-close"><i class="fas fa-times"></i></div>
        <ul class="burger-nav">
            <li> <a class="burger-login" href="">Login/Register</a> </li>
            <li><a href="">Home</a></li>
            <li><a href="">Demo</a></li>
            <li><a href="">Shop</a></li>
            <li><a href="">Pages</a></li>
            <li><a href="">Blog</a></li>
            <li>
                <a id="burgerLanguage" href="">Language <i class="fas fa-chevron-right"></i></a>
                <ul id="choseLanguage" class="burger-podmenu">
                    <li><a id="closeLanguage" href=""><i class="fas fa-chevron-left"></i> Change language </a></li>
                    <li><a href="">English</a></li>
                    <li><a href=""> Russian</a></li>
                    <li><a href=""> Ukrainian</a></li>
                </ul>
            </li>
            <li>
                <a id="burgerCurrency" href="">Currency  <i class="fas fa-chevron-right"></i></a>
                <ul id="choseCurrency" class="burger-podmenu">
                    <li><a id="closeCurrency" href=""><i class="fas fa-chevron-left"></i> Currency </a></li>
                    <li><a href="">$ - USD</a> </li>
                    <li><a href=""> &#8372; - UAH</a> </li>
                    <li><a href="">&#8381; - RUB</a> </li>
                </ul>
            </li>

        </ul>
    </div>
    <div id='smallSearchContent' class="search-content  small">
        <div class="search-control">
            <div class="search-enter">
                <input type="text" name="search" id="search" placeholder="Typing your search keyword and hit enter">
            </div>
            <div class="serarch-go">
                <i class="fas fa-search"></i>
            </div>

            <div class="cart-title search-title">
                <div class="cart-info search-info-mod">(3) items in your wishlist,
                    <a class="search-pages-go" href=""> go to Search Results Page here.</a>
                </div>

            </div>
        </div>
        <div class="cart-content">
            <div class="search-item">
                <div class="cart-item search-mod">
                    <a href=""><img src="source/img/room/bathroom/2.jpg" alt="product"></a>
                    <div class="cart-item-info search-info">
                        <div class="product-name"><a href="">Furniture Product Name</a> </div>
                        <div class="product-price">
                            <div class="new-price">$370.00</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="search-item">
                <div class="cart-item search-mod">
                    <a href=""><img src="source/img/room/bathroom/2.jpg" alt="product"></a>
                    <div class="cart-item-info search-info">
                        <div class="product-name"><a href="">Furniture Product Name</a> </div>
                        <div class="product-price">
                            <div class="new-price">$370.00</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="search-item">
                <div class="cart-item search-mod">
                    <a href=""><img src="source/img/room/bathroom/2.jpg" alt="product"></a>
                    <div class="cart-item-info search-info">
                        <div class="product-name"><a href="">Furniture Product Name</a> </div>
                        <div class="product-price">
                            <div class="new-price">$370.00</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="search-item ">
                <div class="cart-item search-mod">
                    <a href=""><img src="source/img/room/office/2.jpg" alt="product"></a>
                    <div class="cart-item-info search-info">
                        <div class="product-name"><a href="">Furniture Product Name</a> </div>
                        <div class="product-price">
                            <div class="new-price">$370.00</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="search-item">
                <div class="cart-item search-mod">
                    <a href=""><img src="source/img/room/office/7.jpg" alt="product"></a>
                    <div class="cart-item-info search-info">
                        <div class="product-name"><a href="">Furniture Product Name</a> </div>
                        <div class="product-price">
                            <div class="new-price">$370.00</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!------------------------------------ SMALL-VERSION Header end ----------------------------->
`;

header.insertAdjacentElement('afterend', smallVersion);
new OpenMenuOut('#smallSearch', '#smallSearchContent', 'openBlockY').OpenMenuMain();
new OpenMenuOut('#smallBars', '#burgerMenu', 'openBlockX').OpenMenuMain();
new OpenMenuOut('#burgerClose', '#burgerMenu', 'openBlockX').OpenMenuMain();
new OpenMenuOut('#burgerLanguage', '#choseLanguage', 'openBlockX').OpenMenu();
new OpenMenuOut('#closeLanguage', '#choseLanguage', 'openBlockX').OpenMenu();
new OpenMenuOut('#burgerCurrency', '#choseCurrency', 'openBlockX').OpenMenu();
new OpenMenuOut('#closeCurrency', '#choseCurrency', 'openBlockX').OpenMenu();