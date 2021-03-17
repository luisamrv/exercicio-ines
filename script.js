const toggle = document.getElementById('toggle');
const price = document.getElementById('price-cards');

toggle.addEventListener('change', (e) => {
    price.classList.toggle('switch_price');
});

function popUp(){
    alert("For more information please fill out the contact form");
};