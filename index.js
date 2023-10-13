//add to cart function
var cart = [];
var cartTotal = 0;

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    cartTotal += productPrice;
    updateCartDisplay();
}
////update
function updateCartDisplay() {
    var cartList = document.getElementById('cart-list');
    var cartTotalElement = document.getElementById('cart-total');
    cartList.innerHTML = '';
    cart.forEach(function (item) {
        var li = document.createElement('li');
        li.textContent = item.name + ' - DT' + item.price;
        cartList.append(li);
    });
    cartTotalElement.textContent = cartTotal;
}
////checkout
function checkout() {
    alert('Thank you for your purchase! Total: DT ' + cartTotal);
    cart = [];
    cartTotal = 0;
    updateCartDisplay()
}
/////logout function
document.getElementById("button").addEventListener("click",function(){
  localStorage.removeItem("username")
  localStorage.removeItem("email")
  localStorage.removeItem("password")
  window.location.href='./login.html'
})
