const books =[
{ title: 'The Catcher in the Rye',
 author: 'J.D. Salinger', 
 publicationYear: 1951,
isAvailable: true
},

{ title: 'Great Expectations', 
author: 'Charles Dickens', 
publicationYear: 1861,
isAvailable: false },

{ title: 'Crime and Punishment', 
author: 'Fyodor Dostoevsky', 
publicationYear:1866, 
isAvailable: true },

{ title: 'The Great Gatsby', 
author: 'F. Scott Fitzgerald', 
publicationYear: 1925,
isAvailable: false },

{ title: 'The Odyssey', 
author: 'Homer', 
publicationYear: -800, 
isAvailable: true },
];


// Create a function called getAvailableBooks that returns an array of all available books.
function gav(books){
    return books.filter(book => book.isAvailable)
}
console.log(gav(books));


// Create a function getBooksByAuthor that takes an author's name as an argument and
// returns an array of all books by that author.

let getBooksByAuthor = (books, authorName) =>{
    return books.filter(book => book.author == authorName)
}
let authorName = "Homer"
console.log(getAvailableBooks(books, authorName))


// Create a function addNewBook that takes a book object as an argument and adds it
// to the library, ensuring that the new book has all required properties (title, author,
// publicationYear, and isAvailable).


  let addNewBook = (book) =>{
            if(book.title || book.author || book.publicationYear || book.isAvailable){
                return books.push(book)
            }
        }
        let newbook = {title:"born a crime", author:"trevor noah", publicationYear:2023, isAvailable:true}
        console.log(addNewBook(newbook));
        addNewBook(books)


// Create a function checkoutBook that takes a book title as an argument and changes
// the book's isAvailable property to false. If the book is not found in the library, the
// function should return a message indicating that the book is not available.


  let checkOutBook = (title) => {
        let bookkIndex = books.findIndex(book => book.title == title);
        if(bookkIndex == -1){
            return "available"
        }
        book[bookkIndex].isAvailable = false;
        return "not availbable"
    }

    let title = "born a crime"
    console.log(checkOutBook(title));


// Create a function returnBook that takes a book title as an argument and changes the
// book's isAvailable property to true. If the book is not found in the library, the function
// should return a message indicating that the book does not belong to the library.


let returnBook = (title) =>{
     for(availabe of books.isAvailable){
        if(availabe === false){
        let newAvailaleStatus = books.availability;
        books.availability = true
        console.log(newAvailaleStatus);
        }
        else{
            console.log("the book does not belong to the library");
        }
     }
}
returnBook("The Catcher in the Rye")





