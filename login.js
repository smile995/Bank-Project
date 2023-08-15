// step-1: add click even handaler with the submit button
document.getElementById('submit-btn').addEventListener('click',function(){
    //step-2: get the email address inside the email input feild
    // remember: to get the value of email field must use .value property
    const emailField=document.getElementById('user-email');
    // console.log(emailField);
    const getEmail=emailField.value;
    // console.log(getEmail);
    // step-3: get the value of password field
    const passwordField= document.getElementById('user-password');
    const getPasswod=passwordField.value;
    // console.log(getEmail, getPasswod);
    // step-4: varify the email and password
    if(getEmail==='ah.smile995@gmail.com' && getPasswod==='amir12345'){
        // console.log('valid user');
        window.location.href='bank.html'

    }
    else{
        alert('jeheto tomar password match hocche na tai tomake vitore dukhte deya hobe na')
    }
});
