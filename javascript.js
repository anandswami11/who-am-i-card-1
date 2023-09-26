

let clickButton = document.querySelector('.button')

clickButton.addEventListener('click', function(){
    // let user_nmae = prompt('whate is yuor name')
    // document.querySelector('.name').innerHTML = user_nmae
    document.querySelector('.box').style.display = 'flex'

})

let closeButton = document.querySelector('.close_button')

closeButton.addEventListener('click', function(){

    document.querySelector('.box').style.display = 'none'

})

