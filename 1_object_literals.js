// Object literal
const Book={
    title:'The Moon',
    author:'daisy',
    year:'2001',
    getSummary: function(){
        return `${this.title} was written by ${this.author} in year ${this.year}`
    }
};

console.log(Book.title);
console.log(Book.getSummary());