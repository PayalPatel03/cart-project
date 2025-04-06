//Toast
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

  //badge
  let cartCount = 0;

  function addToCart() {
    cartCount++;
    const badge = document.getElementById("cart-badge");
    badge.textContent = cartCount;
    badge.style.display = "inline-block";
  }

  document.addEventListener("DOMContentLoaded", () => {
    const badge = document.getElementById("cart-badge");
    badge.style.display = "none";
  });


//start
let cart=[];
window.onload =function (){
  let storedCart=localStorage.getItem('cart');
  if (storedCart) {
    cart = JSON.parse(storedCart);
    updateCartDisplay();
  }
}

function addToCart(name, price, image) {
  const product = { name, price, image };
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartDisplay();
}




function updateCartDisplay() {
  document.getElementById('cart-badge').innerText = cart.length;

  const cartList = document.getElementById('cart-list');
  cartList.innerHTML = ''; 

  cart.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('cart-item', 'd-flex', 'align-items-center', 'mb-2', 'gap-2');
    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}" width="50" height="50" class="rounded">
      <div>
        <strong>${item.name}</strong><br>
        <span>$${item.price.toFixed(2)}</span>
      </div>
    `;
    cartList.appendChild(div);
  });
}