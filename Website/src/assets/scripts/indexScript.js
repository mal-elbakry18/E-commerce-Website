const bestSellerContainer = document.querySelector('.bestSellerproducts')[0]
const scrollRight = document.querySelector('.container')[0]


document.addEventListener('click', e => {
    const isIcon = e.target.matches('[data-Icon]');
    if(!(isIcon)){
        userBar.style.opacity = '0';
    }
})


setInterval(function(){
    
    bestSellerContainer.scrollBy({
        left: 200,
        behavior: 'smooth'
    })
}, 5000)


