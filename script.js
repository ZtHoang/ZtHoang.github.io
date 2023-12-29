const loginButton = document.querySelector('.lgin_ic');
const loginContainer = document.querySelector('.login_container');
const searchIcon = document.querySelector('.search_ic');
const searchBar = document.querySelector('.searchBar'); // Corrected this line
const btnLogin = document.querySelector('.btn_log');
const registerLink = document.querySelector('.log_reg .log_link');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const cartIcon = document.querySelector('.cart_ic'); // Replace '.cart_ic' with the actual class or id of your cart icon
const cartContainer = document.querySelector('.cart_Container'); // Replace '.cart_container' with the actual class or id of your cart container

function toggleShow(target, ...elements) {
    elements.forEach(element => {
        if (element.classList.contains('show')) {
            element.classList.remove('show');
        }
    });
    target.classList.toggle('show');
    activeIcon.classList.toggle('active');
}

loginButton.addEventListener('click', () => {
    toggleShow(loginContainer, searchBar, cartContainer);
});

searchIcon.addEventListener('click', () => {
    toggleShow(searchBar, loginContainer,   cartContainer);
});

cartIcon.addEventListener('click', () => {
    toggleShow(cartContainer, loginContainer, searchBar);
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
    window.location.href = registerLink.href;
});

//---------------------------------------------------------------------------------------------

var dropdownContent = document.createElement('div');
dropdownContent.className = 'dropdown-content';

var brands = ["Logitech", "Corsair", "DareU", "Razer", "Steelseries", "AKKO"];
var links = ["https://www.logitechg.com/vi-vn", "https://www.corsair.com/us/en/", "https://dareu.com.vn", "https://www.razer.com", "https://steelseries.com/", "https://en.akkogear.com"];

for (var i = 0; i < brands.length; i++) {
    var link = document.createElement('a');
    link.href = links[i];
    link.innerText = brands[i];
    dropdownContent.appendChild(link);
}

var dropdown = document.querySelector('.dropdown');
dropdown.appendChild(dropdownContent);

//---------------------------------------------------------------------------------------------

window.onload = function() {
    fetch('products.json')
        .then(response => response.json())
        .then(products => {
            var container = document.querySelector('.row1'); 

            for (var i = 0; i < 6; i++) {
                let randomIndex = Math.floor(Math.random() * products.length);
                let product = products[randomIndex];

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

                
                var addToCartButton = document.createElement('a');
                addToCartButton.className = 'addToCart';
                addToCartButton.addEventListener('click', function() {
                    addToCart(product.name, product.price, product.img);
                });

                var icon = document.createElement('i');
                icon.className = 'fa-solid fa-cart-shopping';

                // Append the icon to the addToCart element
                addToCartButton.appendChild(icon);

                // Create a text node and append it after the icon
                var textNode = document.createTextNode(' Add to Cart');
                addToCartButton.appendChild(textNode);

                description.appendChild(prod_Name);
                description.appendChild(prod_Price);
                description.appendChild(addToCartButton);
                card.appendChild(img);
                card.appendChild(description);
                column.appendChild(card);
                container.appendChild(column);

                products.splice(randomIndex, 1);
            }
        });
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

var cart = [];

// Function to add a product to the cart
function addToCart(product, price, imgSrc) {
    var existingProduct = cart.find(item => item.name === product);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ name: product, price: price, img: imgSrc, quantity: 1 });

        // Increase the cart count
        var cartCount = document.querySelector('.cart_count');
        cartCount.innerText = parseInt(cartCount.innerText) + 1;
    }

    updateCartDisplay();
}

document.querySelectorAll('.minus, .plus').forEach(element => {
    element.addEventListener('mousedown', function(event) {
        event.preventDefault();
    });
});

function updateQuantity(product, delta) {
    var existingProduct = cart.find(item => item.name === product);

    if (existingProduct) {
        existingProduct.quantity += delta;
    
        if (existingProduct.quantity <= 0) {
            cart = cart.filter(item => item.name !== product);
    
            // Decrease the cart count
            var cartCount = document.querySelector('.cart_count');
            cartCount.innerText = parseInt(cartCount.innerText) - 1;
    
            // Update the cart display immediately
            updateCartDisplay();
        } else {
            // Call updateCartDisplay only if the product is still in the cart
            updateCartDisplay();
        }
    }
}

// Function to display the cart
function updateCartDisplay() {
    var cartContainer = document.querySelector('.cart_Items');
    cartContainer.innerHTML = '';

    cart.forEach(item => {
        var cardItem = document.createElement('div');
        cardItem.className = 'card_item';

        var imageCard = document.createElement('div');
        imageCard.className = 'image_card';

        var img = document.createElement('img');
        img.src = item.img;
        imageCard.appendChild(img);

        var itemInfo = document.createElement('div');
        itemInfo.className = 'item_info';

        var itemName = document.createElement('div');
        itemName.className = 'item_name';
        itemName.innerHTML = item.name;
        itemInfo.appendChild(itemName);

        var itemPrice = document.createElement('div');
        itemPrice.className = 'item_price';
        itemPrice.innerHTML = item.price.toLocaleString('de-DE') + '₫';
        itemInfo.appendChild(itemPrice);

        var itemQuantity = document.createElement('div');
        itemQuantity.className = 'item_quantity';

        var minus = document.createElement('button');
        minus.className = 'minus';
        minus.innerText = ' - ';
        itemQuantity.appendChild(minus);

        var quantity = document.createElement('span');
        quantity.innerText = ' ' + item.quantity + ' ';
        itemQuantity.appendChild(quantity);

        var plus = document.createElement('button');
        plus.className = 'plus';
        plus.innerText = ' + ';
        itemQuantity.appendChild(plus);

        itemQuantity.addEventListener('click', function(event) {
            if (event.target.className === 'minus') {
                updateQuantity(item.name, -1);
            } else if (event.target.className === 'plus') {
                updateQuantity(item.name, 1);
            }
        });

        itemInfo.appendChild(itemQuantity);
        cardItem.appendChild(imageCard);
        cardItem.appendChild(itemInfo);
        cartContainer.appendChild(cardItem);
        // Add a line every item except the last one
        if (item !== cart[cart.length - 1]) {
            var line = document.createElement('hr');
            cartContainer.appendChild(line);
        }
    });

    var totalPriceElement = document.querySelector('#total_price');
    var totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    totalPriceElement.innerText = totalPrice.toLocaleString('de-DE') + '₫';
}

// Add event listener to the "Add to Cart" buttons
document.querySelectorAll('.addToCart').forEach(button => {
    button.addEventListener('click', function() {
        var product = this.parentElement.querySelector('.prod_Name').innerText;
        var price = this.parentElement.querySelector('.prod_Price').innerText;
        var imgSrc = this.parentElement.parentElement.querySelector('img').src;

        addToCart(product, price, imgSrc);
    });
});

//---------------------------------------------------------------------------------------------
