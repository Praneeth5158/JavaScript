let productsContainer = document.getElementById("productsContainer");
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

function addToCart(value){
    console.log("button clicking",value)
}