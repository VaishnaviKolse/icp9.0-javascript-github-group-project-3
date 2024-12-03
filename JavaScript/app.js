
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


// slider-code

let allimg  = [
    "./img/car.png",'./img/house-banner.png','./img/iphone-pro-14.png','./img/splenderimg-removebg-preview.png','./img/tablet-removebg-preview.png','./img/home-banner-img.png',
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


//filter by location

document.addEventListener('DOMContentLoaded', function () {

    const selectBox = document.getElementById('select-option');

    const cards = document.querySelectorAll('.product-card');

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


//searching product

const productInput = document.getElementById('product-search-input');
const ProducTitle = document.querySelectorAll('.product-title');
   
    function searchProduct(){
        const searchPro = productInput.value;

        cards.forEach(card => {
           // const cardTitle = card.querySelector('.product-title')

        if(ProducTitle.includes(searchPro)){
            
            card.style.display = 'block';
        }


            
        });

    }


//search product by name


function searchProduct() {

    const searchQuery = document.getElementById('product-search-input').value.toLowerCase();
    

    const productCards = document.querySelectorAll('.product-card');
    

    productCards.forEach(card => {

        const productTitle = card.querySelector('.product-title').textContent.toLowerCase();
        
        if (productTitle.includes(searchQuery) && searchQuery !== "") {
            card.style.display = 'block'; // Show the card
        } else {
            card.style.display = 'none'; // Hide the card
        }
    });
}


//dynamically adding  card 

const products = JSON.parse(localStorage.getItem('products') || []);

const cardContainer = document.getElementById('products-card-container');

if(products.length > 0){

  products.forEach(product => {
    
  const productCard = `
        <div class="product-card">
        <div class="product-image">
          <img src="${product.image}" alt="Product Image">
        </div>
        <div class="product-details">
          <h2 class="product-title">${product.title}</h2>
          <p class="product-location">
            <i class="fa fa-map-marker"></i>${product.location}
          </p>
          <p class="product-description">
           ${product.description}
          </p>
          <div class="product-information">
            <span class="product-price">₹ ${product.price}</span>
            <button class="btn secondary-btn">View Details</button>
          </div>
         </div>
        </div>`;

        cardContainer.innerHTML += productCard;

    });
    
}else{
    cardContainer.innerHTML += "<p>No product addded !!!!!</p>";
}


