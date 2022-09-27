const navBtn = document.getElementById('nav-btn');
const cancelBtn = document.getElementById('cancel-btn');
const sideNav = document.getElementById('sidenav');
const modal = document.getElementById('modal');

navBtn.addEventListener("click", function() {
    sideNav.classList.add('show');
    modal.classList.add('showModal');
});

cancelBtn.addEventListener('click', function() {
    sideNav.classList.remove('show');
    modal.classList.remove('showModal');
});

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        sideNav.classList.remove('show');
        modal.classList.remove('showModal');
    }
});
document.getElementById('btn-signup').addEventListener('click',()=>{
    location.href="/signup"
})
document.getElementById('btn-login').addEventListener('click',()=>{
   
    location.href="/login"
})  
document.getElementById('btn-start').addEventListener('click',()=>{
    location.href="/login"
})
document.getElementById('rightarrow_room').addEventListener('click',()=>{
    location.href="/room"
})
document.getElementById('rightarrow_gallery').addEventListener('click',()=>{
    
    location.href="/gallery"
})
document.getElementById('rightarrow_attraction').addEventListener('click',()=>{
    location.href="/attraction"
})
document.getElementById('roombtn').addEventListener('click',()=>{
    location.href="/room"
})


$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
}

)
