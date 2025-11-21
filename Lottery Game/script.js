const ticket=document.getElementById("pick_number");
let result=document.getElementById("result");
let lotterySheetContainer = document.getElementById("lotterySheetContainer");

let gifts=[
    "₹100 Cash",
    "Toy Car",
    "Chocolate Box",
    "₹500 Cash",
    "SmartPhone Cover",
    "Book",
    "HeadPhones",
    "₹50 Cash",
    "Gift Voucher",
    "Watch",
    "Teddy Bear",
    "Bluetooth Speaker",
    "Movie Ticket",
    "₹200 Cash",
    "Puzzle Game",
    "Perfume",
    "Sunglasses",
    "₹1000 Cash",
    "Board Game",
    "Fitness Band",
    "Digital Clock",
    "Lamp",
    "Shopping Voucher",
    "Laptop Bag",
    "Wireless Mouse",
    "Travel Mug",
    "Notebook Set",
    "Gaming MousePad",
    "₹250 Cash",
    "Keychain",
    "Water Bottle",
    "Portable Charger",
    "Desk Organizer",
    "Cooking Set",
    "Action Figure",
    "₹300 Cash",
    "Travel Pillow ",
    "Mini Backpack",
    "Personalized Mug",
    "Gaming Controller",
    "Camera Strap ",
    "Toy Robot",
    "₹750 Cash",
    "Sports Equipment",
    "Pen Set",
    "Bluetooth Earbuds",
    "Digital Photo Frame",
    "wallet",
    "Backpack ",
    "Gift Hamper"
]



ticket.addEventListener("click",function(){
    let randnum = Math.random();
    let floornum = Math.floor((randnum*50)+1);
    result.innerHTML = floornum;
    item.innerHTML = `Congratulations You Got "${gifts[floornum-1]}"`;

})

gifts.forEach(function(value,i){
    let boxelement=`<div class="Box">${i+1}. ${value}<div>`
    console.log(boxelement);
    lotterySheetContainer.insertAdjacentHTML("beforeend",boxelement);
})