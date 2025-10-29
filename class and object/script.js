/*
let title="C programming";
let author="Praneeth";
let pages=200;
let cost=300;

let title2="C programming";
let author2="Praneeth";
let pages2=200;
let cost2=300;

let title3="C programming";
let author3="Praneeth";
let pages3=200;
let cost3=300;

let title4="C programming";
let author4="Praneeth";
let pages4=200;
let cost4=300;
*/

//In the above case if we need to print 1000 books means we need to use 1000 variables which is time waste work for that we can use classes and objects

class Book{
    constructor(title,author,pages,cost){
        this.title=title;
        this.author=author;
        this.pages=pages;
        this.cost=cost;
    }
}

obj1=new Book('C programming','Praneeth',200,300);
obj2=new Book('Python','Praneeth',300,400);
obj3=new Book('Html','Praneeth',140,300);
obj4=new Book('CSS','Praneeth',130,200);
//here praneeth is common so we can declare that in static
console.log(obj1);
console.log(obj2);
console.log(obj3);
console.log(obj4);
console.log(obj1.author);