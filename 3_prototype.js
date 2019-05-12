// Constructor
function Book(title,author,year){
    this.title=title;
    this.author=author;
    this.year=year;
};

// Prototype
Book.prototype.getSummary=function(){
    return `${this.title} was written by ${this.author} in year ${this.year}`;
};
Book.prototype.getAge=function(){
    return new Date().getFullYear() - this.year;
};
Book.prototype.revise=function(newYear){
    this.year = newYear;
    this.revised = true;
};

// Instantiate an object
const book1 = new Book('Algorithms','Tom','2003');

console.log(book1);
console.log(book1.getSummary());
console.log(book1.getAge());
book1.revise(2006);
console.log(book1);