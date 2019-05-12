class Book{
    constructor(title,author,year){
        this.title=title;
        this.author=author;
        this.year=year;
    }
    getSummary(){
        return `${this.title} was written by ${this.author} in year ${this.year}`
    }
}

// create a subclass magazine that inherits class book
// simillar to syntax of react
class Magazine extends Book{
    constructor(title,author,year,month){
        super(title,author,year);
        this.month=month;
    }
}

const mag1 = new Magazine('cosmo','amy','2016','feb');
console.log(mag1);
console.log(mag1.getSummary());