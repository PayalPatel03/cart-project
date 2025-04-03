// document.addEventListener("DOMContentLoaded", () => {
//     let cart = [];
//     const cartSidebar = document.createElement("div");
//     cartSidebar.classList.add("cart-sidebar");
//     cartSidebar.innerHTML = `
//         <div class="cart-header">
//             <h5>Shopping Cart</h5>
//             <button id="closeCart">&times;</button>
//         </div>
//         <div class="cart-items"></div>
//         <div class="cart-footer">
//             <h6>Total: $<span id="cartTotal">0.00</span></h6>
//         </div>
//     `;
//     document.body.appendChild(cartSidebar);

//     document.querySelectorAll(".btn-success").forEach(button => {
//         button.addEventListener("click", (e) => {
//             let card = e.target.closest(".card");
//             let itemName = card.querySelector(".card-title").textContent;
//             let itemPrice = parseFloat(card.querySelector(".fs-4").textContent.replace("$", ""));
//             let item = cart.find(i => i.name === itemName);

//             if (item) {
//                 item.quantity += 1;
//             } else {
//                 cart.push({ name: itemName, price: itemPrice, quantity: 1 });
//             }

//             updateCart();
//         });
//     });

//     document.querySelector(".fa-bag-shopping").addEventListener("click", () => {
//         cartSidebar.classList.add("open");
//     });

//     document.getElementById("closeCart").addEventListener("click", () => {
//         cartSidebar.classList.remove("open");
//     });

//     function updateCart() {
//         const cartItemsContainer = document.querySelector(".cart-items");
//         cartItemsContainer.innerHTML = "";
//         let total = 0;

//         cart.forEach(item => {
//             let itemTotal = item.price * item.quantity;
//             total += itemTotal;
//             cartItemsContainer.innerHTML += `
//                 <div class="cart-item">
//                     <p>${item.name} (x${item.quantity}) - $${itemTotal.toFixed(2)}</p>
//                 </div>
//             `;
//         });

//         document.getElementById("cartTotal").textContent = total.toFixed(2);
//     }
// });

// // CSS styles for cart sidebar
// document.head.insertAdjacentHTML("beforeend", `
//     <style>
//         .cart-sidebar {
//             position: fixed;
//             right: -300px;
//             top: 0;
//             width: 300px;
//             height: 100vh;
//             background: white;
//             box-shadow: -2px 0 5px rgba(0,0,0,0.3);
//             transition: right 0.3s ease-in-out;
//             padding: 20px;
//             overflow-y: auto;
//         }
//         .cart-sidebar.open {
//             right: 0;
//         }
//         .cart-header {
//             display: flex;
//             justify-content: space-between;
//             align-items: center;
//             border-bottom: 1px solid #ccc;
//             padding-bottom: 10px;
//         }
//         #closeCart {
//             background: none;
//             border: none;
//             font-size: 20px;
//             cursor: pointer;
//         }
//         .cart-item {
//             padding: 10px 0;
//             border-bottom: 1px solid #eee;
//         }
//         .cart-footer {
//             margin-top: 20px;
//             font-weight: bold;
//         }
//     </style>
// `);
