//prompt is like alert only but user need to enter the details 

/*
const Username=prompt("mee peru cheppagalaraa! ");
console.log(Username);
*/

//we can also able to enter default value

const UserName=prompt("What is your name ? ","Praneeth");
console.log(`${UserName} gaaru ikkadiki vachi koorchondi`);

let height=prompt("Mee height cheppagalaraa");
let weight=prompt("Mee weight cheppagalaraa");
let heightinMeters = height/100;
let BMI= weight / heightinMeters **2;

console.log(`mee height emo ${height}`);
console.log(`mee wieght emo ${weight}`);
console.log(`height in meters is ${heightinMeters}`);
console.log(`your BMI is ${BMI}`);