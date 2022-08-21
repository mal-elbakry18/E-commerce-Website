const userIcon = document.getElementById('userIcon');
const userBar = document.getElementById('userBar');

userIcon.addEventListener('click', function(){
    userBar.style.opacity = '1';
    
})

document.addEventListener('click', e => {
    const isIcon = e.target.matches('[data-Icon]');
    if(!(isIcon)){
        userBar.style.opacity = '0';
    }
})