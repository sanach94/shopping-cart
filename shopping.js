// var heart= document.getElementById('heart')
// function Toggle(){
// if(heart.classList.contains ("far")){
// heart.classList.remove("far");
// heart.classList.add("fas");}
// else {
//     heart.classList.remove("fas");
//     heart.classList.add("far");}
// }
var removeCartItemButton = document.getElementsByClassName("btn");
for (i = 0; i < removeCartItemButton.length; i++) {
  var button = removeCartItemButton[i];
  button.addEventListener("click", removeCartItem);
}
function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.remove();
}
// var inputValue= document.getElementsByClassName('input')
// while(typeof(inputValue) != Number  && inputValue <= 1 ){
// inputValue=1;
// console.log(inputValue);
// }
// var addQuantity= document.getElementsByClassName('cart-quantity-add')
// var inputValue= document.getElementsByClassName('input')
// addQuantity.addEventListener('click', addQ());

// function addQ (event) {
// inputValue.value = inputValue.value + 1;
// }

var hearts = document.getElementsByClassName("fa-heart");
Array.from(hearts).map((el) => {
  el.addEventListener("click", () => {
    el.classList.toggle("red");
  });
});
console.log(Array.from(hearts));

// function add(){

// }
// const add = () => {

// }
var plus = document.getElementsByClassName("cart-quantity-add");
var total = document.querySelector(".total-money");

Array.from(plus).map((el) => {
  el.addEventListener("click", () => {
    el.nextElementSibling.innerHTML =
      parseInt(el.nextElementSibling.innerHTML) + 1;
  var priceItem= parseFloat(el.parentElement.previousElementSibling.innerHTML.replace('$', ''))
console.log(priceItem);
console.log(total)
total.innerHTML = parseFloat(total.innerHTML.replace('$', '')) + parseFloat(priceItem) + '$' ;
  });
});

var minus = document.getElementsByClassName("cart-quantity-minus");

Array.from(minus).map((el) => {
  el.addEventListener("click", () => {
    if (el.previousElementSibling.innerHTML != 0) {
      el.previousElementSibling.innerHTML =
        parseInt(el.previousElementSibling.innerHTML) - 1;
        var priceItem= parseFloat(el.parentElement.previousElementSibling.innerHTML.replace('$', ''))
        console.log(priceItem);
        console.log(total)
        total.innerHTML = parseFloat(total.innerHTML.replace('$', '')) - parseFloat(priceItem) + '$'  ;
    }
  });
});

var price = document.getElementsByClassName("cart-price");
var quantity = document.getElementsByClassName("quantity");


// var total= document.getElementsByClassName("total-money")

// Array.from(total).map((el) =>{
