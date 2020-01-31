let userName = 'Mejjah';
userName ? console.log('Hello, ' + userName + '!') : console.log('Hello!');
let userQuestion = 'Are you OK?';
console.log(userName + ` asked: ${userQuestion}`);
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

//if....else statement
if (randomNumber === 0) {
    console.log('Reply: Yes I am')
} else if (randomNumber === 1) {
    console.log('Reply: I am trying to be');
} else if (randomNumber === 2) {
    Reply:
    console.log('Reply: No I am not');
} else if (randomNumber === 3) {
    console.log('Reply: I want to be');
} else if (randomNumber === 4) {
    console.log('Reply: I wanna die!');
} else if (randomNumber === 5) {
    console.log('Reply: I think so');
} else if (randomNumber === 6) {
    console.log('Reply: I do not think I am');
} else if (randomNumber === 7) {
    console.log('Reply: I cannot answer that');
} else if (randomNumber === 8) {
    console.log('Reply: Leave me alone');
} else {
    console.log('Reply: Sorry, silly question');
}

