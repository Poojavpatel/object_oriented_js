// Constructor
function Movie(){
    console.log('new movie instantiated...');
}

// Instantiate an object
// Whenever an object is instantiated..it runs whatever is in the constructor
const movie1 = new Movie();

// Constructor
function Book(title,author,year){
    this.title=title;
    this.author=author;
    this.year=year;
    this.getSummary=function(){
        return `${this.title} was written by ${this.author} in year ${this.year}`
    }
}
// Instantiate an object
const book1 = new Book('Algorithms','Tom','2003');

console.log(book1);
console.log(book1.getSummary());