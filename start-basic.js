// dependency for inquirer npm package
var fs = require("fs");
var inquirer = require("inquirer");
var questions = require('./basic-questions.json')

// BasicCard constructor function 
function BasicCard(front, back) {
  this.front = front;
  this.back = back;
}

// setting score and count variables 
var count = 0;
var score = 0;

// Function for asking the user a question 
var askBasic = function() {

  if (count < questions.length){
    
    inquirer.prompt([
      {
        name: "input",
        message: questions[count].front
      }
    ]).then(function(answers) {
      if (answers.input === questions[count].back){
        score++;
        console.log(`-----------------------------`);
        console.log("You are correct!");
        console.log(`Current Score: ${score}`);
        console.log(`-----------------------------`);

      } else {
        console.log(`-----------------------------`);
        console.log(`Incorrect! The correct answer is ${questions[count].back}`);
        console.log(`Current Score: ${score}`);
        console.log(`-----------------------------`);
      }

      count++;
      
      askBasic();
    });
    
  } else if (count > questions.length - 1){
    console.log("Game Over");
    console.log(`Your Final Score is: ${score}`);
    console.log(`-----------------------------`);
  }
};

askBasic();