
// side-bar-code

const sidebar = document.getElementById('side-bar');
const menuIcon = document.getElementById('menu-icon');

function openSideBar() {
  sidebar.classList.add('active'); 
  menuIcon.style.display = 'none'; 
}

function closeIcon() {
  sidebar.classList.remove('active'); 
  menuIcon.style.display = 'block';
}

let allimg  = [
    "../img/car.png",'../img/splenderimg-removebg-preview.png','../img/black-car.png','../img/black-motorcycle.png',
];
let index = 0;
let images = document.getElementById('new');


function next() {
    if(index<allimg.length-1){
        index++;
    }else{
        index = 0;
    }
    images.src = allimg[index]
}
setInterval(
    next,2000
);

document.addEventListener('DOMContentLoaded', function () {

    const selectBox = document.getElementById('select-option');

    const cards = document.querySelectorAll('.products-card');

    selectBox.addEventListener('change', function () {
       
        const selectedLocation = selectBox.value;

        cards.forEach(card => {
          
            const cardLocation = card.querySelector('.product-location').textContent;

            if (selectedLocation === "Select Location" || cardLocation.includes(selectedLocation)) {
                card.style.display = "block"; 
            } else {
                card.style.display = "none"; 
            }
        });
    });
});

function searchProduct() {

    const searchQuery = document.getElementById('product-search-input').value.toLowerCase();
    

    const productCards = document.querySelectorAll('.products-card');
    

    productCards.forEach(card => {

        const productTitle = card.querySelector('.product-title').textContent.toLowerCase();
        
        if (productTitle.includes(searchQuery) && searchQuery !== "") {
            card.style.display = 'block'; // Show the card
        } else {
            card.style.display = 'none'; // Hide the card
        }
    });
}

function up(){
    const sidebar = document.getElementById('sidebar-container');
    const up = document.getElementById('up-arrow');
    const down = document.getElementById('down-arrow');

    down.style.visibility = 'visible'
    sidebar.style.visibility = 'hidden';
    up.style.visibility = 'hidden';
}

function down(){
    const sidebar = document.getElementById('sidebar-container');
    const up = document.getElementById('up-arrow');
    const down = document.getElementById('down-arrow');

    down.style.visibility = 'hidden'
    sidebar.style.visibility = 'visible';
    up.style.visibility = 'visible';
}

function uparrow(){
    const sidebar = document.getElementById('sidebar-container2');
    const up = document.getElementById('up-arrow2');
    const down = document.getElementById('down-arrow2')

    down.style.visibility = 'visible'
    sidebar.style.visibility = 'hidden';
    up.style.visibility = 'hidden';
}

function downarrow(){
    const sidebar = document.getElementById('sidebar-container2');
    const up = document.getElementById('up-arrow2');
    const down = document.getElementById('down-arrow2')

    down.style.visibility = 'hidden'
    sidebar.style.visibility = 'visible';
    up.style.visibility = 'visible';
}

function filterByVehicle(vehicle) {
    
    const cardelement = document.querySelectorAll('.products-card');
    
    cardelement.forEach(card1 => {
        
        const productName = card1.querySelector('.product-title').textContent;

        if (productName.includes(vehicle)) {
            card1.style.display = 'block';  
        } else {
            card1.style.display = 'none';  
        }
    });
}

function filterByLocation(location) {
    
    const cardElement = document.querySelectorAll('.products-card');
    
    cardElement.forEach(card => {
        
        const productLocation = card.querySelector('.product-location').textContent;

        if (productLocation.includes(location)) {
            card.style.display = 'block';  
        } else {
            card.style.display = 'none';  
        }
    });
}