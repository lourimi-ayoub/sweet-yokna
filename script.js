
$(document).ready(function(){
    
    $(window).scroll(function(){
        if($(this).scrollTop() > 40){
            $('#topbutton').fadeIn();
        }else{
            $('#topbutton').fadeOut();
        } 
    });

    $("#topbutton").click(function(){
        $('html ,body').animate({scrollTop : 0},800);
    });
});





var button = document.getElementById('rightside');

    function Togglebar(){
        button.style.top ="80px";
    } 
    function Hidemenu(){
        button.style.top = "-500px";
        
    }

//////
document.addEventListener('DOMContentLoaded', () => {
    const orderButtons = document.querySelectorAll('.order-button');

    orderButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Prevent default link behavior
            e.preventDefault();

            // Find the parent container
            const parentContainer = button.closest('.Bakery-menu');

            if (parentContainer) {
                // Get the item name and price from the elements with id="data-name" and id="data-price"
                const itemNameElement = parentContainer.querySelector('#data-name');
                const itemPriceElement = parentContainer.querySelector('#data-price');

                if (itemNameElement && itemPriceElement) {
                    const item = itemNameElement.textContent.trim(); // Get the item name
                    const price = parseFloat(itemPriceElement.textContent.replace('$', '')); // Get the price and remove the dollar sign
                    const quantity = 1; // Default quantity

                    // Store the order details in local storage
                    localStorage.setItem('orderItem', item);
                    localStorage.setItem('orderPrice', price);
                    localStorage.setItem('orderQuantity', quantity);

                    // Redirect to the payment page
                    window.location.href = 'payment.html';
                } else {
                    console.error('Item name or price element not found.');
                }
            } else {
                console.error('Parent container not found.');
            }
        });
    });
});