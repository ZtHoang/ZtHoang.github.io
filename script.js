const loginButton = document.querySelector('.lgin_ic');
const loginContainer = document.querySelector('.login_container');
const btnLogin = document.querySelector('.btn_log');
const registerLink = document.querySelector('.log_reg .log_link');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

loginButton.addEventListener('click', () => {
    loginContainer.classList.toggle('show');
});

btnLogin.addEventListener('click', (event) => {
    event.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;

    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);

    
});

registerLink.addEventListener('click', (event) => {
    event.preventDefault();
    // Redirect to the registration page
    window.location.href = registerLink.href;
});

//---------------------------------------------------------------------------------------------

var dropdownContent = document.createElement('div');
dropdownContent.className = 'dropdown-content';

var brands = ["Logitech", "Corsair", "DareU", "Razer", "Steelseries", "AKKO", "All the products"];
var links = ["https://www.logitechg.com/vi-vn", "https://www.corsair.com/us/en/", "https://dareu.com.vn", "https://www.razer.com", "https://steelseries.com/", "https://en.akkogear.com", "keyboard-main.html"];

for (var i = 0; i < brands.length; i++) {
    var link = document.createElement('a');
    link.href = links[i];
    link.innerText = brands[i];
    dropdownContent.appendChild(link);
}

var dropdown = document.querySelector('.dropdown');
dropdown.appendChild(dropdownContent);

//---------------------------------------------------------------------------------------------

// JavaScript code to auto-generate product cards
// window.onload = function() {
//     var products = [
//         {name: "Corsair K70 Pro", price: 3490000, img: "img/Keyboard/Crs_kb2.png"},
//         {name: "Corsair K55 RGB Pro Lite", price: 880000, img: "img/Keyboard/Crs_kb1.png"},
//         {name: "Corsair K70 TKL RGB Champion Series", price: 3500000, img: "img/Keyboard/Crs_kb3.png"},
//         {name: "AKKO 5075B Plus", price: 2400000, img: "img/Keyboard/ako_kb1.png"},
//         {name: "AKKO 3108 v2 DS Horizon", price: 2400000, img: "img/Keyboard/ako_kb2.png"},
//         {name: "AKKO 5108S Black Pink", price: 2400000, img: "img/Keyboard/ako_kb3.png"},
//         {name: "Steelseries Apex PRO TKL", price: 4150000, img: "img/Keyboard/Ssr_kb1.png"},
//         {name: "Steelseries Apex 7 TKL", price: 3500000, img: "img/Keyboard/Ssr_kb2.png"},
//         {name: "Steelseries Apex 3", price: 2000000, img: "img/Keyboard/Ssr_kb3.png"},
//         {name: "Logitech G915 TKL", price: 4500000, img: "img/Keyboard/Lgt_kb1.png"},
//         {name: "Logitech G512 Carbon", price: 2500000, img: "img/Keyboard/Lgt_kb2.png"},
//         {name: "Logitech G213 Prodigy", price: 1500000, img: "img/Keyboard/Lgt_kb3.png"},
//         {name: "Razer BlackWidow V3 Pro", price: 5000000, img: "img/Keyboard/Rzr_kb1.png"},
//         {name: "Razer BlackWidow V3 Tenkeyless", price: 3500000, img: "img/Keyboard/Rzr_kb2.png"},
//         {name: "Razer BlackWidow V3", price: 3000000, img: "img/Keyboard/Rzr_kb3.png"},
//         {name: "DareU EK820", price: 500000, img: "img/Keyboard/Dru_kb1.png"},
//         {name: "DareU EK75 Pro", price: 600000, img: "img/Keyboard/Dru_kb2.png"},
//         {name: "DareU EK815", price: 400000, img: "img/Keyboard/Dru_kb3.png"}
//     ];

//     var container = document.querySelector('.row1'); 

//     for (var i = 0; i < 6; i++) {
//         var column = document.createElement('div');
//         column.className = 'column';

//         var card = document.createElement('div');
//         card.className = 'card';

//         var img = document.createElement('img');
//         img.src = products[i].img;

//         var description = document.createElement('div');
//         description.className = 'description';

//         var prod_Name = document.createElement('div');
//         prod_Name.className = 'prod_Name';
//         prod_Name.innerHTML = '<strong>' + products[i].name + '<strong>';

//         var prod_Price = document.createElement('div');
//         prod_Price.className = 'prod_Price';
//         prod_Price.innerText = parseInt(products[i].price).toLocaleString('de-DE') + "₫";

//         var addToCart = document.createElement('button');
//         addToCart.innerText = 'Add to Cart';
//         addToCart.className = 'addToCart';

//         description.appendChild(prod_Name);
//         description.appendChild(prod_Price);
//         description.appendChild(addToCart);
//         card.appendChild(img);
//         card.appendChild(description);
//         column.appendChild(card);
//         container.appendChild(column);
//     }
// }

window.onload = function() {
    var products = [
        {name: "Corsair K70 Pro", price: 3490000, img: "img/Keyboard/Crs_kb2.png"},
        {name: "Corsair K55 RGB Pro Lite", price: 880000, img: "img/Keyboard/Crs_kb1.png"},
        {name: "Corsair K70 TKL RGB Champion Series", price: 3500000, img: "img/Keyboard/Crs_kb3.png"},
        {name: "AKKO 5075B Plus", price: 2400000, img: "img/Keyboard/ako_kb1.png"},
        {name: "AKKO 3108 v2 DS Horizon", price: 2400000, img: "img/Keyboard/ako_kb2.png"},
        {name: "AKKO 5108S Black Pink", price: 2400000, img: "img/Keyboard/ako_kb3.png"},
        {name: "Steelseries Apex PRO TKL", price: 4150000, img: "img/Keyboard/Ssr_kb1.png"},
        {name: "Steelseries Apex 7 TKL", price: 3500000, img: "img/Keyboard/Ssr_kb2.png"},
        {name: "Steelseries Apex 3", price: 2000000, img: "img/Keyboard/Ssr_kb3.png"},
        {name: "Logitech G915 TKL", price: 4500000, img: "img/Keyboard/Lgt_kb1.png"},
        {name: "Logitech G512 Carbon", price: 2500000, img: "img/Keyboard/Lgt_kb2.png"},
        {name: "Logitech G213 Prodigy", price: 1500000, img: "img/Keyboard/Lgt_kb3.png"},
        {name: "Razer BlackWidow V3 Pro", price: 5000000, img: "img/Keyboard/Rzr_kb1.png"},
        {name: "Razer BlackWidow V3 Tenkeyless", price: 3500000, img: "img/Keyboard/Rzr_kb2.png"},
        {name: "Razer BlackWidow V3", price: 3000000, img: "img/Keyboard/Rzr_kb3.png"},
        {name: "DareU EK820", price: 500000, img: "img/Keyboard/Dru_kb1.png"},
        {name: "DareU EK75 Pro", price: 600000, img: "img/Keyboard/Dru_kb2.png"},
        {name: "DareU EK815", price: 400000, img: "img/Keyboard/Dru_kb3.png"}
    ];

    var container = document.querySelector('.row1'); 

    for (var i = 0; i < 6; i++) {
        var randomIndex = Math.floor(Math.random() * products.length);
        var product = products[randomIndex];

        var column = document.createElement('div');
        column.className = 'column';

        var card = document.createElement('div');
        card.className = 'card';

        var img = document.createElement('img');
        img.src = product.img;

        var description = document.createElement('div');
        description.className = 'description';

        var prod_Name = document.createElement('div');
        prod_Name.className = 'prod_Name';
        prod_Name.innerHTML = '<strong>' + product.name + '<strong>';

        var prod_Price = document.createElement('div');
        prod_Price.className = 'prod_Price';
        prod_Price.innerText = parseInt(product.price).toLocaleString('de-DE') + "₫";

        
        var addToCart = document.createElement('a');
        addToCart.className = 'addToCart';

        var icon = document.createElement('i');
        icon.className = 'fa-solid fa-cart-shopping';

        // Append the icon to the addToCart element
        addToCart.appendChild(icon);

        // Create a text node and append it after the icon
        var textNode = document.createTextNode(' Add to Cart');
        addToCart.appendChild(textNode);

        description.appendChild(prod_Name);
        description.appendChild(prod_Price);
        description.appendChild(addToCart);
        card.appendChild(img);
        card.appendChild(description);
        column.appendChild(card);
        container.appendChild(column);

        products.splice(randomIndex, 1);
    }
}

//---------------------------------------------------------------------------------------------

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//---------------------------------------------------------------------------------------------

