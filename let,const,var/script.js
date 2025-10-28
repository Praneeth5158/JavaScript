/* 
let = can be reassigned but not redeclared (use when value changes) 
const = cannot be reassigned or redeclared 
var = can be reassigned and redeclared(in modern js this is not using) 
*/

const const_ex=10;
//const_ex=3; (this shows an error because we cannot reassigned )
console.log(`my constant value is ${const_ex}`);

let let_ex=2;
let_ex=20; //(we are reassigning)
console.log(`my let value is ${let_ex}`);

var var_ex=100;
var var_ex=200;
console.log(`my var value is ${var_ex}`);