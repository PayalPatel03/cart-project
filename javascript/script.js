//Bootstrap-Toast
const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}

  document.addEventListener("DOMContentLoaded", function () {
      let toastEl = document.getElementById("liveToast");
      let toast = new bootstrap.Toast(toastEl);
      let addToCartButtons = document.querySelectorAll(".addToCartBtn");
      addToCartButtons.forEach((button) => {
          button.addEventListener("click", function () {
              toast.show();
          });
      });
  });

//start
let cart = [];

window.onload = function () {
  let storedCart = localStorage.getItem('cart');
  if (storedCart) {
    cart = JSON.parse(storedCart);
    updateCartDisplay();
  }
};

function addToCart(name, price, image) {
 
  const existingProduct = cart.find(item => item.name === name);
  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({ name, price, image, quantity: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartDisplay();
}

function updateCartDisplay() {
  // document.getElementById('cart-badge').innerText = cart.length;

  const cartList = document.getElementById('cart-list');
  cartList.innerHTML = '';

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * item.quantity;

    const div = document.createElement('div');
    div.classList.add('cart-item', 'd-flex', 'align-items-center', 'mb-2', 'gap-2', 'justify-content-between');
    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}" width="50" height="50" class="rounded">
      <div class="flex-grow-1">
        <strong>${item.name}</strong><br>
        <span>$${item.price.toFixed(2)}</span>
      </div>
      <div class="d-flex align-items-center gap-1">
        <button class="btn btn-sm btn-outline-secondary decrease-qty" data-index="${index}">-</button>
        <span>${item.quantity}</span>
        <button class="btn btn-sm btn-outline-secondary increase-qty" data-index="${index}">+</button>
      </div>
      <button class="btn btn-sm btn-danger remove-item" data-index="${index}">&times;</button>
    `;
    cartList.appendChild(div);
  });



  const totalDiv = document.createElement('div');
  totalDiv.classList.add('cart-total', 'border-top', 'pt-3', 'mt-3');
  totalDiv.innerHTML = `
    <div class="d-flex justify-content-between mb-2">
      <strong>Total:</strong>
      <strong>$${total.toFixed(2)}</strong>
    </div>
    <button class="btn btn-success w-100" onclick="proceedToCheckout()">Proceed to Checkout</button>
  `;
  cartList.appendChild(totalDiv);

  addCartEventListeners();
  localStorage.setItem('cart', JSON.stringify(cart));
}

function addCartEventListeners() {
  document.querySelectorAll('.remove-item').forEach(button => {
    button.addEventListener('click', function () {
      const index = parseInt(this.dataset.index);
      cart.splice(index, 1);
      updateCartDisplay();
    });
  });

  document.querySelectorAll('.increase-qty').forEach(button => {
    button.addEventListener('click', function () {
      const index = parseInt(this.dataset.index);
      cart[index].quantity += 1;
      updateCartDisplay();
    });
  });

  document.querySelectorAll('.decrease-qty').forEach(button => {
    button.addEventListener('click', function () {
      const index = parseInt(this.dataset.index);
      if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
      } else {
        cart.splice(index, 1); 
      }
      updateCartDisplay();
    });
  });
}
