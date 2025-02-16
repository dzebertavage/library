const bookTitleContainer = document.querySelector(".book-title-container");
const authorContainer = document.querySelector(".author-container");
const deleteContainer = document.querySelector(".delete-container");
// const readContainer = document.querySelector(".read-container");
const addBookButton = document.querySelector(".add-book");
const addBookDialog = document.querySelector("#addBook");
const submitButton = document.querySelector("#submitButton");
const cancelButton = document.querySelector("#cancelButton");

const myLibrary = [
    {   "index": "0",
        "title": "Apathy",
        "author": "Paul Neilan"
    },
    {
        "index": "1",
        "title": "Democracy or Else",
        "author": "Jon Favreau"
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

function printDeleteButtons(myLibrary){
    for (i = 0; i < myLibrary.length; i++) {
        const newDiv = document.createElement("div");
        const newDeleteButton = document.createElement("button");
        deleteContainer.appendChild(newDiv);
        newDiv.appendChild(newDeleteButton);
        newDeleteButton.textContent = "X";
        newDeleteButton.classList.add("delete-button");
    }
}

// function printReadButtons(myLibrary) {
//     for (i = 0; i < myLibrary.length; i++) {
//         const newDiv = document.createElement("div");
//         const newReadButton = document.createElement("button");
//     }
// }

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
    printDeleteButtons(myLibrary);
}

printLibrary(myLibrary);

addBookButton.addEventListener("click", () => {
    addBookDialog.showModal();
});