player1Name = localStorage.getItem("Player1");
player2Name = localStorage.getItem("Player2");
document.getElementById("Player1").innerHTML = player1Name + " : ";
document.getElementById("Player2").innerHTML = player2Name + " : ";

player1Score = 0;
player2Score = 0;
document.getElementById("player1Score").innerHTML = player1Score;
document.getElementById("player2Score").innerHTML = player2Score;

document.getElementById("playerQuestion").innerHTML = "Question Turn - " + player1Name;
document.getElementById("playerAnswer").innerHTML = "Answer Turn - " + player2Name;


function send() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actualAnswer = parseInt(number1) * parseInt(number2);

    questionWord = "<h4>" + number1 + " X " + number2 + "</h4>";
    inputBox = "<br> Answer: <input type='text' id='input_check_box'>";
    checkButton = "<br><br><button type='button' class='btn btn-info' onclick='check()'>Check</button>";
    row = questionWord + inputBox + checkButton;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}