
var positionInArray = 0;
var test;
var test_status; 
var question;
var choice; 
var choices; 
var answerA;
var answerB;
var answerC;
var answerD;
var correct = 0; 

var questionsArray = [
    ["What burger would you get at Mcdonalds?", "Big Mac", "Whopper", "Dave's Big n Juicy", "Jack's Classic", "A"],
    ["What restaurant has the Big Bo Box?", "McDonalds", "KFC", "Zaxby's", "Bojangles", "D"],
    ["Who has the $2.99 Ultimate Jack's Breakfast Platter:", "Taco Bell", "Hwy 55", "Jack n the Box", "Red Robbin", "C"],
    ["Who incorporated Doritos into one of their menu items?", "Wendy's", "Taco Bell", "Mcdonalds", "Burger King", "B"],
    ["Who has the best customer service?", "Zaxby's", "Chick Fila", "Jack n the Box", "Burger King", "B"]
];

console.log(questionsArray);

function input(x) {
    return document.getElementById(x);
}

function renderQuestion() {
    test = input("question-area");
    
    if (positionInArray >= questionsArray.length) {
      test.innerHTML = "<h2>You got "+correct+ " of " +questionsArray.length+" questions correct!</h2>";
      input("questions-remaining").innerHTML = "Test Completed";
      positionInArray = 0;
      correct = 0;
      return false;
     }
    
    
    
    input("questions-remaining").innerHTML = "Question " + (positionInArray + 1) + " of " + questionsArray.length;
    question = questionsArray[positionInArray][0];
    answerA = questionsArray[positionInArray][1];
    answerB = questionsArray[positionInArray][2];
    answerC = questionsArray[positionInArray][3];
    answerD = questionsArray[positionInArray][4];

    test.innerHTML = "<h2>"+question+"</h2>";

    test.innerHTML +=  "<input type='radio' class='answers' name='choices' value='A'> "+answerA+"<br>";
    test.innerHTML +=  "<input type='radio' class='answers' name='choices' value='B'> "+answerB+"<br>";
    test.innerHTML +=  "<input type='radio' class='answers' name='choices' value='C'> "+answerC+"<br>";
    test.innerHTML +=  "<input type='radio' class='answers' name='choices' value='D'> "+answerD+"<br>";
    test.innerHTML +=  "<button id='submit-answer' onclick='checkAnswer()'>Submit Answer</button>";
   }
      

    function checkAnswer() {
        choices = document.getElementsByName("choices");
        for(var i=0; i<choices.length; i++) {
          if(choices[i].checked) {
            choice = choices[i].value;
          }
        }
        if (choice == questionsArray[positionInArray][5]) {
          correct++;          
        }
        positionInArray++;
        renderQuestion();
    }

    window.addEventListener("load",renderQuestion, false);

