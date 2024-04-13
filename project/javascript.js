const buttons = document.querySelectorAll('.button');
const body = document.querySelector( 'body' );
const heading = document.querySelector('h1'); 

buttons.forEach((button) => {
    console.log(button);

    button.addEventListener('click' , (e) => {
        console.log(e);
        console.log(e.target);
        console.log(e.target.id);

        if(e.target.id === 'dark'){
            body.style.backgroundColor = '#000';
            heading.style.color = 'white';
        }
        if(e.target.id === 'light'){
            body.style.backgroundColor = '#ffffff';
            heading.style.color = 'black';
        }
    if(e.target.id === 'original'){
    body.style.backgroundColor = '#ffe4c4';
    heading.style.color = 'black';
     }
    })
})