includeCss('style/header.css');
element = document.createElement('header');

element.innerHTML = `

<div class="container normal">
            <div class="header-top">
                <div class="header-contacts">
                    <a href="#"> <i class="fas fa-location-arrow"></i> Store Location</a>
                    <a href="#"> <i class="far fa-envelope"></i> support@furnihome.com</a>
                    <p><i class="fas fa-phone-alt"></i> (01)-222-777-888</p>
                </div>
                <nav class="header-ControlPanel">
                    <ul class="header-language-ul" id="header-language-ul">
                        <li class="header-language" id="header-language">
                            <img class="header-flag" id="header-flag-main" src="source/icon/gb.png" alt="">
                            <div class="header-language-div" id="header-language-div-main">EN </div>
                            <i class="fas fa-caret-down" id="header-language-caret"></i>

                            <ul class="header-language-list" id="header-language-list">
                                <li id="header-language-EN" value="1">
                                    <img class="header-flag" src="source/icon/gb.png" alt="">
                                    <div class="header-language-div"> EN - English </div>
                                </li>

                                <li value="2" id="header-language-UA">
                                    <img class="header-flag" src="source/icon/ua.png" alt="">
                                    <div class="header-language-div"> UA - Ukrainian </div>
                                </li>

                                <li id="header-language-RU" value="3">
                                    <img class="header-flag" src="source/icon/ru.png" alt="">
                                    <div class="header-language-div"> RU - Russian </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul class="header-currency-ul" id="header-currency-ul">
                        <li class="header-currency" id="header-currency">
                            <div class="header-currency-div" id="header-currency-div">$ - USD </div>
                            <i class="fas fa-caret-down" id="header-currency-caret"></i>
                            <ul class="header-currency-list">
                                <li value="1">$ - USD - US Dollar</li>
                                <li value="2">&#8372; - UAH - Ukrainian hryvnia</li>
                                <li value="3">&#8381; - RUB - Russian ruble</li>
                            </ul>
                        </li>

                    </ul>
                    <ul class="header-account-ul" id="header-account-ul">
                        <li class="header-account">My Account
                            <ul class="header-account-list">
                                <li><a href="#">Shopping Cart</a></li>
                                <li><a href="#">Wishlist</a></li>
                                <li><a href="#">Compare</a></li>
                                <li><a href="#">Track Order</a></li>
                                <li><a href="#">Gift Card</a></li>
                            </ul>
                        </li>
                    </ul>
                    <div class="header-login">
                        <div class="header-login-main" id="header-login-main">Login / Register</div>
                        <div class="header-login-list">
                            <form action="" method="get">
                                <div class="header-login-list-cn">Username</div>
                                <input class="header-login-list-user" type="name" name="name">
                                <div class="header-login-list-cn">Password</div>
                                <input class="header-login-list-pass" type="password" name="password">
                                <div class="header-login-nav">
                                    <div class="header-login-save"><input type="checkbox">Save login</div>
                                    <a class="header-login-forgot" href="#">Forgot password?</a>
                                </div>
                                <input class="header-login-button" type="submit" value="LOGIN">
                                <a class="header-login-new" href="#">Create new account</a>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        <div class="header-line"> </div>
        <div class="container normal">
            <div class="header-bottom">
                <div class="logo"><img src="source/img/logo.png" alt="logo"></div>

                <nav class="navigation">
                    <ul class="navigation-left">
                        <li> <a href="">Demo <i class="fas fa-caret-down"></i></a>
                            <div class="demo">
                                <div class="light-version">
                                    <div>Light Version</div>
                                    <div class="demo-img" id="light"><img src="source/img/version/light.PNG" alt="Light Version"></div>
                                </div>
                                <div class="dark-version">
                                    <div>Dark Version</div>
                                    <div class="demo-img" id="dark"><img src="source/img/version/dark.PNG" alt="Dark Version"></div>
                                </div>
                            </div>
                        </li>
                        <li> <a href="">Home<i class="fas fa-caret-down"></i></a>
                            <ul class="home">
                                <li><a href="index.html">Home version 1</a></li>
                                <li><a href="">Home version 2</a></li>
                                <li><a href="">Home version 3</a></li>
                                <li><a href="">Home version 4</a></li>
                                <li><a href="">Home version 5</a></li>
                                <li><a href="">Home version 6</a></li>
                                <li><a href="">Home version 7</a></li>
                                <li><a href="">Home version 8</a></li>
                                <li><a href="">Home version 9</a></li>
                            </ul>
                        </li>
                        <li> <a href="">Megamenu<i class="fas fa-caret-down"></i></a>
                            <div class="megamenu">
                                <div class="shop-cat">
                                    <div class="shop-title">Shop by Categories</div>
                                    <div>
                                        <ul class="shop-item">
                                            <li><a href="">All Products</a></li>
                                            <li><a href="">Sale Off <div class="sale">Sale</div></a> </li>
                                            <li><a href="">Best Selling</a></li>
                                            <li><a href="">New Products <div class="new">New</div></a></li>
                                            <li><a href="">Hot Products <div class="hot">hot</div></a></li>
                                            <li><a href="">Trending Products <div class="trend">Trend</div></a></li>
                                            <li><a href="">Featured Products</a></li>
                                            <li><a href="">Out Of Stock</a></li>
                                            <li><a href="">Coming Soon Products</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="shop-stat">
                                    <div class="shop-title">Shop by status</div>
                                    <ul class="shop-item">
                                        <li><a href="">All Products</a></li>
                                        <li><a href="">Living Room</a></li>
                                        <li><a href="">Kitchen & Dining Room</a></li>
                                        <li><a href="">Bedroom</a></li>
                                        <li><a href="">Accessories</a></li>
                                        <li><a href="">Bathroom</a></li>
                                        <li><a href="">Office</a></li>
                                        <li><a href="">Lightning</a></li>
                                        <li><a href="">Interiors Desing</a></li>
                                    </ul>
                                </div>
                                <div class="recomm-product">
                                    <div class="shop-title">Recommended Products</div>
                                    <div class="recomm-product-item">
                                        <div class="product-img">
                                            <img src="source/img/room/officecahir.png" alt="featured">
                                        </div>
                                        <div class="product-class"> <a href="">Office</a> </div>
                                        <div class="product-name"> <a href=""> Furniture Product Name</a></div>
                                        <div class="product-rating">
                                            <i class="fas fa-star rating-up"></i>
                                            <i class="fas fa-star rating-up"></i>
                                            <i class="fas fa-star rating-up"></i>
                                            <i class="fas fa-star rating-down"></i>
                                            <i class="fas fa-star rating-down"></i>
                                        </div>
                                        <div class="product-price">
                                            <div class="new-price">$370.00</div>
                                            <div class="old-price">$400.00</div>
                                        </div>
                                        <div class="product-marker">
                                            <div class="sale-marker">Sale</div>
                                            <div class="new-marker">New</div>
                                            <div class="hot-marker">Hot</div>
                                            <div class="trend-marker">Trend</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="shop-prom">
                                    <div class="shop-prom-title">Shop by promotions</div>
                                    <div class="prom-items">
                                        <img src="source/img/room/skyblue.jpg" alt="promotions product">
                                        <div class="prom-name-top">Special offer</div>
                                        <div class="prom-name-bottom">On furniture</div>
                                        <div class="prom-offer">Limited <br> offer <br> 40% off</div>
                                        <div class="prom-goin"><a href="">Shopping now</a></div>

                                    </div>
                                </div>
                            </div>
                        </li>
                        <li> <a href="">Shop<i class="fas fa-caret-down"></i></a>
                            <div class="shop">
                                <div class="catalog-product">
                                    <div class="shop-main-title-left">Catalog products</div>
                                    <div class="catalog-product-main">
                                        <div>
                                            <div class="shop-title">Catalog with sidebar</div>
                                            <ul class="shop-item">
                                                <li><a href="">Catalog List Products + Right Sidebar</a></li>
                                                <li><a href="">Catalog List Products + Left Sidebar</a></li>
                                                <li><a href="">Catalog 2 Products + Left Sidebar</a></li>
                                                <li><a href="">Catalog 2 Products + Right Sidebar</a></li>
                                                <li><a href="">Catalog 3 Products + Left Sidebar</a></li>
                                                <li><a href="">Catalog 3 Products + Right Sidebar</a></li>
                                                <li><a href="">Catalog 4 Products + Left Sidebar</a></li>
                                                <li><a href="">Catalog 4 Products + Right Sidebar</a></li>
                                            </ul>
                                        </div>
                                        <div>
                                            <div class="shop-title">Catalog no sidebar</div>
                                            <ul class="shop-item">
                                                <li><a href="">Catalog 1 Products No Sidebar</a></li>
                                                <li><a href="">Catalog 2 Products No Sidebar</a></li>
                                                <li><a href="">Catalog 3 Products No Sidebar</a></li>
                                                <li><a href="">Catalog 4 Products No Sidebar</a></li>
                                                <li><a href="">Catalog 5 Products No Sidebar</a></li>
                                                <li><a href="">Catalog 6 Products No Sidebar</a></li>
                                                <li><a href="">Catalog List Prodocts No Sidebar</a></li>
                                                <li><a href="">Catalog Slidebar Products</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="single-product">
                                    <div class="shop-main-title-right">Single products</div>
                                    <div class="shop-title">Single Products recommend</div>
                                    <div class="single-product-main">
                                        <div>
                                            <ul class="shop-item">
                                                <li><a href="">Single Product Additional Information</a></li>
                                                <li><a href="">Single Product Extrnal</a></li>
                                                <li><a href="">Single Product Image With Background</a></li>
                                                <li><a href="">Single Product Intro Video</a></li>
                                                <li><a href="">Single Product Large Image Scroll</a></li>
                                                <li><a href="">Single Product Left Sidebar</a></li>
                                                <li><a href="">Single Product Normal Image Scroll</a></li>
                                                <li><a href="">Single Product Out if Stock</a></li>
                                                <li><a href="">Single Product Review</a></li>
                                            </ul>
                                        </div>
                                        <div>
                                            <ul class="shop-item">
                                                <li><a href="">Single Products Right Sidebar</a></li>
                                                <li><a href="">Single Product Slidebar Inside Image</a></li>
                                                <li><a href="">Single Product Slidebar Left Image</a></li>
                                                <li><a href="">Single Product Slidebar Right Image</a></li>
                                                <li><a href="">Single Product Slidebar Under Image</a></li>
                                                <li><a href="">Single Product Standard</a></li>
                                                <li><a href="">Single Product Tag</a></li>
                                                <li><a href="">Single Product Variable</a></li>
                                                <li><a href="">Single Product With Background</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li> <a href="">Pages<i class="fas fa-caret-down"></i></a>
                            <ul class="pages">
                                <li><a href="">About Us 01</a></li>
                                <li><a href="">About US 02</a></li>
                                <li><a href="">Contact Us</a></li>
                                <li><a href="">Login / Register</a></li>
                                <li><a href="">Shopping Cart</a></li>
                                <li><a href="">Wishlist</a></li>
                                <li><a href="">Compare</a></li>
                                <li><a href="">Check Out</a></li>
                                <li><a href="">Order Complete</a></li>
                                <li><a href="404_type1.html">404 Page 01</a></li>
                                <li><a href="404_type2.html">404 Page 02</a></li>
                                <li><a href="">Search Reult</a></li>
                                <li><a href="">FAQ</a></li>
                            </ul>
                        </li>
                        <li> <a href="">Collections<i class="fas fa-caret-down"></i></a>
                            <div class="collection">
                                <div class="collection-main">
                                    <div class="collection-item">
                                        <div class="collection-img">
                                            <div class="collection-fon"></div>
                                            <img src="source/img/room/living_room.jpg" alt="living room">
                                        </div>
                                        <div class="collection-info">
                                            <div class="collection-title">Living room</div>
                                            <div class="collection-subtitle">Furniture 2017</div>
                                            <div class="collection-go">
                                                <a href="">Click to view gallery</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="collection-item">
                                        <div class="collection-img">
                                            <div class="collection-fon"></div>
                                            <img src="source/img/room/bedroom.jpg" alt="bedroom">
                                        </div>
                                        <div class="collection-info">
                                            <div class="collection-title">Bedroom</div>
                                            <div class="collection-subtitle">Furniture 2017</div>
                                            <div class="collection-go">
                                                <a href="">Click to view gallery</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="collection-item">
                                        <div class="collection-img">
                                            <div class="collection-fon"></div>
                                            <img src="source/img/room/bathroom.jpg" alt="bathroom">
                                        </div>
                                        <div class="collection-info">
                                            <div class="collection-title">Bathroom</div>
                                            <div class="collection-subtitle">Furniture 2017</div>
                                            <div class="collection-go">
                                                <a href="">Click to view gallery</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="collection-item">
                                        <div class="collection-img">
                                            <div class="collection-fon"></div>
                                            <img src="source/img/room/kitchen.jpeg" alt="kitchen and dining room">
                                        </div>
                                        <div class="collection-info">
                                            <div class="collection-title">Kitchen & <br> dining room</div>
                                            <div class="collection-subtitle">Furniture 2017</div>
                                            <div class="collection-go">
                                                <a href="">Click to view gallery</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="collection-item">
                                        <div class="collection-img">
                                            <div class="collection-fon"></div>
                                            <img src="source/img/room/accessories.jpg" alt="accessories room">
                                        </div>
                                        <div class="collection-info">
                                            <div class="collection-title">Accessories</div>
                                            <div class="collection-subtitle">Furniture 2017</div>
                                            <div class="collection-go">
                                                <a href="">Click to view gallery</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="collection-bottom">
                                    <div class="collection-bottom-info">You're watching 5 of 10 Furnihome's Collections 2016.
                                    </div>
                                    <div class="collection-switch">
                                        <div class="collection-prev"><i class="fas fa-chevron-left"></i></div>
                                        <div class="collection-next"><i class="fas fa-chevron-right"></i></div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li> <a href="">Blog<i class="fas fa-caret-down"></i></a>
                            <div class="blog">
                                <div>
                                    <ul class="blog-item">
                                        <li><a href="">Blog Grid 2 Post Left Sidebar</a></li>
                                        <li><a href="">Blog Grid 2 Post No Sidebar</a></li>
                                        <li><a href="">Blog Grid 2 Post Right Sidebar</a></li>
                                        <li><a href="">Blog Grid 3 Post Left Sidebar</a></li>
                                        <li><a href="">Blog Grid 3 Post No Sidebar</a></li>
                                        <li><a href="">Blog Grid 3 Post Right Sidebar</a></li>
                                        <li><a href="">Blog Grid 4 Post Left Sidebar</a></li>
                                        <li><a href="">Blog Grid 4 Post No Sidebar</a></li>
                                        <li><a href="">Blog Grid 4 Post Right Sidebar</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <ul class="blog-item">
                                        <li><a href="">Blog List Left Sidebar</a></li>
                                        <li><a href="">Blog List Right Sidebar</a></li>
                                        <li><a href="">Blog Standart Left Sidebar</a></li>
                                        <li><a href="">Blog Standart No Sidebar</a></li>
                                        <li><a href="">Blog Standart Right Sidebar</a></li>
                                        <li><a href="">Blog Post Large Image NO Sidebar 01</a></li>
                                        <li><a href="">Blog Post Large Image NO Sidebar 02</a></li>
                                        <li><a href="">Blog Post Left Sidebar</a></li>
                                        <li><a href="">Blog Post Right Sidebar</a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li> <a href="">Elements<i class="fas fa-caret-down"></i></a>
                            <ul class="elements">
                                <li><a href="">Headers Style</a></li>
                                <li><a href="">Footers Style</a></li>
                                <li><a href="">Banners Style</a></li>
                                <li><a href="">Products Style</a></li>
                                <li><a href="">Buttons Style</a></li>
                                <li><a href="">Mega Menu Style</a></li>
                            </ul>
                        </li>
                    </ul>
                    <ul class="navigation-right">

                        <!-- ---------------------------------- CART ----------------------------- -->

                        <li><a href=""><i class="fas fa-shopping-cart"></i><sup>0</sup></a>
                            <div class="cart">
                                <div class="cart-title">
                                    <div class="cart-info">(3) items in your wishlist.</div>
                                    <div class="cart-sum">$ 1 100 . 00</div>
                                </div>
                                <div class="cart-content">
                                    <div class="cart-item">
                                        <a href=""><img src="source/img/room/office/3.jpg" alt="product"></a>
                                        <div class="cart-item-info">
                                            <div class="product-name"><a href="">Furniture Product Name</a> </div>
                                            <div class="product-price">
                                                <div class="new-price">$370.00</div>
                                                <div class="old-price">$400.00</div>
                                            </div>
                                            <div class="product-qty">
                                                <span>Qty : </span>
                                                <div>1</div>
                                            </div>
                                        </div>
                                        <div class="cart-close"><i class="fas fa-times"></i></div>
                                    </div>
                                    <div class="cart-item">
                                        <a href=""><img src="source/img/room/officecahir.png" alt="product"></a>
                                        <div class="cart-item-info">
                                            <div class="product-name"><a href="">Furniture Product Name</a> </div>
                                            <div class="product-price">
                                                <div class="new-price">$370.00</div>
                                                <div class="old-price">$400.00</div>
                                            </div>
                                            <div class="product-qty">
                                                <span>Qty : </span>
                                                <div>1</div>
                                            </div>
                                        </div>
                                        <div class="cart-close"><i class="fas fa-times"></i></div>
                                    </div>
                                    <div class="cart-item">
                                        <a href=""><img src="source/img/room/light.png" alt="product"></a>
                                        <div class="cart-item-info">
                                            <div class="product-name"><a href="">Furniture Product Name</a> </div>
                                            <div class="product-price">
                                                <div class="new-price">$370.00</div>
                                                <div class="old-price">$400.00</div>
                                            </div>
                                            <div class="product-qty">
                                                <span>Qty : </span>
                                                <div>1</div>
                                            </div>
                                        </div>
                                        <div class="cart-close"><i class="fas fa-times"></i></div>
                                    </div>
                                </div>
                                <div class="cart-payment">
                                    <a class="cart-edit" href="">View and edit cart</a>
                                    <a class="cart-check" href="">go to check out</a>
                                </div>
                            </div>
                        </li>

                        <!-- ---------------------------------- CART END ----------------------------- -->

                        <!-- ---------------------------------- HEART ----------------------------- -->

                        <li><a href=""><i class="fas fa-heart"></i><sup>0</sup></a>
                            <div class="wishlist">
                                <div class="cart-title">
                                    <div class="cart-info">(3) items in your wishlist.</div>
                                </div>
                                <div class="cart-content">
                                    <div class="cart-item">
                                        <a href=""><img src="source/img/room/office/5.jpg" alt="product"></a>
                                        <div class="cart-item-info">
                                            <div class="product-name"><a href="">Furniture Product Name</a> </div>
                                            <div class="product-price">
                                                <div class="new-price">$370.00</div>
                                                <div class="old-price">$400.00</div>
                                            </div>
                                            <div class="product-qty">
                                                <span>Qty : </span>
                                                <div>1</div>
                                            </div>
                                        </div>
                                        <div class="cart-close"><i class="fas fa-times"></i></div>
                                    </div>
                                    <div class="cart-item">
                                        <a href=""><img src="source/img/room/skyblue.jpg" alt="product"></a>
                                        <div class="cart-item-info">
                                            <div class="product-name"><a href="">Furniture Product Name</a> </div>
                                            <div class="product-price">
                                                <div class="new-price">$370.00</div>
                                                <div class="old-price">$400.00</div>
                                            </div>
                                            <div class="product-qty">
                                                <span>Qty : </span>
                                                <div>1</div>
                                            </div>
                                        </div>
                                        <div class="cart-close"><i class="fas fa-times"></i></div>
                                    </div>
                                    <div class="cart-item">
                                        <a href=""><img src="source/img/room/office/7.jpg" alt="product"></a>
                                        <div class="cart-item-info">
                                            <div class="product-name"><a href="">Furniture Product Name</a> </div>
                                            <div class="product-price">
                                                <div class="new-price">$370.00</div>
                                                <div class="old-price">$400.00</div>
                                            </div>
                                            <div class="product-qty">
                                                <span>Qty : </span>
                                                <div>1</div>
                                            </div>
                                        </div>
                                        <div class="cart-close"><i class="fas fa-times"></i></div>
                                    </div>
                                </div>
                                <div class="cart-payment">
                                    <a class="cart-check" href="">View wishlist</a>
                                </div>
                            </div>
                        </li>
                        <!-- ---------------------------------- HERT END ----------------------------- -->

                        <li><a href=""><i class="far fa-clone"></i><sup>0</sup></a>

                        </li>
                        <li class="search-open" id="search-open">
                            <i class="fas fa-search"></i>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <div class="header-line normal"> </div>

        <!-- ----------------------------------SEARCH----------------------------- -->


        <div class="search search-one" id="search-one">
            <div class="container">

                <div class="search-control">
                    <div class="search-enter">
                        <input type="text" name="search" id="search" placeholder="Typing your search keyword and hit enter">
                    </div>
                    <div class="serarch-go">
                        <i class="fas fa-search"></i>
                    </div>
                    <div class="search-close" id="search-close">
                        <i class="fas fa-times"></i>
                    </div>
                </div>

            </div>
            <div class="header-line"> </div>

            <div class="search-content ">
                <div class="container">
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
        </div>



`;


root.insertAdjacentElement('afterbegin', element);