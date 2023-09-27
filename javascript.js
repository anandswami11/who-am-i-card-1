
let clickButtons = document.querySelectorAll('.button, button1');
console.log('clickButtons', clickButtons);

[...clickButtons].map(function (button) {
    console.log('el', button);

    button.addEventListener('click', function () {
        console.log('clicked on button')
        document.querySelector('.box').style.display = 'flex'
    })
});

let closeButton = document.querySelector('.close_button')

closeButton.addEventListener('click', function(){

    document.querySelector('.box').style.display = 'none'

})
