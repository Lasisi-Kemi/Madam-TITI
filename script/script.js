const hamburger = document.querySelector(".button-harmburger");
const navMenu = document.querySelector(".header-container-navs-nav-nav-list");
const navLink = document.querySelectorAll(".nav-link")

hamburger.addEventListener("click", mobileMenu)

function mobileMenu () {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    console.log("You are pressing me");
}

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu () {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

let formSubmit = document.getElementById("form-submit");

formSubmit.addEventListener('submit', ()=>{
    event.preventDefault()
    document.getElementById("subscribed-pop-up").style.display = "block"
    setTimeout(()=> {document.getElementById("subscribed-pop-up").style.display = "none"}, 2000)
    return false
})


// document.getElementById("form-submit").addEventListener("submit", ()=>{
// event.preventDefault()
// document.getElementById("subscribed-pop-up").style.display = "block"
  
// setTimeout(()=> {document.getElementById("subscribed-pop-up").style.display = "none"}, 3000)
//     return false
// })
let my_cart_list = {}
let openShopping =document.querySelector('.header-container-order-container');
let closeShopping = document.querySelector('.closeshopping');
let list = document.querySelector('.food-section-container-flex');
let listCart = document.querySelector('.listcart');
let body = document.querySelector('.orderbody');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');
let addChartquantity = document.querySelectorAll('.food-section-container-box-flex-two');
let priceList = document.querySelectorAll('.food-section-container-box-flex-one-bigtext');
let showInCart = document.querySelectorAll('.food-section-container-box')

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

// console.log(openShopping)
let products = document.querySelectorAll('food-section-container-box')
let listCarts = [];

// addChartquantity
addChartquantity.forEach((element, i)=>{
    element.addEventListener('click', () => addToCart(i));
})

function addToCart(value) {
    if (!my_cart_list[value]){
        count = parseInt(quantity.innerHTML) + 1
        quantity.innerHTML = count;
        my_cart_list[value] = true
        total.innerHTML = parseInt(total.innerHTML) + parseInt(priceList[value].innerHTML.replace(",", "").replace("#",""));
        console.info(showInCart[value].innerHTML)
        listCart.innerHTML += showInCart[value].innerHTML.replace('<img src="./assets/cart.svg">', '').replace('<p class="food-section-container-box-flex-one-smalltext">Per serving dish</p>', '')     
    }

}