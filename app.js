const quiz = {
  questions: [
    {
      id: 0,  
      question: "What is the capital of Maine?",
      answer: ['Augusta', 'Bangor', 'Lake City', 'Waterville'],
      correctAnswer: 0
    }
    // {
    //   id: 1,
    //   question: "What is the capital of Wyoming?",
    //   answer: ['Cody', 'Laramie', 'Cheyenne', 'Yellowstone'],
    //   correctAnswer: 2
    // }
  ],

  userAnswer: [],
  currentQuestion: null

};

//////////////////////////MOD FUNCTIONS//////////////////////////////////

  function selectAnswer(answerIndex){

    return quiz.userAnswer.push(answerIndex);
  }

console.log('quiz', selectAnswer(0), quiz.userAnswer);

//   function nextQuestion(){
//     to display the next question

//     return 
//   }
// nextQuestion();
// console.log(quiz);
// selectAnswer(1);
// console.log(quiz);
// nextQuestion();
// selectAnswer(0);
// nextQuestion();
// newQuiz();





  // <li id="0">Augusta</li>



