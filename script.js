let screen = document.getElementById('screen');

let click = Array.from(document.getElementsByClassName('click'));

console.log(click);

click.map(buttons => {
    button.addEventListener('click', (a) => {
        switch(a.target.innerText)
        {
            case 'C':
                screen.innerHTML='';
                break;
            case '←':
                if(screen.innerText)
                {
                    screen.innerText = screen.innerText.slice(0, -1);
                }
                break;
            case '=':
                try{
                    screen.innerText = eval(screen.innerText);
                }
                catch{
                    screen.innerText = 'Error';
                }
                break;
            default:
                screen.innerText += a.target.innerText;
        }
    })
})
