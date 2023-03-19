//rock paper scissors
// = rock blues jazz
//the player picks r,p,s
// = (r,b,j)
// -- outcomes --

//rock crushes scissors
// = rock crushes jazz
//scissors cuts paper 
// = jazz cuts blues
//paper covers rock
// = blues covers rock

// --actions--
//collect user choice 
//computer makes choice / parse computer's choice
//determine the winner.
// ^bonus = create amazing interface

let userChoice = window.prompt('Choose Rock, Blues, or Jazz');
userChoice = userChoice.toLowerCase();
console.log(userChoice);

if (!(userChoice == 'rock' || userChoice == 'blues' || userChoice == 'jazz')) {
    alert('Only Choose Rock, Blues, or Jazz, Try Again');
    window.location.reload();
}

//computer's choice
let computerChoice = Math.random();
if (computerChoice <= 0.333) {
    computerChoice = 'rock';
} else if (computerChoice <= .666) {
    computerChoice = 'blues'
} else {
    computerChoice = 'jazz';
}
console.log(computerChoice);



//result within play again BUTTON
if (userChoice == computerChoice) {
    alert('TIE! Try again');
    //result within play again BUTTON



} else if (userChoice == 'rock') {
    if (computerChoice == 'jazz') {
        alert('Rock Smashes Jazz so you WIN!');
    } else {
        alert('Blues Covers Rock, so you Lose.');
    }
} else if (userChoice == 'blues') {
    if (computerChoice == 'rock') {
        alert('Blues Covers Rock so you WIN!');
    } else {
        alert('Jazz Cuts Blues, so you Lose.');
    }
} else if (userChoice == 'jazz') {
    if (computerChoice == 'blues') {
        alert('Jazz Cuts Blues so you WIN!')
    } else {
        alert('Rock Smashes Jazz, so you Lose.');
    }
}
//that radio button code:
// (this is for a radio button that creates a popup)

//<script type="text/javascript">

//function newWindow(){
//var newWindow;
//newWindow = window.open("http://www.google.com", "myWindow", "width=300,height=300");
//newWindow.focus();}
//</script>
//
//<form id="myform">
//<input type="radio" name="rb" value="1" /> 1<br />
//<input type="radio" name="rb" value="2" /> 2<br />
//<input type="radio" name="rb" value="3" onclick="javascript:newWindow()" /> 3<br />
//</form>

// what about? 
//newWindow = window.open("http://www.google.com", "myWindow", "width=300,height=300");
