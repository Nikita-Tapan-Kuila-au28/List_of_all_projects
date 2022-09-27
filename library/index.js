

//constructor
function Book(name, author, type) {
    this.Name = name;
    this.Author = author;
    this.Type = type;
}

/////It will display all the books//
function Display() {

}

//methods  display prototypes
//implementing to check validate book function
Display.prototype.validate = function (book) {
    if (book.Name.length < 2 || book.Author.length < 2) {
        return false;
    }
    else {
        return true;

    }
}
//implementing add the book function
Display.prototype.add = function (book) {
    console.log("add");
    tablebody = document.getElementById("tableBody");
    let uitable = `<tr>
               <td>${book.Name}</td>
               <td>${book.Author}</td>
               <td>${book.Type}</td>
               </tr>`;
    tablebody.innerHTML += uitable;

}

//implementing clear function
Display.prototype.clear = function () {
    let libraryForm = document.getElementById("libraryform");
    libraryForm.reset();
}

//implementing the show function
Display.prototype.show = function (type, displayMessage) {
    let message = document.getElementById("message");
    message.innerHTML = ` <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                        <strong>OOPS!!</strong> ${displayMessage}
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>`;
    setTimeout(() => {
        message.innerHTML = '';
    }, 2000);
}



//add submit event listener
let libraryForm = document.getElementById("libraryform");
libraryForm.addEventListener("submit", libraryFormSubmit);


function libraryFormSubmit(e) {
    //console.log("submitted");
    let name = document.getElementById("formName").value;
    let author = document.getElementById("formAuthor").value;

    let fiction = document.getElementById("fiction");
    let mythology = document.getElementById("mythology");
    let biography = document.getElementById("biography");
    let technology = document.getElementById("technology");

    let type;
    if (fiction.checked) {
        type = fiction.value;
    }
    else if (mythology.checked) {
        type = mythology.value;
    }
    else if (biography.checked) {
        type = biography.value;
    }
    else if (technology.checked) {
        type = technology.value;
    }
    let book = new Book(name, author, type);
    //console.log(book);

    //storing data in localstorage
    ///*
    
    //localStorage.setItem("book", JSON.stringify(bookinfoObj));
    
    let display = new Display();

    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success', " YOU HAVE SUCCESSFULLY ADDED THIS BOOK.");
        
        /*let Entries= localStorage.getItem("book");
         console.log(Entries);
    if (Entries == null) {
        EntriesObj = [];

    }
    else {
        Entries = JSON.parse(book);
    }
    
    
    EntriesObj.push( book);
        localStorage.setItem("Entries", JSON.stringify(book));
        console.log(Entries);

    }*/
}
    else {
        //show eerors
        display.show('danger', " SORRY YOU CANNOT ADD THIS BOOK!");
    }
 

    e.preventDefault();
}