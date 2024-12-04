
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

function submit(){
    alert("Messages Submited");
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('email').value = '';
    document.getElementById('msg').value = '';
}


