let productsContainer = document.getElementById("productsContainer");
let cartContainer = document.getElementById("cartContainer");
let feedbackElement = document.getElementById("feedback");
let clearCartBtn = document.getElementById("clearcart");
let sortByPriceBtn = document.getElementById("sort");

let products=[
    {
        id:1,
        name:"Laptop",
        price:50000,
    },
    {
        id:2,
        name:"Phone",
        price:20000,
    },
    {
        id:3,
        name:"Tablet",
        price:5000,
    },
    {
        id:4,
        name:"Smartwatch",
        price:1000,
    },
    {
        id:5,
        name:"Headphones",
        price:500,
    },
]
let cart=[];
products.forEach(function(product){
    //    const productRow=`
    //    <div class="product-row">
    //         <p><strong>${product.name}</strong> - Rs.${product.price}</p>
    //         <button>Add to Cart</button>
    //    </div>
    //    `;
    //    productsContainer.insertAdjacentHTML("beforeend",productRow);

    const divElement = document.createElement("div");
    divElement.className="product-row";
    divElement.innerHTML = `  
    <p><strong>${product.name}</strong> - Rs.${product.price}</p>
    <button onclick="addToCart(${product.id})">Add to Cart</button>`
    productsContainer.appendChild(divElement);

})
function addToCart(id){

    const isProductAvailable = cart.some(function(product){
        return product.id === id;
    })
    if (isProductAvailable){
        updateUserFeedback(` ⚠️ Item is already in the Cart`,"error");
        // feedbackElement.textContent = `Item is already in the Cart`;
        return ;
    }
    const productToAdd = products.find(function(product){
        return product.id === id;
    })
    cart.push(productToAdd);
    renderCartDetails()
    // feedbackElement.textContent = `${name} is added to the cart`;
    updateUserFeedback(`☑️ Item is added to the cart`,"success");
}

function renderCartDetails(){
    cartContainer.innerHTML = "";
    cart.forEach(function(product){
        const {id,name, price}=product;
        const cartItemRow=`
        <div class="product-row">
            <p><strong>${name}</strong> - Rs.${price}</p>
            <button onclick="removeFromCart(${id})">Remove</button>
        </div>
    `
    cartContainer.insertAdjacentHTML("beforeend",cartItemRow);
    })
    let totalPrice = 0;
   for (let i=0;i<cart.length;i++){
    totalPrice = totalPrice + cart[i].price
   }
   document.getElementById('totalPrice').textContent = `Rs.${totalPrice}`;
}

function removeFromCart(id){
    console.log(id);
    const product = cart.find((product)=>product.id===id);
    const updatedCart = cart.filter(function(product){
        return product.id!==id;
    })
    console.log(updatedCart);
    cart = updatedCart;

    updateUserFeedback(`${product.name} is removed from the cart`,"error")
    renderCartDetails();
}

let timerId;
function updateUserFeedback(msg,type){
    clearTimeout(timerId);
    feedbackElement.style.display = "block" ;
    if(type==="success"){
        feedbackElement.style.backgroundColor='green';
        feedbackElement.style.color='white';

    }
    if(type==="error"){
        feedbackElement.style.backgroundColor='red';
    }
    feedbackElement.textContent = msg;


    timerId = setTimeout(function(){
        feedbackElement.style.display = "none" ;
    },3000)
}

clearCartBtn.addEventListener("click",()=>{
    console.log("Cleard");
    cart = [];
    renderCartDetails();
    updateUserFeedback("Card is Cleared","success");
})

sortByPriceBtn.addEventListener("click",()=>{
    cart.sort(function(item1,item2){
        return item1.price-item2.price
    })
    renderCartDetails();
})