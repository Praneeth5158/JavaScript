let number=document.getElementById("number");
let incre=document.getElementById("increm");
let decrem=document.getElementById("decrem");
let clear=document.getElementById("clear");
let content=document.getElementById("content");
count=0;
incre.addEventListener("click",function(){
    count=count+1;
    number.textContent = count;
})

decrem.addEventListener("click",function(){
    if (count>0){
        count=count-1;
    }
    number.textContent = count;
})

clear.addEventListener("click",function(){
    count=0
    number.textContent=count;
})