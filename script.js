loadCart();
updateCartDisplay();



const loginButton = document.querySelector('.lgin_ic');
const loginContainer = document.querySelector('.login_container');
const searchIcon = document.querySelector('.search_ic');
const searchBar = document.querySelector('.searchBar');
const btnLogin = document.querySelector('.btn_log');
const registerLink = document.querySelector('.log_reg .log_link');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const cartIcon = document.querySelector('.cart_ic'); 
const cartContainer = document.querySelector('.cart_Container');

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
// products.json
window.addEventListener('load', function() {
    fetch('products.json')
        .then(response => response.json())
        .then(products => {
            var container = document.querySelector('.row1'); 

            for (var i = 0; i < 8; i++) {
                let randomIndex = Math.floor(Math.random() * products.length);
                let product = products[randomIndex];

                (function(product) {
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
                })(product);

                products.splice(randomIndex, 1);
            }
        });
});

//---------------------------------------------------------------------------------------------
// accesories.json
window.addEventListener('load', function() {
    fetch('accessories.json') // Fetch accessories data
        .then(response => response.json())
        .then(accessories => {
            var container = document.querySelector('.row2'); // Select the container for accessories

            for (var i = 0; i < 8; i++) {
                let randomIndex = Math.floor(Math.random() * accessories.length);
                let accessory = accessories[randomIndex];

                (function(accessory) {
                    var column = document.createElement('div');
                    column.className = 'column1';

                    var card = document.createElement('div');
                    card.className = 'card1';

                    var img = document.createElement('img');
                    img.src = accessory.img;

                    var description = document.createElement('div');
                    description.className = 'description1';

                    var prod_Name = document.createElement('div');
                    prod_Name.className = 'prod_Name1';
                    prod_Name.innerHTML = '<strong>' + accessory.name + '<strong>';

                    var prod_Price = document.createElement('div');
                    prod_Price.className = 'prod_Price1';
                    prod_Price.innerText = parseInt(accessory.price).toLocaleString('de-DE') + "₫";

                    var addToCartButton = document.createElement('a');
                    addToCartButton.className = 'addToCart1';
                    addToCartButton.addEventListener('click', function() {
                        addToCart(accessory.name, accessory.price, accessory.img);
                    });

                    var icon = document.createElement('i');
                    icon.className = 'fa-solid fa-cart-shopping1';

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
                })(accessory);

                accessories.splice(randomIndex, 1);
            }
        })
        .catch(error => console.error('Error:', error)); // Add this line
});
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
var loggedInUser = null;

// Function to add a product to the cart
function addToCart(product, price, imgSrc) {
    // Retrieve cart from localStorage
    cart = loggedInUser ? JSON.parse(localStorage.getItem(loggedInUser)).cart : JSON.parse(localStorage.getItem('cart')) || [];

    var existingProduct = cart.find(item => item.name === product);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ name: product, price: price, img: imgSrc, quantity: 1 });
    }

    // Store updated user object in localStorage
    if (loggedInUser) {
        let user = JSON.parse(localStorage.getItem(loggedInUser));
        user.cart = cart;
        localStorage.setItem(loggedInUser, JSON.stringify(user));
    } else {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    updateCartCount();
    updateCartDisplay();
}


function updateQuantity(product, delta) {
    var existingProduct = cart.find(item => item.name === product);

    if (existingProduct) {
        existingProduct.quantity += delta;
    
        if (existingProduct.quantity <= 0) {
            cart = cart.filter(item => item.name !== product);
        }

        saveCart();
        updateCartDisplay();
        updateCartCount();
    }
}

function createItemQuantityEventListener(item, itemQuantity) {
    var minusButton = itemQuantity.querySelector('.minus');
    var plusButton = itemQuantity.querySelector('.plus');

    minusButton.addEventListener('click', function(event) {
        var existingProduct = cart.find(cartItem => cartItem.name === item.name);
        if (existingProduct) {
            updateQuantity(existingProduct.name, -1);
            // Update the displayed quantity
            quantity.innerText = ' ' + existingProduct.quantity + ' ';
        }
    });

    plusButton.addEventListener('click', function(event) {
        var existingProduct = cart.find(cartItem => cartItem.name === item.name);
        if (existingProduct) {
            updateQuantity(existingProduct.name, 1);
            // Update the displayed quantity
            quantity.innerText = ' ' + existingProduct.quantity + ' ';
        }
    });
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

        createItemQuantityEventListener(item, itemQuantity);

        itemInfo.appendChild(itemQuantity);
        cardItem.appendChild(imageCard);
        cardItem.appendChild(itemInfo);
        cartContainer.appendChild(cardItem);
    
        if (item !== cart[cart.length - 1]) {
            var line = document.createElement('hr');
            cartContainer.appendChild(line);
        }
    });

    var totalPriceElement = document.querySelector('#total_price');
    var totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    totalPriceElement.innerText = totalPrice.toLocaleString('de-DE') + '₫';
}

//
document.querySelectorAll('.addToCart').forEach(button => {
    button.addEventListener('click', function() {
        var product = this.parentElement.querySelector('.prod_Name').innerText;
        var priceText = this.parentElement.querySelector('.prod_Price').innerText;
        var price = Number(priceText.replace(/[^0-9.-]+/g,""));
        var imgSrc = this.parentElement.parentElement.querySelector('img').src;

        addToCart(product, price, imgSrc);
    });
});

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartCount() {
    var cartCount = document.querySelector('.cart_count');
    var totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.innerText = totalQuantity;
}

function loadCart() {
    cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.forEach(item => {
        item.price = Number(item.price);
    });
    updateCartCount();
    updateCartDisplay(); 
}

window.onload = function() {
    loadCart();
};

var cart = JSON.parse(localStorage.getItem('cart')) || [];

// Display cart items
var cartItemsElement = document.getElementById('cartItems');
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
    itemPrice.innerHTML = item.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    itemInfo.appendChild(itemPrice);

    var itemQuantity = document.createElement('div');
    itemQuantity.className = 'item_quantity';

    var quantity = document.createElement('span');
    quantity.innerText = 'Quantity: ' + item.quantity;
    itemQuantity.appendChild(quantity);

    itemInfo.appendChild(itemQuantity); 
    cardItem.appendChild(imageCard);
    cardItem.appendChild(itemInfo);
    cartItemsElement.appendChild(cardItem);

    if (item !== cart[cart.length - 1]) {
        var line = document.createElement('hr');
        cartItemsElement.appendChild(line);
    }
});
var totalPriceElement = document.querySelector('#total_price');
var totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
totalPriceElement.innerText = totalPrice.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });

// Calculate and display total price
var totalPriceElement = document.getElementById('totalPrice');
var totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
totalPriceElement.textContent = `Total Price: ${totalPrice.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}`;

// Handle form submission
var paymentForm = document.getElementById('paymentForm');
paymentForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Here you would typically send the payment details and the cart items to your server
    console.log('Form submitted');

    // Clear the cart
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
});
                                                                                                                                                                
function register(event) {
    event.preventDefault();
  
    // Get form values
    let fullname = document.getElementById('fullname').value;
    let username = document.getElementById('u_name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('pwd').value;
  
    // Create user object
    let user = {
      fullname: fullname,
      username: username,
      email: email,
      password: password,
      cart: []
    };
  
    // Retrieve all users from localStorage
    let users = JSON.parse(localStorage.getItem('account')) || {};
  
    // Add new user to users object
    users[username] = user;
  
    // Store users object in localStorage
    localStorage.setItem('account', JSON.stringify(users));
  
    // Redirect to another page after successful registration
    window.location.href = 'reg.html';
}

function login(event) {
    event.preventDefault();
  
    // Get form values
    let usernameOrEmail = document.getElementById('email').value;
    let password = document.getElementById('password').value;
  
    // Retrieve all users from localStorage
    let users = JSON.parse(localStorage.getItem('account')) || {};
    let user = null;
  
    // Loop through all users to find a match
    for(let username in users) {
      let currentUser = users[username];
      if(currentUser.username === usernameOrEmail || currentUser.email === usernameOrEmail) {
        user = currentUser;
        break;
      }
    }
  
    // Check if user exists and password is correct
    if (user && user.password === password) {
      // Login successful, set loggedInUser and redirect to main page
      localStorage.setItem('loggedInUser', user.username);
      window.location.href = 'main.html';
    } else {
      // Login failed, show error message
      alert('Invalid username/email or password');
    }
}
//---------------------------------------------------------------------------------------------

function goToPaymentSite() {
    // Convert the cart to a JSON string
    let cartJson = JSON.stringify(cart);

    // Encode the JSON string to safely pass it as a URL parameter
    let encodedCart = encodeURIComponent(cartJson);

    // The URL of the payment site
    let paymentSiteUrl = "Kbl_payment.html";

    // Redirect to the payment site with the cart data as a URL parameter
    window.location.href = paymentSiteUrl + "?cart=" + encodedCart;
}