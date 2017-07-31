// // Constructor function for the basic flashcard
//  function BasicCard(front, back) {
//  	this.front = front;
//  	this.back = back;
//  };

//  module.exports = BasicCard;

var inquirer = require("inquirer");
var cards = []
var cardCount = 0

function BasicCard(front, back) {
	this.front = front
	this.back = back
}

var card1 = new BasicCard("What color is made when red and yellow are mixed?", "orange");
var card2 = new BasicCard("What is the third primary color in additon to red and yellow?", "blue");
cards.push(card1);
cards.push(card2);


function studyCards() {
	//recursion loop to prompt each question individually w/inquirer
	if(cardCount < cards.length) {

				inquirer.prompt([
					{
						name: "question",
						message: cards[cardCount].front
					}
				]).then(function(answer) {

					if((answer.question).toLowerCase() === cards[cardCount].back) {
						console.log("correct");
						//increase card count per loop
						cardCount ++
						//continue recursion 
						studyCards();
					} 
					else {
						//state back of card
						console.log("incorrect");
						console.log("BACK READS:  " + cards[cardCount].back);
						//increase card count per loop
						cardCount ++
						//continue recursion
						studyCards();
					}

				});//then function

	}//recursion if statement


}//studyCards function

studyCards();
