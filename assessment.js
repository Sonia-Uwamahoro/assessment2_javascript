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

let getBooksByAuthor = (author) =>{
    let allAuthorsBook = books.title
    for(i =0; i < allAuthorsBook.length; i++){
        if( allAuthorsBook[i].match(author)){
            return allAuthorsBook[i]
        }
    }
}

getBooksByAuthor("J.D. Salinger");


// Create a function addNewBook that takes a book object as an argument and adds it
// to the library, ensuring that the new book has all required properties (title, author,
// publicationYear, and isAvailable).


let addNewBook = (title, author, publicationYear, isAvailable) =>{

    let newBookTittle = books.title;
    let newBookAuthor = books.author;
    let newPublicationYear = books.publicationYear;
    let newBookAvailability = books.isAvailable;

    Object.books.push(newBookTittle,newBookAuthor, newPublicationYear,newBookAvailability);

}

addNewBook("before moon light", "John Mayer", 1290, false)



// Create a function checkoutBook that takes a book title as an argument and changes
// the book's isAvailable property to false. If the book is not found in the library, the
// function should return a message indicating that the book is not available.

let checkOutBook = (title) => {

    for(availability of books.isAvailable){
    if(availability === true){
        let newStatus = books.availability;
        books.availability = false
        console.log(newStatus);
    }

    else{
        console.log("the book is not available");
    }
}
}
checkOutBook("The Odyssey");


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





