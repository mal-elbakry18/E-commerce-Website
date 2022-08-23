let addButtons = document.querySelectorAll('.addToCart');

let products =[
    {
        name: 'Shoes',
        tag: 'shoes1',
        price: 90,
        count: 0
    },
    {
        name: 'Glasses',
        tag: 'glasses1',
        price: 225,
        count: 0
    },
    {
        name: 'Hoodie' ,
        tag: 'hoodie1',
        price: 100,
        count: 0
    },
    {
        name: 'Watch',
        tag: 'watch',
        price: 150,
        count: 0
    },
    {
        name: 'Plant',
        tag: 'plant1',
        price: 85,
        count: 0
    },
    {
        name: 'Frame',
        tag: 'frame1',
        price: 75,
        count: 0
    },
    {
        name: 'Perfume',
        tag: 'perfume1',
        price: 285,
        count: 0
    },
    {
        name: 'Scarf',
        tag: 'scarf1',
        price: 165,
        count: 0
    },
    {
        name: 'Lamp',
        tag: 'lamp1',
        price: 235,
        count: 0
    }
]




for(let i=0; i<addButtons.length; i++){
    addButtons[i].addEventListener('click', ()=>{
        addedNumber(products[i]);
        calcPayment(products[i]);
    })
}

function onLoadAddedNumber(){
    let productsNumber = localStorage.getItem('addedNumber');
    if(productsNumber){
        document.querySelector('.cart-icon span').innerHTML = productsNumber;
    }
}



function addedNumber (product){

    let productsNumber = localStorage.getItem('addedNumber');

    productsNumber = parseInt(productsNumber);

    if(productsNumber){
        localStorage.setItem('addedNumber', productsNumber + 1);
        document.querySelector('.cart-icon span').innerHTML = productsNumber + 1;
    }else{
        localStorage.setItem('addedNumber', 1);
        document.querySelector('.cart-icon span').innerHTML = 1;
    }
    setItems(product);
}

onLoadAddedNumber();

function setItems(product){
    let itemsInCart = localStorage.getItem('productsInCart');
    itemsInCart = JSON.parse(itemsInCart);

    if(itemsInCart != null){
        if(itemsInCart[product.tag] == undefined){
            itemsInCart = {
                ...itemsInCart,
                [product.tag] : product
            }
        }
        itemsInCart[product.tag].count += 1;
    }else{
        product.count = 1;

        itemsInCart = {
            [product.tag] : product
        }
    }

    localStorage.setItem('productsInCart', JSON.stringify(itemsInCart));
}


function calcPayment(product){
    
    let totalPrice = localStorage.getItem('totalPayment');
    
    if (totalPrice != null){
        totalPrice = parseInt(totalPrice);
        localStorage.setItem('totalPayment', totalPrice + product.price); 
    }else{
        
        localStorage.setItem('totalPayment', product.price); 
    }
}

function displayInCart(){
    let itemsInCart = localStorage.getItem('productsInCart');
    itemsInCart = JSON.parse(itemsInCart);

    
    let cartContainer = document.querySelector('.addedProducts');
    let totalPrice = localStorage.getItem('totalPayment');

    if(itemsInCart && cartContainer){
        cartContainer.innerHTML = '';
        Object.values(itemsInCart).map(item => {
            cartContainer.innerHTML += `
            <div class="addProduct">
            <i class="fa-solid fa-trash-can"></i>
                <img src="/assets/pics/${item.tag}.webp">
                <span>${item.name}</span>
            </div>
            <div class="cart-price bord">$${item.price}.00</div>
            <div class="quantity bord">
            <span>${item.count}</span>
            </div>
            <div class="total bord">
            $${item.count * item.price}.00
            </div>
            `
        });

        cartContainer.innerHTML +=`
        <div class="cartTotal-container">
            <h3 class="cartTotal-title fpoppins">
            Cart Total
            </h3>
            <h3 class="cartTotal fpoppins">$${totalPrice}.00</h3>
        </div>
        
        ` 
    }
}

displayInCart();