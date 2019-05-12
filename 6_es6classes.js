//es6 classes are just syntactic sugar-under the hood they do same as object constructors and prototypes
//es6 class
class Book{
    constructor(title,author,year){
        this.title=title;
        this.author=author;
        this.year=year;
    }
    getSummary(){
        return `${this.title} was written by ${this.author} in year ${this.year}`
    }
    revise(newYear){
        this.year = newYear;
        this.revised = true;
    }
    // Static method - a method that we have in a class which we can use without instantiating an object
    static topBookStore(){
        return `Barnes and Nobles`;
    }
}

//instantiate book object
const book1 = new Book('murder','bella','2002');
console.log(book1);
console.log(book1.getSummary());
book1.revise(2006);
console.log(book1.getSummary());

//call a static method with directly the class name
console.log(Book.topBookStore());