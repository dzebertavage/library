const bookTitleContainer = document.querySelector(".book-title-container");
const authorContainer = document.querySelector(".author-container");
const deleteContainer = document.querySelector(".delete-container");
const readContainer = document.querySelector(".read-container");
const addBookButton = document.querySelector(".add-book");
const addBookDialog = document.querySelector("#addBook");
const submitButton = document.querySelector("#submitButton");
const cancelButton = document.querySelector("#cancelButton");
const newBookTitleField = document.querySelector("#newBookTitle");
const newAuthorField = document.querySelector("#newAuthor");

let newBook = {
    "index": undefined,
    "title": undefined,
    "author": undefined,
    "read": false
};

const myLibrary = [
    {   "index": "0",
        "title": "Apathy",
        "author": "Paul Neilan",
        "read": "false"
    },
    {
        "index": "1",
        "title": "Democracy or Else",
        "author": "Jon Favreau",
        "read": "false"
    },
    {
        "index": "2",
        "title": "Third Book",
        "author": "Third Author",
        "read": "false"
    },
    {
        "index": "3",
        "title": "Fourth Book",
        "author": "Fourth Author",
        "read": "false"
    }
];

function clearStoredBook(newBook) {
    return newBook = {
        "index": undefined,
        "title": undefined,
        "author": undefined,
        "read": false
    };
}

function addBookToLibrary(newBook) {

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

function printReadButtons(myLibrary) {
    for (i = 0; i < myLibrary.length; i++) {
        const newDiv = document.createElement("div");
        const newReadButton = document.createElement("button");
        readContainer.appendChild(newDiv);
        newDiv.appendChild(newReadButton);
        newReadButton.classList.add("read-button");
    }
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
    printReadButtons(myLibrary)
    printDeleteButtons(myLibrary);
}

function getNewBookInfo(newBook) {
    newBook["index"] = myLibrary.length;
    newBook["title"] = newBookTitleField.value;
    newBook["author"] = newAuthorField.value;
    return newBook;
}

printLibrary(myLibrary);

addBookButton.addEventListener("click", () => {
    addBookDialog.showModal();
});

cancelButton.addEventListener("click", () => {
    addBookDialog.close();
});

submitButton.addEventListener("click", (event) => {
    getNewBookInfo(newBook);
    addBookToLibrary(newBook);
    newBookTitleField.value = "";
    newAuthorField.value = "";
    addBookDialog.close();
    newBook = clearStoredBook(newBook);
    event.preventDefault();
});