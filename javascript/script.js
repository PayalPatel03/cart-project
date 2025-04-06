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
