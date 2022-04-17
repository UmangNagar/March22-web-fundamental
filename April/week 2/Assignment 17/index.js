const nameElement1 = document.getElementById('nameElement');
const emailElement1 = document.getElementById('emailElement');
const passElement1 = document.getElementById('Password');
const cpassElement1 = document.getElementById('cpassword');
const mandatory = document.getElementById('nameSmall')
const mandatory2 = document.getElementById('nameSmall2')
const entireForm = document.querySelector('form')
const mandatory3 = document.getElementById('warning')
const mandatory4 = document.getElementById('need')

entireForm.addEventListener('submit',myfunction)

function myfunction(refresh){
    refresh.preventDefault();
    console.log('hello')

    if(nameElement1.value === ""){
        nameElement1.classList = 'error';
        mandatory.classList = 'display';
    }
    else{
        nameElement1.classList = 'success';
    }
    
    if(emailElement1.value === ""){
        emailElement1.classList = 'error';
        mandatory2.classList = 'display';
    }
    else{
        emailElement1.classList = 'success';
    }
    
    if(passElement1.value === ""){
        passElement1.classList = 'error';
    }
    else{
        passElement1.classList = 'success';
    }
    
    if(cpassElement1.value === ""){
       cpassElement1.classList = 'error';
    }
    else{
        cpassElement1.classList = 'success';
    }
    if(passElement1.value !== cpassElement1.value){
        console.log("password does not matched")
        passElement1.classList = 'error';
        cpassElement1.classList = 'error';
        mandatory3.classList = 'display';
    }
     
    if(passElement1.value.includes('@') === false && passElement1.value.includes('#') === false && passElement1.value.includes('$') === false  ){
        passElement1.classList = 'error';
        console.log('Password Should Contains any one of @,#,or $....')
        mandatory4.classList = 'display';
    }
    else{
        passElement1.classList = 'success';
        console.log('password satisfied')
    }
}




