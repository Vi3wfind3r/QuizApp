const quiz = {
  questions: [
    {
      id: 0,  
      question: "What is the capital of Maine?",
      answer: ['Augusta', 'Bangor', 'Lake City', 'Waterville'],
      correctAnswer: 0
    },
    {
      id: 1,
      question: "What is the capital of Wyoming?",
      answer: ['Cody', 'Laramie', 'Cheyenne', 'Yellowstone'],
      correctAnswer: 2
    }
  ],

  userAnswer: [],
  currentQuestion: null

};

//////////////////////////MOD FUNCTIONS//////////////////////////////////

  function selectAnswer(answerIndex){
   return quiz.userAnswer.push(answerIndex);
  }

  let idNumber = 0;
  function questionsIdIteration(){
      idNumber++;
      return idNumber;
  }

  function nextQuestion(){
      return quiz.questions[idNumber].question;
  }

// console.log('quiz', selectAnswer(0), quiz.userAnswer);
selectAnswer(1);
console.log(nextQuestion());
selectAnswer(0);
questionsIdIteration();
console.log(nextQuestion());
console.log(quiz.userAnswer);

//////////////////RUN ON LOAD OF PAGE///////////////////
$(function(){



    
})