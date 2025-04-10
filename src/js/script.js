let cartBtn = document.getElementById('cart-btn');
let cartModal = document.getElementById('cart-modal')
let closeModalBtn = document.getElementById('close-modal-btn')
let cart = [];
let cartCount = document.getElementById('cart-count');
let cartItems = document.getElementById('cart-items');
let cartTotal = document.getElementById('cart-total');
let addItensBtns = document.querySelectorAll('.add-to-card-btn');
let checkoutBtn = document.getElementById('checkout-btn');
let checkoutModal = document.getElementById('checkout-modal')
let cancelCheckoutBtn = document.getElementById('cancel-checkout-btn');
let finishBtn = document.getElementById('finish-checkout-btn');

cartBtn.addEventListener('click', () => {
    cartModal.classList.remove("hidden")
})

closeModalBtn.addEventListener('click', () => {
    cartModal.classList.add("hidden")
})


function updateCart() {
    cartCount.textContent = cart.length;
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
        const cartItem = document.createElement('div');
        cartItem.classList.add('flex', 'justify-between', 'items-center', 'mb-2');
        cartItem.innerHTML = `
            <span>${item.name} (x${item.quantity})</span>
            <span>R$ ${(item.price * item.quantity).toFixed(2)}</span>
        `;
        cartItems.appendChild(cartItem);
    });

    cartTotal.textContent = total.toFixed(2);
}

addItensBtns.forEach(button => {
    button.addEventListener('click', () => {
        const name = button.getAttribute('data-name');
        const price = parseFloat(button.getAttribute('data-price'));
        const existingItem = cart.find(item => item.name === name);

        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ name, price, quantity: 1 });
        }

        updateCart();
    });
});

checkoutBtn.addEventListener('click', () => {
    cartModal.classList.add("hidden")
    checkoutModal.classList.remove("hidden")
})

cancelCheckoutBtn.addEventListener('click', () => {
    checkoutModal.classList.add("hidden");
    cartModal.classList.remove("hidden")
});

finishBtn.addEventListener('click', (event) => {
    event.preventDefault()
    alert('Pedido Finalizado com Sucesso!')
})