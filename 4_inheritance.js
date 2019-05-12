//Construtor for book
function Book(title,author,year){
    this.title = title;
    this.author=author;
    this.year=year;
};

// Prototype method - getSummary
Book.prototype.getSummary = function(){
    return `${this.title} was written by ${this.author} in year ${this.year}`
};

// instantiate book object
const book1 = new Book('jungle','shawn','2013');
console.log(book1);
console.log(book1.getSummary());

//We want magazine object to inherit book oject
//Constructor for magazine object
function Magazine(title,author,year,month){
    Book.call(this,title,author,year);
    this.month = month;
};
//To inherit prototype of book object
Magazine.prototype = Object.create(Book.prototype);

// instantiate magazine object
const mag1 = new Magazine('cosmo','amy','2017','feb');
console.log(mag1);
console.log(mag1.getSummary());