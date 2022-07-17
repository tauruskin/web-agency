// "use strict"
//
// const form = document.getElementById('form');
// const username = document.getElementById('formName');
// const email = document.getElementById('formEmail');
// const tel = document.getElementById('formTel');
// const textarea = document.getElementById('formMessage');
//
// //Show input error messages
// function showError(input, message) {
//     const formControl = input.parentElement;
//     formControl.className = 'form__item error';
//     const small = formControl.querySelector('small');
//     small.innerText = message;
// }
//
// //show success colour
// function showSuccess(input) {
//     const formControl = input.parentElement;
//     formControl.className = 'form__item success';
// }
// //check email is valid
// function checkEmail(input) {
//     const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     if(re.test(input.value.trim())) {
//         showSuccess(input)
//     }else {
//         showError(input,'Email is not invalid');
//     }
// }
//
// //check email is valid
// function checkPhoneNumber(input) {
//     const phonenumber = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
//     if(phonenumber.test(input.value.trim())) {
//         showSuccess(input)
//     }else {
//         showError(input,'Phone number is not invalid');
//     }
// }
//
//
// //checkRequired fields
// function checkRequired(inputArr) {
//     inputArr.forEach(function(input){
//         if(input.value.trim() === ''){
//             showError(input,`${getFieldName(input)} is required`)
//         }else {
//             showSuccess(input);
//         }
//     });
// }
//
//
// //check input Length
// function checkLength(input, min ,max) {
//     if(input.value.length < min) {
//         showError(input, `${getFieldName(input)} must be at least ${min} characters`);
//     }else if(input.value.length > max) {
//         showError(input, `${getFieldName(input)} must be les than ${max} characters`);
//     }else {
//         showSuccess(input);
//     }
// }
//
// //get FieldName
// function getFieldName(input) {
//     return input.id.charAt(0).toUpperCase() + input.id.slice(1);
// }
//
// //Event Listeners
// form.addEventListener('submit',function(e) {
//     e.preventDefault();
//
//     checkRequired([username, email]);
//     checkLength(username,3,15);
//     checkEmail(email);
//     checkPhoneNumber(tel);
//     checkLength(textarea, 3, 60);
// });