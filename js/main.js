var heading = document.getElementById('mainHeader');

heading.addEventListener('click', function (event) {
    var myElement = document.createElement('article');
    myElement.innerHTML = 'This is click number ' + event.detail;
    document.getElementsByClassName('container')[0].appendChild(myElement);
});
