const juegosDestacados = [
    {
        title: 'Grand Theft Auto V',
        mainImage: 'images/juegos_destacados/gta_main.jpg',
        firstImage: 'images/juegos_destacados/gta_1.jpg',
        secondImage: 'images/juegos_destacados/gta_2.jpg',
        thirdImage: 'images/juegos_destacados/gta_3.jpg',
        fourthImage: 'images/juegos_destacados/gta_4.jpg',
        status: 'Ya disponible',
        tags: 'Lo mejor de Rockstar',
        price: 'Mex$ 281.64'
    },
    {
        title: 'Red Dead Redemption 2',
        mainImage: 'images/juegos_destacados/red_main.jpg',
        firstImage: 'images/juegos_destacados/red_1.jpg',
        secondImage: 'images/juegos_destacados/red_2.jpg',
        thirdImage: 'images/juegos_destacados/red_3.jpg',
        fourthImage: 'images/juegos_destacados/red_4.jpg',
        status: 'Ya disponible',
        tags: 'Lo más vendido',
        price: 'Mex$ 428.67'
    },
    {
        title: 'ELDEN RING',
        mainImage: 'images/juegos_destacados/elden_main.jpg',
        firstImage: 'images/juegos_destacados/elden_1.jpg',
        secondImage: 'images/juegos_destacados/elden_2.jpg',
        thirdImage: 'images/juegos_destacados/elden_3.jpg',
        fourthImage: 'images/juegos_destacados/elden_4.jpg',
        status: 'Ya disponible',
        tags: 'Lo más esperado',
        price: 'Mex$ 819.00'
    },
    {
        title: 'EA SPORTS FC 2025',
        mainImage: 'images/juegos_destacados/fifa_main.jpg',
        firstImage: 'images/juegos_destacados/fifa_1.jpg',
        secondImage: 'images/juegos_destacados/fifa_2.jpg',
        thirdImage: 'images/juegos_destacados/fifa_3.jpg',
        fourthImage: 'images/juegos_destacados/fifa_4.jpg',
        status: 'Ya disponible',
        tags: 'Lo más vendido',
        price: 'Mex$ 1,299.00'
    },
    {
        title: 'Rust',
        mainImage: 'images/juegos_destacados/rust_main.jpg',
        firstImage: 'images/juegos_destacados/rust_1.jpg',
        secondImage: 'images/juegos_destacados/rust_2.jpg',
        thirdImage: 'images/juegos_destacados/rust_3.jpg',
        fourthImage: 'images/juegos_destacados/rust_4.jpg',
        status: 'Ya disponible',
        tags: 'Lo más vendido',
        price: 'Mex$ 204.99'
    },
    {
        title: 'Apex Legends',
        mainImage: 'images/juegos_destacados/apex_main.jpg',
        firstImage: 'images/juegos_destacados/apex_1.jpg',
        secondImage: 'images/juegos_destacados/apex_2.jpg',
        thirdImage: 'images/juegos_destacados/apex_3.jpg',
        fourthImage: 'images/juegos_destacados/apex_4.jpg',
        status: 'Ya disponible',
        tags: 'Lo más jugado',
        price: 'Free to play'
    },
    {
        title: 'Counter-Strike 2',
        mainImage: 'images/juegos_destacados/CounterStrike_main.jpg',
        firstImage: 'images/juegos_destacados/CounterStrike_1.jpg',
        secondImage: 'images/juegos_destacados/CounterStrike_2.jpg',
        thirdImage: 'images/juegos_destacados/CounterStrike_3.jpg',
        fourthImage: 'images/juegos_destacados/CounterStrike_4.jpg',
        status: 'Ya disponible',
        tags: 'Lo más jugado',
        price: 'Free to play'
    },
    {
        title: 'Destiny 2',
        mainImage: 'images/juegos_destacados/destiny_main.jpg',
        firstImage: 'images/juegos_destacados/destiny_1.jpg',
        secondImage: 'images/juegos_destacados/destiny_2.jpg',
        thirdImage: 'images/juegos_destacados/destiny_3.jpg',
        fourthImage: 'images/juegos_destacados/destiny_4.jpg',
        status: 'Ya disponible',
        tags: 'Lo más vendido',
        price: 'Free to play'
    },
    {
        title: 'Dead by Daylight',
        mainImage: 'images/juegos_destacados/dead_main.jpg',
        firstImage: 'images/juegos_destacados/dead_1.jpg',
        secondImage: 'images/juegos_destacados/dead_2.jpg',
        thirdImage: 'images/juegos_destacados/dead_3.jpg',
        fourthImage: 'images/juegos_destacados/dead_4.jpg',
        status: 'Ya disponible',
        tags: 'Lo más vendido',
        price: 'Mex$ 299.85'
    },
    {
        title: 'Dota 2',
        mainImage: 'images/juegos_destacados/dota_main.jpg',
        firstImage: 'images/juegos_destacados/dota_1.jpg',
        secondImage: 'images/juegos_destacados/dota_2.jpg',
        thirdImage: 'images/juegos_destacados/dota_3.jpg',
        fourthImage: 'images/juegos_destacados/dota_4.jpg',
        status: 'Ya disponible',
        tags: 'Lo más jugado',
        price: 'Free to play'
    }
]

const gamesDiscount = [
    {
        "image": "images/ofertas/ofertasfinde.jpg",
        "title": "OFERTAS DEL FIN DE SEMANA",
        "description": "La oferta termina el 22 de JUL a las 11:00.",
        "porcentage": "Hasta -90 %",
        "oldPrice": "",
        "newPrice": "",
        "type": "tall",
        "dayoffer": false,
        "page": 0
    },
    {
        "image": "images/ofertas/nomansky.png",
        "title": "OFERTA DEL FIN DE SEMANA",
        "description": "La oferta termina el 29 de JUL a las 11:00.",
        "porcentage": "-60%",
        "oldPrice": "Mex$ 614.99",
        "newPrice": "Mex$ 245.99",
        "type": "tall",
        "dayoffer": false,
        "page": 0
    },
    {
        "image": "images/ofertas/card.jpg",
        "title": "¡Oferta del día!",
        "description": "",
        "porcentage": "-90%",
        "oldPrice": "Mex$ 227.99",
        "newPrice": "Mex$ 22.79",
        "type": "wide",
        "dayoffer": true,
        "page": 0
    },
    {
        "image": "images/ofertas/crabs.jpg",
        "title": "¡Oferta del día!",
        "description": "",
        "porcentage": "-75%",
        "oldPrice": "Mex$ 229.99",
        "newPrice": "Mex$ 57.49",
        "type": "wide",
        "dayoffer": true,
        "page": 0
    },
    {
        "image": "images/ofertas/viewfinder.jpg",
        "title": "OFERTA DEL FIN DE SEMANA",
        "description": "Oferta del fin de semana",
        "porcentage": "-40%",
        "oldPrice": "Mex$ 282.99",
        "newPrice": "Mex$ 169.79",
        "type": "tall",
        "dayoffer": false,
        "page": 0
    },
    {
        "image": "images/ofertas/midnight.jpg",
        "title": "OFERTA DEL FIN DE SEMANA",
        "description": "La oferta terminal el 1 AGO a las 11:00.",
        "porcentage": "-75%",
        "oldPrice": "Mex$ 1299.00",
        "newPrice": "Mex$ 324.75",
        "type": "tall",
        "dayoffer": false,
        "page": 0
    },
    {
        "image": "images/ofertas/guilty.jpg",
        "title": "¡Oferta del día!",
        "description": "",
        "porcentage": "-40%",
        "oldPrice": "Mex$ 227.99",
        "newPrice": "Mex$ 136.79",
        "type": "wide",
        "dayoffer": true,
        "page": 0
    },
    {
        "image": "images/ofertas/rimworld.jpg",
        "title": "¡Oferta del día!",
        "description": "",
        "porcentage": "-20%",
        "oldPrice": "Mex$ 229.00",
        "newPrice": "Mex$ 183.20",
        "type": "wide",
        "dayoffer": true,
        "page": 0
    },
    {
        "image": "images/ofertas/pacific.jpg",
        "title": "OFERTA DEL FIN DE SEMANA",
        "description": "La oferta termina el 25 JUL a las 11:00.",
        "porcentage": "-40%",
        "oldPrice": "Mex$ 335.00",
        "newPrice": "Mex$ 201.00",
        "type": "tall",
        "dayoffer": false,
        "page": 0
    },
    {
        "image": "images/ofertas/tacticon.jpg",
        "title": "OFERTA DEL FIN DE SEMANA",
        "description": "La oferta termina el 22 JUL a las 11:00.",
        "porcentage": "Hasta -70 %",
        "oldPrice": "",
        "newPrice": "",
        "type": "tall",
        "dayoffer": false,
        "page": 0
    },
    {
        "image": "images/ofertas/red_dead.jpg",
        "title": "",
        "description": "",
        "porcentage": "-67%",
        "oldPrice": "Mex$ 1299.00",
        "newPrice": "Mex$ 428.67",
        "type": "wide",
        "dayoffer": false,
        "page": 0
    },
    {
        "image": "images/ofertas/rust.jpg",
        "title": "",
        "description": "",
        "porcentage": "-50%",
        "oldPrice": "Mex$ 409.99",
        "newPrice": "Mex$ 204.99",
        "type": "wide",
        "dayoffer": false,
        "page": 0
    },
    {
        "image": "images/ofertas/outlast.jpg",
        "title": "",
        "description": "",
        "porcentage": "-33%",
        "oldPrice": "Mex$ 409.99",
        "newPrice": "Mex$ 136.99",
        "type": "wide",
        "dayoffer": false,
        "page": 0
    },
    {
        "image": "images/ofertas/tekken.jpg",
        "title": "",
        "description": "",
        "porcentage": "-43%",
        "oldPrice": "Mex$ 959.99",
        "newPrice": "Mex$ 543.19",
        "type": "wide",
        "dayoffer": false,
        page: 0
    },
    {
        "image": "images/ofertas/suchart.jpg",
        "title": "",
        "description": "",
        "porcentage": "-50%",
        "oldPrice": "Mex$ 186.99",
        "newPrice": "Mex$ 93.49",
        "type": "wide",
        "dayoffer": false,
        page: 0
    },
    {
        "image": "images/ofertas/gta.jpg",
        "title": "",
        "description": "",
        "porcentage": "-50%",
        "oldPrice": "Mex$ 800.00",
        "newPrice": "Mex$ 400.00",
        "type": "wide",
        "dayoffer": false,
        page: 0
    },
    {
        "image": "images/ofertas/detroit.jpg",
        "title": "",
        "description": "",
        "porcentage": "-60%",
        "oldPrice": "Mex$ 799.00",
        "newPrice": "Mex$ 319.60",
        "type": "wide",
        "dayoffer": false,
        page: 0
    },
    {
        "image": "images/ofertas/street.jpg",
        "title": "",
        "description": "",
        "porcentage": "-50%",
        "oldPrice": "Mex$ 1200.00",
        "newPrice": "Mex$ 600.00",
        "type": "wide",
        "dayoffer": false,
        "page": 0
    },
]

const carouselDiscount = document.getElementById("carousel-discounts");
const btnDiscountLeft = document.getElementById("arrow-left-discount");
const btnDiscountRight = document.getElementById("arrow-rigth-discount");
const caroulseDiscountBtns = document.getElementById("wrap-btns-discounts");
const btnsDiscount = [];

const mainImage = document.getElementById('main-img-destacado');
const gameImages = [];

const gameTitle = document.getElementById("title-destacado");
const gameStatus = document.getElementById("status-destacado");
const gameTags = document.getElementById("tags-destacado");
const gamePrice = document.getElementById("precio-destacado");

const btnCarouselLeft = document.getElementById("arrow-left");
const btnCarouselRight = document.getElementById("arrow-right");
const btnsCarousel = document.getElementById("wrap-btns-carousel");
const arrButtonsCarousel = [];

let indexCarousel = 0, discountPages = 1, temp = 0, initPage = 1;
let myTimeOutCarousel = setTimeout(carouselJuegosDestacados, 0);

for (let i = 0; i < juegosDestacados.length; i++){
    btnsCarousel.innerHTML += `<button class="btn-carousel" id="btn-carousel-${i}"></button>`;
}

for (let i = 0; i < juegosDestacados.length; i++) {
    arrButtonsCarousel.push(document.getElementById(`btn-carousel-${i}`));
}

for (let i = 0; i < juegosDestacados.length; i++) {
    arrButtonsCarousel[i].addEventListener("click", function() {
        clearTimeout(myTimeOutCarousel);
        indexCarousel = i;
        carouselJuegosDestacados();
    });
    arrButtonsCarousel[i].addEventListener("mouseenter", function() {
        if(i != indexCarousel - 1)
            arrButtonsCarousel[i].style.backgroundColor = "#879ebe";
    });
    arrButtonsCarousel[i].addEventListener("mouseleave", function() {
        if(i != indexCarousel - 1)
            arrButtonsCarousel[i].style.backgroundColor = "#4d657b";
    });
}

for (let i = 0; i < 4; i++){
    gameImages.push(document.getElementById(`game-imgs-${i + 1}`));
}

for (let i = 0; i < 4; i++){
    gameImages[i].addEventListener("mouseenter", function(){
        clearTimeout(myTimeOutCarousel);
        mainImage.style.backgroundImage = gameImages[i].style.backgroundImage;
    });
    gameImages[i].addEventListener("mouseleave", function(){
        mainImage.style.backgroundImage = `url(${juegosDestacados[indexCarousel - 1].mainImage})`;
        myTimeOutCarousel = setTimeout(carouselJuegosDestacados, 6000);
    });
}

for (let i = 0; i < gamesDiscount.length; i++){
    gamesDiscount[i].page = discountPages;
    if(gamesDiscount[i].type === "tall"){
        temp+=2;
    }else if(gamesDiscount[i].type === "wide"){
        temp++;
    }
    if(temp >= 6){
        discountPages++;
        temp = 0;
    }
}

for(let i = 0; i < discountPages - 1; i++){
    caroulseDiscountBtns.innerHTML += `<button class="btn-carousel" id="btn-discount-${i + 1}"></button>`;
}

for(let i = 0; i < discountPages - 1; i++){
    btnsDiscount.push(document.getElementById(`btn-discount-${i + 1}`));
}

renderDiscounts(initPage);

for(let i = 0; i < btnsDiscount.length; i++){
    btnsDiscount[i].addEventListener("click", function(){
        initPage = i + 1;
        renderDiscounts(initPage);
    });
}

function renderDiscounts(currentPage){
    let containerDiscount = "";
    for(let i = 0; i < gamesDiscount.length; i++){
        if(gamesDiscount[i].page === currentPage){
            containerDiscount += `<div class="${gamesDiscount[i].type}-img" id="container-discount${i + 1}">`;
            containerDiscount += `<img src='${gamesDiscount[i].image}'>`;
            containerDiscount += `<div class="wrap-info-discount">`;
            if(gamesDiscount[i].title != ""){
                containerDiscount += `<p class="title-discount">${gamesDiscount[i].title}</p>`;
            }
            if(gamesDiscount[i].description != ""){
                containerDiscount += `<p class="decription-discount">${gamesDiscount[i].description}</p>`;
            }
            containerDiscount += `<div class="wrap-price-discount">`;
            containerDiscount += `<p class="porcentage">${gamesDiscount[i].porcentage}</p>`;
            if(gamesDiscount[i].oldPrice != "" && gamesDiscount[i].newPrice != ""){
                containerDiscount += `<div class="prices-discount">`;
                containerDiscount += `<p class="old-price">${gamesDiscount[i].oldPrice}</p>`;
                containerDiscount += `<p class="new-price">${gamesDiscount[i].newPrice}</p>`;
                containerDiscount += `</div>`;
            }
            containerDiscount += `</div>`;
            containerDiscount += `</div>`;
            containerDiscount += `</div>`;
        }
    }
    carouselDiscount.innerHTML = containerDiscount;
    for(let i = 0; i < btnsDiscount.length; i++){
        if((i + 1) === currentPage){
            btnsDiscount[i].style.backgroundColor = "#879ebe";
        }else{
            btnsDiscount[i].style.backgroundColor = "#4d657b";
        }
    }
    
}

function carouselJuegosDestacados(){
    const game = juegosDestacados[indexCarousel];
    mainImage.style.backgroundImage = `url(${game.mainImage})`;
    gameImages[0].style.backgroundImage = `url(${game.firstImage})`;
    gameImages[1].style.backgroundImage = `url(${game.secondImage})`;
    gameImages[2].style.backgroundImage = `url(${game.thirdImage})`;
    gameImages[3].style.backgroundImage = `url(${game.fourthImage})`;
    gameTitle.textContent = game.title;
    gameStatus.textContent = game.status;
    gameTags.textContent = game.tags;
    gamePrice.textContent = game.price;
    arrButtonsCarousel[indexCarousel].style.backgroundColor = "#879ebe";
    for(let i = 0; i < juegosDestacados.length; i++){
        if(i != indexCarousel)
            arrButtonsCarousel[i].style.backgroundColor = "#4d657b";
    }
    indexCarousel = (indexCarousel + 1) % juegosDestacados.length;
    myTimeOutCarousel = setTimeout(carouselJuegosDestacados, 6000);
}

btnCarouselLeft.addEventListener("click", function(){
    clearTimeout(myTimeOutCarousel);
    indexCarousel = indexCarousel - 2;
    if(indexCarousel === -1)
        indexCarousel = juegosDestacados.length - 1;
    if(indexCarousel === -2)
        indexCarousel = juegosDestacados.length - 2;
    carouselJuegosDestacados();
});

btnCarouselRight.addEventListener("click", function(){
    clearTimeout(myTimeOutCarousel);
    carouselJuegosDestacados();
});

btnDiscountLeft.addEventListener("click", function(){
    initPage--;
    if(initPage === 0)
        initPage = discountPages - 1;
    renderDiscounts(initPage);
});

btnDiscountRight.addEventListener("click", function(){
    initPage++;
    if(initPage === discountPages)
        initPage = 1;
    renderDiscounts(initPage);
});


