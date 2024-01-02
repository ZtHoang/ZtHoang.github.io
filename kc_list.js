window.addEventListener('load', function() {
    fetch('keycap_list.json') // Fetch accessories data
        .then(response => response.json())
        .then(accessories => {
            var container = document.querySelector('.Container'); // Select the container for accessories

            for (var i = 0; i < 20; i++) {
                let randomIndex = Math.floor(Math.random() * accessories.length);
                let accessory = accessories[randomIndex];

                var column = document.createElement('div');
                column.className = 'column';

                var card = document.createElement('div');
                card.className = 'card';

                var img = document.createElement('img');
                img.src = accessory.img;

                var description = document.createElement('div');
                description.className = 'description';

                var prod_Name = document.createElement('div');
                prod_Name.className = 'prod_Name';
                prod_Name.innerHTML = '<strong>' + accessory.name + '<strong>';

                var prod_Price = document.createElement('div');
                prod_Price.className = 'prod_Price';
                prod_Price.innerText = parseInt(accessory.price).toLocaleString('de-DE') + "₫";

                var addToCartButton = document.createElement('a');
                addToCartButton.className = 'addToCart';
                addToCartButton.addEventListener('click', (function(accessory) {
                    return function() {
                        addToCart(accessory.name, accessory.price, accessory.img);
                    }
                })(accessory));

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

                accessories.splice(randomIndex, 1);
            }
        });
});