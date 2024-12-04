

function postAd() {
    const proTitle = document.getElementById('title').value;
    const proLocation = document.getElementById('location').value;
    const proDiscription = document.getElementById('description').value;
    const proPrice = document.getElementById('price').value;
    const proimg = document.getElementById('image').files[0];

    if (proTitle && proLocation && proDiscription && proPrice && proimg) {
        
         const reader = new FileReader();

         reader.onload = function() {

          const encodeImg = reader.result;

        const productCard = {
            title: proTitle,
            location: proLocation,
            description: proDiscription,
            price: proPrice,
            image: encodeImg, 
        };


        let products = JSON.parse(localStorage.getItem('products')) || [];

        products.push(productCard);

        localStorage.setItem('products', JSON.stringify(products));

        formClear();
        alert("Product added successfully !");
      };

       reader.readAsDataURL(proimg);

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

