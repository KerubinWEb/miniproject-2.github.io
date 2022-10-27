const burgerProduct =document.getElementById("showna")
const cartItems = document.getElementById("showOrder");

function renderProducts () {
    Burgers.forEach((Burger) =>{
        burgerProduct.innerHTML +=`<div class="card shadow" style="width: 250px; height: 300px">
        <div class="inner">
        <img src=${Burger.src} class="card-img-top" alt="..." style="heigh: 150px;" />
        </div>
        <div class="card-body">
          <h5 class="card-title">${Burger.name}</h5>
          <p class="card-text">
          ${Burger.dsc}
          </p>
          <p>Php ${Burger.price}</p>
          <button  onclick="Addtocart(${Burger.id})">Add to Cart</button>
        </div>
      </div>`
    })
};

renderProducts();

let cart = [];


function Addtocart(id) {
  if (cart.some ((item) => item.id ===id)){
    alert("Product here")
  }
  else {
    const item =Burgers.find((Burger) => Burger.id === id);

  cart.push({
    ...item,
    numberofUnits:1,
  });
  }
  
  updatecart();
}

//update cart

function updatecart(){
  renderCartItems();
}

// render cart items
function renderCartItems() {
  cartItems.innerHTML = ""; // clear cart element
  cart.forEach((item) => {
    cartItems.innerHTML += `<div class="row mb-4">
    <div class="col"><img src=${item.src} alt="" srcset="" style="width: 100%"></div>
    <div class="col">${item.name}</div>
    <div class="col">${item.price}</div>
    <div class="col">${item.numberofUnits}</div>
   </div>`;
  });
}