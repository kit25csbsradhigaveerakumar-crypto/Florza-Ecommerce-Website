let cart = JSON.parse(localStorage.getItem("cart")) || [];
const products = [

{ name: "Handbag", price: 999, category: "Women", image: "images/handbag.jpg" },
{ name: "Perfume", price: 799, category: "Women", image: "images/perfume.jpg" },
{ name: "Lipstick", price: 399, category: "Women", image: "images/lipstick.jpg" },
{ name: "Hair Dryer", price: 1499, category: "Women", image: "images/hairdryer.jpg" },
{ name: "Face Wash", price: 299, category: "Women", image: "images/facewash.jpg" },
{ name: "Moisturizer", price: 499, category: "Women", image: "images/moisturizer.jpg" },
{ name: "Earrings", price: 599, category: "Women", image: "images/earrings.jpg" },
{ name: "Heels", price: 1299, category: "Women", image: "images/heels.jpg" },

{ name: "Watch", price: 1499, category: "Men", image: "images/watch.jpg" },
{ name: "Wallet", price: 499, category: "Men", image: "images/wallet.jpg" },
{ name: "Sunglasses", price: 699, category: "Men", image: "images/sunglasses.jpg" },
{ name: "Shirt", price: 999, category: "Men", image: "images/shirt.jpg" },
{ name: "Shoes", price: 1999, category: "Men", image: "images/shoes.jpg" },
{ name: "Belt", price: 399, category: "Men", image: "images/belt.jpg" },
{ name: "Trimmer", price: 1499, category: "Men", image: "images/trimmer.jpg" },
{ name: "Men Perfume", price: 899, category: "Men", image: "images/menperfume.jpg" },

{ name: "Toy Car", price: 299, category: "Kids", image: "images/toycar.jpg" },
{ name: "Teddy Bear", price: 599, category: "Kids", image: "images/teddybear.jpg" },
{ name: "Backpack", price: 899, category: "Kids", image: "images/backpack.jpg" },
{ name: "Coloring Book", price: 199, category: "Kids", image: "images/coloringbook.jpg" },
{ name: "Water Bottle", price: 249, category: "Kids", image: "images/waterbottle.jpg" },
{ name: "Pencil Box", price: 149, category: "Kids", image: "images/pencilbox.jpg" },

{ name: "Pet Food", price: 399, category: "Pets", image: "images/petfood.jpg" },
{ name: "Pet Toy", price: 249, category: "Pets", image: "images/pettoy.jpg" },
{ name: "Dog Bed", price: 899, category: "Pets", image: "images/dogbed.jpg" },
{ name: "Pet Shampoo", price: 349, category: "Pets", image: "images/petshampoo.jpg" },
{ name: "Pet Bowl", price: 199, category: "Pets", image: "images/petbowl.jpg" },
{ name: "Pet Leash", price: 299, category: "Pets", image: "images/petleash.jpg" },

{ name: "Headphones", price: 1999, category: "Gadgets", image: "images/headphones.jpg" },
{ name: "Smart Watch", price: 2499, category: "Gadgets", image: "images/smartwatch.jpg" },
{ name: "Bluetooth Speaker", price: 1299, category: "Gadgets", image: "images/speaker.jpg" },
{ name: "Power Bank", price: 999, category: "Gadgets", image: "images/powerbank.jpg" },
{ name: "Keyboard", price: 799, category: "Gadgets", image: "images/keyboard.jpg" },
{ name: "Mouse", price: 499, category: "Gadgets", image: "images/mouse.jpg" },
{ name: "USB Drive", price: 599, category: "Gadgets", image: "images/usbdrive.jpg" },
{ name: "Phone Stand", price: 299, category: "Gadgets", image: "images/phonestand.jpg" },

{ name: "Rice", price: 60, category: "Grocery", image: "images/rice.jpg" },
{ name: "Cooking Oil", price: 180, category: "Grocery", image: "images/cookingoil.jpg" },
{ name: "Biscuits", price: 50, category: "Grocery", image: "images/biscuits.jpg" },
{ name: "Sugar", price: 55, category: "Grocery", image: "images/sugar.jpg" },
{ name: "Tea Powder", price: 120, category: "Grocery", image: "images/teapowder.jpg" },
{ name: "Coffee Powder", price: 180, category: "Grocery", image: "images/coffeepowder.jpg" },
{ name: "Noodles", price: 40, category: "Grocery", image: "images/noodles.jpg" },
{ name: "Chocolate", price: 99, category: "Grocery", image: "images/chocolate.jpg" }

];

const productContainer =
document.getElementById("productContainer");

function displayProducts() {

    productContainer.innerHTML = "";

    products.forEach(product => {

        productContainer.innerHTML += `
        
        <div class="product-card">

        <img src="${product.image}" alt="${product.name}">

            <h3>${product.name}</h3>

            <p>Category: ${product.category}</p>

            <h4>₹${product.price}</h4>

            <button onclick="addToCart('${product.name}')">Add to Cart</button>

        </div>

        `;

    });

}
updateCart();
displayProducts();

function addToCart(productName){
    let product = products.find(
        item => item.name === productName
    );
    if(product){
    cart.push(product);
    updateCart();
}
}

function updateCart(){

    let cartItems =
    document.getElementById("cartItems");

    let totalPrice =
    document.getElementById("totalPrice");

    let cartBtn =
    document.getElementById("cartBtn");

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {

        cartItems.innerHTML += `
            <p>
            ${item.name} - ₹${item.price}
            <button onclick="removeFromCart(${index})">❌</button>
            </p>
        `;

        total += item.price;

    });
    if(cart.length === 0){
        cartItems.innerHTML="<p>Your cart is empty.</p>";
    }
    


    totalPrice.innerText =
    `Total: ₹${total}`;

    cartBtn.innerText =
    `Cart (${cart.length})`;

    localStorage.setItem("cart",JSON.stringify(cart));

}

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup",searchProducts);

function searchProducts(){

    let searchValue =
    searchInput.value.toLowerCase();

    let filteredProducts =
    products.filter(product =>
        product.name.toLowerCase()
        .includes(searchValue)
    );

    if(filteredProducts.length === 0){
        productContainer.innerHTML="<h2>No Products Found<h2>";
        return;
    }

    productContainer.innerHTML = "";

    filteredProducts.forEach(product => {

        productContainer.innerHTML += `

        <div class="product-card">

        <img src="${product.image}" alt="${product.name}">

            <h3>${product.name}</h3>

            <p>Category: ${product.category}</p>

            <h4>₹${product.price}</h4>

            <button onclick="addToCart('${product.name}')">
                Add To Cart
            </button>

        </div>

        `;

    });

}
function filterProducts(category){

    productContainer.innerHTML = "";

    let filteredProducts;

    if(category === "All"){
        filteredProducts = products;
    }
    else{
        filteredProducts = products.filter(
            product => product.category === category
        );
    }

    filteredProducts.forEach(product => {

        productContainer.innerHTML += `

        <div class="product-card">
        
        <img src="${product.image}" alt="${product.name}">

            <h3>${product.name}</h3>

            <p>Category: ${product.category}</p>

            <h4>₹${product.price}</h4>

            <button onclick="addToCart('${product.name}')">
                Add To Cart
            </button>

        </div>

        `;

    });

}

document.getElementById("orderBtn")
.addEventListener("click", function(){
        
    if(cart.length === 0){
        alert("Your cart is empty!");
        return;
    }
    
    alert(
        "🎉 Order Placed Successfully!\nThank You for Shopping with Florza."
    );

    cart = [];
    updateCart();

});

function removeFromCart(index){
    cart.splice(index,1);
    updateCart();
}

function renderProducts(list){
    productContainer.innerHTML = "";

    list.forEach(product => {
        productContainer.innerHTML += `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.category}</p>
            <h4>₹${product.price}</h4>
            <button onclick="addToCart('${product.name}')">Add</button>
        </div>
        `;
    });
}