

function postAd() {
    const proTitle = document.getElementById('title').value;
    const proLocation = document.getElementById('location').value;
    const proDiscription = document.getElementById('description').value;
    const proPrice = document.getElementById('price').value;
    const proimg = document.getElementById('image').files[0];

    if (proTitle && proLocation && proDiscription && proPrice && proimg) {
        
        const imagePath = `./img/${proimg.name}`;

        const productCard = {
            title: proTitle,
            location: proLocation,
            description: proDiscription,
            price: proPrice,
            image: imagePath, 
        };


        let products = JSON.parse(localStorage.getItem('products')) || [];

        products.push(productCard);

        localStorage.setItem('products', JSON.stringify(products));

        
        URL.revokeObjectURL(imageURL);

        formClear();

        alert("Form submitted successfully!");
    } else {

        alert("Please fill all product details!");
    }
}

function formClear() {

    document.getElementById('title').value = '';
    document.getElementById('location').value = '';
    document.getElementById('description').value = '';
    document.getElementById('price').value = '';
    document.getElementById('image').value = '';
}

