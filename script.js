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
const readButton = document.querySelector(".read-button");

let newBook = {
    "title": undefined,
    "author": undefined,
    "read": false
};

// const myLibrary = [];

let myLibrary = [
    {   "title": "Apathy",
        "author": "Paul Neilan",
        "read": false
    },
    {
        "title": "Democracy or Else",
        "author": "Jon Favreau",
        "read": false
    },
    {
        "title": "Third Book",
        "author": "Third Author",
        "read": false
    },
    {
        "title": "Fourth Book",
        "author": "Fourth Author",
        "read": false
    }
];

function clearStoredBook(newBook) {
    return newBook = {
        "title": undefined,
        "author": undefined,
        "read": false
    };
}

function printDeleteButtons(myLibrary){
    for (i = 0; i < myLibrary.length; i++) {
        const newDiv = document.createElement("div");
        const newDeleteButton = document.createElement("button");
        deleteContainer.appendChild(newDiv);
        newDiv.appendChild(newDeleteButton);
        newDeleteButton.textContent = "X";
        newDeleteButton.classList.add("delete-button");
        newDeleteButton.id = myLibrary.indexOf(myLibrary[i]);
    }
}

function printReadButtons(myLibrary) {
    for (i = 0; i < myLibrary.length; i++) {
        const newDiv = document.createElement("div");
        const newReadButton = document.createElement("button");
        readContainer.appendChild(newDiv);
        newDiv.appendChild(newReadButton);
        newReadButton.classList.add("read-button");
        newReadButton.id = "a" + myLibrary.indexOf(myLibrary[i]);
        if (myLibrary[i].read === true) {
            const readButtonStyle = document.querySelector(`#a${i}`);
            readButtonStyle.style.backgroundColor = "green";
        }
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
    bookTitleContainer.textContent = "";
    authorContainer.textContent = "";
    printTitles(myLibrary);
    printAuthors(myLibrary);
    printReadButtons(myLibrary)
    printDeleteButtons(myLibrary);
}

function getNewBookInfo(newBook) {
    newBook["title"] = newBookTitleField.value;
    newBook["author"] = newAuthorField.value;
    newBook["read"] = false;
    return newBook;
}

function clearNewBookFields() {
    newBookTitleField.value = "";
    newAuthorField.value = "";
}

function removeAllBooks(myLibrary) {
    bookTitleContainer.textContent = "";
    authorContainer.textContent = "";
    readContainer.textContent = "";
    deleteContainer.textContent = "";
    printLibrary(myLibrary);
    reIdDelete(myLibrary);
}

function reIdDelete(myLibrary) {
    const deleteButton = document.querySelectorAll(".delete-button").forEach(item => {
        item.addEventListener("click", () => {
            let bookIndex = Number(item.id);
            myLibrary.splice(bookIndex, 1);
            removeAllBooks(myLibrary);
        });
    });
}

printLibrary(myLibrary);

addBookButton.addEventListener("click", () => {
    addBookDialog.showModal();
});

cancelButton.addEventListener("click", () => {
    clearNewBookFields();
    addBookDialog.close();
});

submitButton.addEventListener("click", (event) => {
    addBookDialog.close();
    getNewBookInfo(newBook);
    myLibrary.push(newBook);
    clearNewBookFields();
    removeAllBooks(myLibrary);
    newBook = clearStoredBook(newBook);
    event.preventDefault();
});

window.addEventListener("keydown", (e) => {
    if (addBookDialog.hasAttribute("open")) {
        if (e.key === "Escape") {
            clearNewBookFields();
        }
    }
});

window.addEventListener("load", () => {
    const deleteButton = document.querySelectorAll(".delete-button").forEach(item => {
        item.addEventListener("click", () => {
            let bookIndex = Number(item.id);
            myLibrary.splice(bookIndex, 1);
            removeAllBooks(myLibrary);
        });
    });
    const readButton = document.querySelectorAll(".read-button").forEach(item => {
        item.addEventListener("click", () => {
            let bookIndex = item.id;
            const readButtonStyle = document.querySelector(`#${bookIndex}`);
            let bookIndexNum = Number(bookIndex.replace(/\D/g, ''));
            if (myLibrary[bookIndexNum].read === false) {
                myLibrary[bookIndexNum].read = true;
                readButtonStyle.style.backgroundColor = "green";
            }
        });
    });
});