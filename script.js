const bookTitleContainer = document.querySelector(".book-title-container");
const authorContainer = document.querySelector(".author-container");
const addBookButton = document.querySelector(".add-book");
const addBookDialog = document.querySelector("#addBook");

const myLibrary = [
    {   "title": "Apathy and Other Small Victories",
        "author": "Paul Neilan"
    },
    {
        "title": "Democracy or Else",
        "author": "Jon Favreau, Jon Lovett, Tommy Vietor"
    },
    {
        "title": "Third Book",
        "author": "Third Author"
    },
    {
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