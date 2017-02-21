// dependency for inquirer npm package
var fs = require("fs");
var inquirer = require("inquirer");
var questions = require('./cloze-questions.json')

// ClozeCard constructor function 
function ClozeCard(text, cloze) {
  this.text = text;
  this.cloze = cloze;
}

// setting score and count variables
var count = 0;
var score = 0;

// Function for asking the user a question
var askCloze = function() {
  
  if (count < questions.length){
    
    inquirer.prompt([
      {
        name: "input",
        message: questions[count].text
      }
    ]).then(function(answers) {
      if (answers.input === questions[count].cloze){
        score++;
        console.log(`-----------------------------`);
        console.log("You are correct!");
        console.log(`Current Score: ${score}`);
        console.log(`-----------------------------`);

      } else {
        console.log(`-----------------------------`);
        console.log(`Incorrect! The correct answer is ${questions[count].cloze}`);
        console.log(`Current Score: ${score}`);
        console.log(`-----------------------------`);
      }

      count++;
      
      askCloze();
    });
    
  } else if (count > questions.length - 1){
    console.log("Game Over");
    console.log(`Your Final Score is: ${score}`);
    console.log(`-----------------------------`);
  }
};

askCloze();