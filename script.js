// Select the display and all buttons
let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));

// Add click event to each button
buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    const value = e.target.innerText;

    switch (value) {
      case 'C':
        display.innerText = '';
        break;

      case '←':
        display.innerText = display.innerText.slice(0, -1);
        break;

      case '=':
        try {
          display.innerText = eval(display.innerText);
        } catch {
          display.innerText = 'Error';
        }
        break;

      default:
        display.innerText += value;
    }
  });
});
