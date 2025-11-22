const a=setTimeout(function(){
    console.log("5 seconds completed");
},5000) // 1second = 1000 millisecond

count =1;

const b= setInterval(function(){
console.log(`${count}`);
count++;
if (count==5){
    clearInterval(b);
}
},1000)

