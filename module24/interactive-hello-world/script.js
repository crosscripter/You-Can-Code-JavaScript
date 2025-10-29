// Interactive Hello World!

// Constants
const ENTER_KEY = 13;
const SPACE = '&nbsp;';

// Config
const TYPING_SPEED = 100;
const NAME_PROMPT = 'Please enter your name:';

const COLORS = {
  input: 'yellow',
  output: 'chartreuse'
};

const greetings = ['Hello, {name}!', 'Greetings {name}.'];


window.addEventListener('load', () => {
  // Get elements 
  const name = document.getElementById('name');
  const screen = document.getElementById('screen');

  // Add a "log" method to the screen element
  screen.log = message => {
    screen.innerHTML += '<br/>';
    const color = message ? COLORS.output : COLORS.input;
    message = message ?? NAME_PROMPT;
    const chars = message.split('');

    chars.forEach((char, i) => {
      const charCode = char.charCodeAt(0);
      const timeout = i * TYPING_SPEED + charCode;
      const letter = document.createElement('p');
      letter.style.color = color;
      letter.innerHTML = char == ' ' ? SPACE : char;
      setTimeout(() => screen.appendChild(letter), timeout);
    });
  };

  // Function for displaying a random greeting 
  const displayGreeting = () => {
    const randomGreeting = greetings[Math.round(Math.random())];
    screen.log(randomGreeting.replace('{name}', name.value));
    name.value = '';
  };

  // Wire up the event handlers
  // When we "change" or focus off the name element we'll run displayGreeting
  name.addEventListener('change', displayGreeting);

  // When we press a key down we'll run a check to see if we pressed enter
  // if we did, then we'll submit the form with the users name to our terminal!
  name.addEventListener('keydown', e => {
    if (e.keyCode == ENTER_KEY) document.body.forms[0]?.submit();
  });

  // Log the default message
  screen.log();

  // Focus our input box
  name.focus();
});