const smallContainer = document.querySelector('.small-container');

let products = [
    {
        name: 'Shoes',
        tag: 'shoes1',
        price: 90,
        count: 0,
        gender: '1'
    },
    {
        name: 'Glasses',
        tag: 'glasses1',
        price: 225,
        count: 0,
        gender: '1'
    },
    {
        name: 'Hoodie' ,
        tag: 'hoodie1',
        price: 100,
        count: 0,
        gender: '1'
    },
    {
        name: 'Watch',
        tag: 'watch',
        price: 150,
        count: 0,
        gender: '1'
    },
    {
        name: 'Plant',
        tag: 'plant1',
        price: 85,
        count: 0,
        gender: '0'
    },
    {
        name: 'Frame',
        tag: 'frame1',
        price: 75,
        count: 0,
        gender: '0'
    },
    {
        name: 'Perfume',
        tag: 'perfume1',
        price: 285,
        count: 0,
        gender: '0'
    },
    {
        name: 'Scarf',
        tag: 'scarf1',
        price: 165,
        count: 0,
        gender: '0'
    },
    {
        name: 'Lamp',
        tag: 'lamp1',
        price: 235,
        count: 0,
        gender: '0'
    }
]
showMens()

function showMens(){
    for(let i = 0; i < products.length; i++){
        if(products[i].gender == 1){
            smallContainer.innerHTML += ` <div class="product fpoppins ">
            <img src="/assets/pics/${products[i].tag}.webp" alt="I Am A Product" ">
            <div class="star">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </div>
            <h3>${products[0].tag}</h3>
            <h4>EGP ${products[0].price}</h4>
            <button class="QuickView btn addToCart">Add To Cart</button>
        </div>`
        }
    }
}