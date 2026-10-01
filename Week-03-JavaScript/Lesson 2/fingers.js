const playGame = () => {
    let num = (Math.random() * 10) + 1;
    num = Math.floor(num);

    // let guess = parseInt(prompt("Enter your guess from 1 to 10:"));
    let guess = document.getElementById("guess").value;

    if (guess == num) {
        document.getElementById("result").innerHTML = "You got it!!! The correct number is: " + num;
    } else {
        document.getElementById("result").innerHTML = "You loser!!! The correct number is: " + num;
    }
};

//  const playGame(); 



//console.log(num);