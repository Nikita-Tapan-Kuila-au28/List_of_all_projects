showNotes();
console.log("h")
let addbtn = document.getElementById("addbtn");
addbtn.addEventListener("click", addtxt);







function addtxt(e) {
    let addtxt = document.getElementById("addtxt");
    let addTitle = document.getElementById("addTitle");
    //console.log(addtxt);
    let notes = localStorage.getItem("notes");


    if (notes == null) {
        notesObj = [];

    }
    else {
        notesObj = JSON.parse(notes);
    }
    let mynotesobj ={
        title:addTitle.value,
        text:addtxt.value

    }
    notesObj.push(mynotesobj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTitle.value = "";
    addtxt.value="";
    //console.log(notesObj);
    showNotes();
}

function showNotes() {
    let notes = localStorage.getItem("notes");


    if (notes == null) {
        notesObj = [];

    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += ` <div class="notecard my-2 mx-2" style="width: 18rem;">
            
         <div class="card-body">
         <h5  class="card-title">${element.title}</h5>
         <p class="card-text">${element.text}</p>
         <button onclick="deletetxt(this.id)" id="delbtn" class="btn btn-primary">Delete</button>
         </div>
         </div> `;

    });
    let noteselmnt = document.getElementById("notes");
    if (notesObj.length != 0) {
        noteselmnt.innerHTML = html;

    }
    else {
        noteselmnt.innerHTML = `Nothing to show!! please Add the notes`;
    }

}

let delbtn = document.getElementById("delbtn");
delbtn.addEventListener("click",deletetxt);

function deletetxt(index) {
    //console.log(index);
    let notes = localStorage.getItem("notes");


    if (notes == null) {
        notesObj = [];

    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);

    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}
///*
let srch = document.getElementById("searchtxt");
//let search=document.querySelectory(".search");
//console.log(srch);
//console.log(search);
srch.addEventListener("input",searching);

function searching() {
    let inputval=srch.value.toLowerCase();
 
   let notecards=document.getElementsByClassName("notecard");
  
   Array.from(notecards).forEach(cardtxts())
 function cardtxts(element){
   
    let cardtxt=element.getElementByTagName("p")[0].innerText;
    console.log(cardtxt);
    
    if (cardtxt.includes(inputval)){
        element.style.display="block";
    }
    else{
        element.style.display="none";
    }
   }
   
}

let title=document.querySelector("#cardtitle");
console.log(title);