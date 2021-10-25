// products section
const productsInput = document.querySelector(".products__gallery");
const cartItems = document.querySelector(".cartSection__items");
// render products

const renderProducts = () => {
  products.forEach((item) => {
    productsInput.innerHTML += `
            <div class="box">
                <img src="${item.imgUrl}" alt="${item.name}">
                <div class="content">
                    <h3>${item.name}</h3>
                    <p>${item.discription}</p>
                    <button class="btn" onclick="addToCart(${item.id})"> order now</button>
                </div>
            </div>
        `;
  });
};

renderProducts();

// add to cart
let cart = [];

const addToCart = (id) => {
  if (cart.some((item) => item.id === id)) {
    alert("Product already in cart!");
  } else {
    const item = products.find((product) => product.id === id);
    cart.push({
        ...item,
        numberOfUnits: 1,
    });
  }
  updateCart();
};

const updateCart = ()=>{
    renderCartItems();
    // renderSubtotal();
}

const renderCartItems = ()=>{
    cart.forEach((item)=>{
        cartItems.innerHTML = "";
        cartItems.innerHTML += `
            <div class="cartSection__item">
                <div class="cartSection__info">
                    <img src="${item.imgUrl}" alt="${item.name}">
                    <h4>${item.name}</h4>
                </div>
                <div class="cartSection__price">
                    <small>INR </small>${item.price}
                </div>
                <div class="units">
                    <div class="units__symbol">-</div>
                    <div class="number">${item.numberOfUnits}</div>
                    <div class="units__symbol">+</div>
                </div>
            </div>
        `;
    });
}

