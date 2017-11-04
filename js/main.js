var heading = document.getElementById('mainHeader');

heading.addEventListener('click', function (event) {
    var myElement = document.createElement('article');
    myElement.innerHTML = 'This is click number ' + event.detail;
    document.getElementsByClassName('wrapper')[0].appendChild(myElement);
});

var firstName = document.getElementById('firstName');
var lastName = document.getElementById('lastName');
var email = document.getElementById('email_address');
var message = document.getElementById('message');

document.querySelector('form#contact_form').addEventListener('submit', function (eventInfo) {
    eventInfo.preventDefault();
    console.log('The firstName is: ' + firstName.value);
    console.log('The lastName is: ' + lastName.value);
    console.log('The email is: ' + email.value);
    console.log('The message is: ' + message.value);
});
