document.addEventListener('DOMContentLoaded', () => {
    const itemName = localStorage.getItem('orderItem') || 'Unknown';
    const itemPrice = parseFloat(localStorage.getItem('orderPrice')) || 0;
    const quantityInput = document.getElementById('quantity');
    const totalPriceElement = document.getElementById('totalPrice');

    document.getElementById('itemName').textContent = itemName;
    document.getElementById('itemPrice').textContent = itemPrice.toFixed(2);
    document.getElementById('item').value = itemName; // 🔹 Remplit le champ caché
    totalPriceElement.textContent = (itemPrice * quantityInput.value).toFixed(2);
    document.getElementById('total_price').value = (itemPrice * quantityInput.value).toFixed(2); // 🔹 Remplit le champ caché

    quantityInput.addEventListener('input', () => {
        const quantity = parseInt(quantityInput.value) || 1;
        const newTotal = (itemPrice * quantity).toFixed(2);
        totalPriceElement.textContent = newTotal;
        document.getElementById('total_price').value = newTotal; // 🔹 Met à jour le champ caché
    });
});
