
const errorMessages = document.getElementsByClassName("errorMessage");

for (let message of errorMessages) {
    message.classList.add("display-none");
}

let authors = ["William Shakespeare", "William Faulkner", "Henry James", "Charles Dickens"];
let authorsDropDown = document.getElementById("author");
authorsDropDown.innerHTML += "<option value='Author'>Author</option>";

for (let i = 0; i < authors.length; i++) {
    authorsDropDown.innerHTML += "<option value=" + authors[i] + ">" + authors[i] + "</option>";
}


let categories = ["General", "History", "Fantasy", "Literary"];

let categoriesDropDown = document.getElementById("categories");
categoriesDropDown.innerHTML = "<option value='Categories'>Categories</option>";
for (let i = 0; i < categories.length; i++) {
    categoriesDropDown.innerHTML += "<option value=" + categories[i] + ">" + categories[i] + "</option>";
}

document.getElementById("applyCourseForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let isFormValid = true;

    const imageURL = document.getElementById("imageURL");
    const regexImageURL = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/
        ;
    const isImageURLValid = regexImageURL.test(imageURL.value);

    toggleErrorMessage(!isImageURLValid, imageURL);

    if (!isImageURLValid) {
        isFormValid = false;
    }
    console.log("IMAGE");
    console.log(isImageURLValid);
    console.log(isFormValid);

    let year = document.getElementById("year");
    const regexYear = /^\d+$/;

    let isYearValid = regexYear.test(year.value);

    if (year.value > 2022) {
        isYearValid = false;
    }

    toggleErrorMessage(!isYearValid, year);

    if (!isYearValid) {
        isFormValid = false;
    }
    console.log("year");
    console.log(isYearValid);
    console.log(isFormValid);


    const title = document.getElementById("title");
    const regexTitle = /^[A-Z][A-Za-z0-9\s]{10,50}$/;

    const isTitlelValid = regexTitle.test(title.value);

    toggleErrorMessage(!isTitlelValid, title);

    if (!isTitlelValid) {
        isFormValid = false;
    }
    console.log("title");
    console.log(isTitlelValid);
    console.log(isFormValid);

    const descriptoin = document.getElementById("descriptoin");
    const regexDescriptoin = /^[A-Za-z0-9\s]{1,250}$/;

    const isDescriptoinValid = regexDescriptoin.test(descriptoin.value);

    toggleErrorMessage(!isDescriptoinValid, descriptoin);

    if (!isDescriptoinValid) {
        isFormValid = false;
    }
    console.log("descriptoin");
    console.log(isDescriptoinValid);
    console.log(isFormValid);

    let ISBN = document.getElementById("ISBN");
    const regexISBN = /^\d+$/;

    let isISBNValid = regexISBN.test(ISBN.value);


    toggleErrorMessage(!isISBNValid, ISBN);

    const author = document.getElementById("author");
    const isAuthorNotValid = author.value == "Author";
    toggleErrorMessage(isAuthorNotValid, author);

    if (isAuthorNotValid) {
        isFormValid = false;
    }
    console.log("author");
    console.log(isAuthorNotValid);
    console.log(isFormValid);

    const categories = document.getElementById("categories");
    const isCategoriesNotValid = categories.value == "Categories";
    toggleErrorMessage(isCategoriesNotValid, categories);

    if (isCategoriesNotValid) {
        isFormValid = false;
    }
    console.log("categories");
    console.log(isCategoriesNotValid);

    console.log(isFormValid);

    if (isFormValid) {
        const add = document.getElementById('add');

        function Book(url, title, author, year, isbn, categories, descriptoin) {
            this.url = url;
            this.title = title;
            this.author = author;
            this.year = year;
            this.categories = categories;
            this.descriptoin = descriptoin;
            this.isbn = isbn;
        }

        function Libary() {
            this.bookList = [];
        }

        Libary.prototype.addbook = function (book) {
            this.bookList.push(book);
            console.log(this.bookList);
        };

        Libary.prototype.clearFields = function () {
            document.getElementById('imageURL').value = '';
            document.getElementById('title').value = '';
            document.getElementById('author').value = 0;
            document.getElementById('year').value = '';
            document.getElementById('categories').value = 0;
            document.getElementById('descriptoin').value = '';
            document.getElementById('ISBN').value = '';
        };
        Libary.prototype.render = function (book) {
            const row = document.createElement('tbody');
            row.innerHTML = `
    // <div class="class1">
    //     <div class="class2">
    //         <h3>${book.title}</h3>
    //         <img src="${book.imageURL}" >
    //     </div>
    //     <div class="class3"><br>
    //         <p><b>${book.author}</b> ${book.year}</p>
    //         <p>${book.categories}</p>
    //         <p>${book.descriptoin}</p>
    //         <a href="#"><button>BOOK OVERVIEW</button></a>
    //     </div>
    // </div>
  `;
            document.getElementById("book-test").appendChild(row);
        };

        let publicLibary = new Libary();

        add.addEventListener('click', function (e) {
            const url = document.getElementById('imageURL').value;
            const title = document.getElementById('title').value;
            const author = document.getElementById('author').value;
            const year = document.getElementById('year').value;
            const categories = document.getElementById('categories').value;
            const descriptoin = document.getElementById('descriptoin').value;
            const isbn = document.getElementById('ISBN').value;

            let book = new Book(url, title, author, year, isbn, categories, descriptoin);

            publicLibary.addbook(book);
            // publicLibary.render(book);
            publicLibary.clearFields();

        });

        event.target.submit();
    }
});

function toggleErrorMessage(isFieldNotValid, formElement) {
    if (isFieldNotValid) {
        formElement.parentElement.querySelector(".errorMessage").classList.remove("display-none");
    } else {
        formElement.parentElement.querySelector(".errorMessage").classList.add("display-none");
    }
}

function myFunction() {
    var author = document.getElementById("author").value;
    document.getElementById("descriptoin").placeholder = author + " - Description";
}





