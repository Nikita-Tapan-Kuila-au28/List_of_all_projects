console.log('jik');
const username = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

let validUser=false;
let validEmail=false;
let validPhone=false;
username.addEventListener('blur', (e) => {
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = username.value;
    if (regex.test(str)) {
        //console.log('match');
        username.classList.remove('is-invalid');
        validUser=true;
    }
    else {

        username.classList.add('is-invalid');
        validUser=false;
    }

    
})

email.addEventListener('blur', () => {
    let regex = /^([_\-\.0-9a-zA-z]+)@([_\-\.0-9a-zA-z]+)\.([a-zA-Z])/;
    let str = email.value;
    if (regex.test(str)) {
        //console.log('match');
        email.classList.remove('is-invalid');
         validEmail=true;
    }
    else {

        email.classList.add('is-invalid');
        validEmail=false;
    }
}
)

phone.addEventListener('blur', () => {
    let regex = /^([0-9]){10}$/;
    let str =phone.value;
    if (regex.test(str)) {
        //console.log('match');
        phone.classList.remove('is-invalid');
         validPhone=true;
    }
    else {

        phone.classList.add('is-invalid');
        validPhone=false;
    }
}
)

let submitelmnt=document.getElementById('submit');
submitelmnt.addEventListener('click',(e)=>{
    console.log('mki');
    let success=document.getElementById('success');
   
   if(validEmail && validPhone && validUser){
    success.classList.add('show');
    setTimeout(() => {
        success.classList.remove('show');
       },2000); 
   }
   
   else{
    failure.classList.add('show');
    setTimeout(() => {
        failure.classList.remove('show');
       },2000); 
   }
    e.preventDefault()
})


