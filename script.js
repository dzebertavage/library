const bookTitleContainer = document.querySelector(".book-title-container");
const authorContainer = document.querySelector(".author-container");
const addBookButton = document.querySelector(".add-book");
const addBookDialog = document.querySelector("#addBook");
const submitButton = document.querySelector("#submitButton");
const cancelButton = document.querySelector("#cancelButton");

const myLibrary = [
    {   "index": "0",
        "title": "Apathy and Other Small Victories",
        "author": "Paul Neilan"
    },
    {
        "index": "1",
        "title": "Democracy or Else",
        "author": "Jon Favreau, Jon Lovett, Tommy Vietor"
    },
    {
        "index": "2",
        "title": "Third Book",
        "author": "Third Author"
    },
    {
        "index": "3",
        "title": "Fourth Book",
        "author": "Fourth Author"
    }
];


function addBookToLibrary() {

}

function printTitles(myLibrary) {
    for (i = 0; i < myLibrary.length; i++) {
        const newDiv = document.createElement("div");
        bookTitleContainer.appendChild(newDiv);
        newDiv.textContent = myLibrary[i].title;
    }
}

function printAuthors(myLibrary) {
    for (i = 0; i < myLibrary.length; i++) {
        const newDiv = document.createElement("div");
        authorContainer.appendChild(newDiv);
        newDiv.textContent = myLibrary[i].author;
    }
}

function printLibrary(myLibrary) {
    bookTitleContainer.innerHTML = "";
    authorContainer.innerHTML = "";
    printTitles(myLibrary);
    printAuthors(myLibrary);
}

printLibrary(myLibrary);

addBookButton.addEventListener("click", () => {
    addBookDialog.showModal();
});