modalBlocks = document.createElement('div');
modalBlocks.id = 'modalBlocks';
header = document.querySelector('header');
modalBlocks.innerHTML = `
<div class="dark-bg"></div>

        <!-- ----------------------------------SEARCH  TYPE  TWO----------------------------- -->

        <div class="dark-bg-two"></div>
        <div class="search-two" id="search-two">
            <div class="container search-type-two">

                <div class="search-control">
                    <div class="search-enter">
                        <input type="text" name="search" id="search" placeholder="Typing your search keyword and hit enter">
                    </div>
                    <div class="serarch-go">
                        <i class="fas fa-search"></i>
                    </div>
                    <div class="search-close-two" id="search-close-two">
                        <i class="fas fa-times"></i>
                    </div>
                </div>

            </div>
            <div class="header-line"> </div>

            <div class="search-content ">
                <div class="container search-type-two">
                    <div class="cart-title search-title-two">
                        <div class="cart-info search-info-mod">(3) items in your wishlist,
                            <a class="search-pages-go" href=""> go to Search Results Page here.</a>
                        </div>

                    </div>
                </div>
                <div class="cart-content">
                    <div class="search-item">
                        <div class="cart-item search-mod-two">
                            <a href=""><img src="source/img/room/office/7.jpg" alt="product"></a>
                            <div class="cart-item-info search-info">
                                <div class="product-name"><a href="">Furniture Product Name</a> </div>
                                <div class="product-price">
                                    <div class="new-price">$370.00</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="search-item ">
                        <div class="cart-item search-mod-two">
                            <a href=""><img src="source/img/room/bed2.png" alt="product"></a>
                            <div class="cart-item-info search-info">
                                <div class="product-name"><a href="">Furniture Product Name</a> </div>
                                <div class="product-price">
                                    <div class="new-price">$370.00</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="search-item">
                        <div class="cart-item search-mod-two">
                            <a href=""><img src="source/img/room/office/2.jpg" alt="product"></a>
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


        <!-- ----------------------------------SEARCH  TYPE TWO END----------------------------- -->
`;

header.insertAdjacentElement('afterend', modalBlocks);