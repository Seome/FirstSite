slider = document.createElement('div');
slider.id = "slider";

includeCss('style/slider.css');

slider.innerHTML = `
<div class="slider-one">
<div class="slider-prew"><i class="fas fa-chevron-left"></i></div>
<div class="slider-next"><i class="fas fa-chevron-right"></i></div>
<div class="slider-sellect">
    <ul>
        <li class="sellect-off"></li>
        <li class="sellect-on"></li>
        <li class="sellect-off"></li>
    </ul>
</div>
<div class="slider-one-content">
    <div class="collection-fon"></div>
    <img src="source/img/room/living_room_Full.jpg" alt="living room">
</div>
<div class="slider-info">
    <div class="slider-info-main">
        <div class="slider-title">
            Living room Collections
        </div>
        <div class="slider-subtitle">
            We'll make your living room and your house more comfortable.
        </div>
        <div class="slider-button">
            <div class="slider-view">
                <a href="">View collections</a>
            </div>
            <div class="slider-shop">
                <a href="">Shopping now</a>
            </div>

        </div>
    </div>
</div>
</div>
`;

rootLastElemet(slider);