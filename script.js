const wrapper = document.querySelector('.wrapper');
const btnPopup = document.querySelector('.btn-login');
const iconClose = document.querySelector('.close-ic');
var loginForm = document.querySelector('.form-box.login');
var registerForm = document.querySelector('.form-box.register');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});

btnPopup.addEventListener('click', () => {
    const rect = btnPopup.getBoundingClientRect();
    wrapper.style.position = 'fixed';
    wrapper.style.top = `${rect.bottom + -40}px`; // Add 20px to the top position
    wrapper.style.left = `${rect.left}px`;
    wrapper.classList.add('active-popup');
});

// Initially hide the register form
registerForm.style.display = 'none';

// When the "Sign up" link is clicked, hide the login form and show the register form
registerLink.addEventListener('click', function(event) {
  event.preventDefault();
  loginForm.style.display = 'none';
  registerForm.style.display = 'block';
});

// When the "Login" link is clicked, hide the register form and show the login form
loginLink.addEventListener('click', function(event) {
  event.preventDefault();
  registerForm.style.display = 'none';
  loginForm.style.display = 'block';
});

//---------------------------------------------------------------------------------------------

var dropdownContent = document.createElement('div');
dropdownContent.className = 'dropdown-content';

var brands = ['Logitech', 'Corsair', 'DareU', 'Razer', 'SteelSeries'];
var links = ['logitech_kb.html', 'corsair_kb.html', 'DareU_kb.html', 'razer_kb.html', 'steelseries_kb.html'];

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
window.onload = function() {
    var products = [
        {name: "Corsair K70 Pro", price: 3490000, img: "img/Keyboard/Crs_kb2.png"},
        {name: "Product B", price: 60, img: "path/to/image2.jpg"},
        {name: "Product C", price: 70, img: "path/to/image3.jpg"},
        {name: "Product D", price: 80, img: "path/to/image4.jpg"},
        {name: "Product E", price: 90, img: "path/to/image5.jpg"},
        {name: "Product F", price: 100, img: "path/to/image6.jpg"}
    ];

    var container = document.querySelector('.row1'); 

    for (var i = 0; i < products.length; i++) {
        var column = document.createElement('div');
        column.className = 'column';

        var card = document.createElement('div');
        card.className = 'card';

        var img = document.createElement('img');
        img.src = products[i].img;

        var description = document.createElement('div');
        description.className = 'description';

        var prod_Name = document.createElement('div');
        prod_Name.className = 'prod_Name';
        prod_Name.innerHTML = '<strong>' + products[i].name + '<strong>';

        var prod_Price = document.createElement('div');
        prod_Price.className = 'prod_Price';
        prod_Price.innerText = parseInt(products[i].price).toLocaleString('de-DE') + "₫";

        var addToCart = document.createElement('button');
        addToCart.innerText = 'Add to Cart';
        addToCart.className = 'addToCart';

        description.appendChild(prod_Name);
        description.appendChild(prod_Price);
        description.appendChild(addToCart);
        card.appendChild(img);
        card.appendChild(description);
        column.appendChild(card);
        container.appendChild(column);
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