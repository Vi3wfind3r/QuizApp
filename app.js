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

  const render = (element = $('div#js-question'), state = quiz)=>{
      const path= state.questions[idNumber].answer;
      const question =  
               ` <ul>
          <li>${state.questions[idNumber].question}</li>
            <form id="js-current-question">
                <p>${path[0]}</p> <input type="radio" name="Answers" value="${path[0]}"><br>
                <p>${path[1]}</p> <input type="radio" name="Answers" value="${path[1]}"><br>
                <p>${path[2]}</p> <input type="radio" name="Answers" value="${path[2]}"><br>
                <p>${path[3]}</p> <input type="radio" name="Answers" value="${path[3]}"> <br>
                <button type='submit' id="submit">Submit</button>
            </form>
        </ul>`;
    element.html(question);
  }

// console.log('quiz', selectAnswer(0), quiz.userAnswer);
selectAnswer(1);
console.log(nextQuestion());
selectAnswer(0);
// questionsIdIteration();
console.log(nextQuestion());
console.log(quiz.userAnswer);

//////////////////RUN ON LOAD OF PAGE///////////////////
$(function(){

render();

$('form#js-current-question').submit((event)=>{ //if you run into issues, change .submit to .on(submit)
  event.preventDefault();
  let checkedVal = $('input[name="Answers"]:checked').val();
  quiz.userAnswer.push(checkedVal);
  console.log(quiz.userAnswer);
})

    
})