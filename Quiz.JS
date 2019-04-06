(function() {
  var questions = [{
    question: "Which of the following statements comes closest to your view?",
    choices: ["The government should do more to help needy Americans, even if it means going deeper into debt",
              "The government today can't afford to do much more to help the needy"],
    correctAnswer: 0
  }, {
    question: "Which of the following statements comes closest to your view?",
    choices: ["Government is almost always wasteful and inefficient",
              "Government often does a better job than people give it credit for"],
    correctAnswer: 0
  }, {
    question: "Which of the following statements comes closest to your view?",
    choices: ["The best way to ensure peace is through military strength",
              "Good diplomacy is the best way to ensure peace"],
    correctAnswer: 0
  }, {
    question: "Which of the following statements comes closest to your view?",
    choices: ["Racial discrimination is the main reason why many black people can't get ahead these days",
              "Blacks who can't get ahead in this country are mostly responsible for their own condition"],
    correctAnswer: 0
  }, {
    question: "Which of the following statements comes closest to your view?",
    choices: ["Government regulation of business is necessary to protect the public interest",
              "Government regulation of business usually does more harm than good"],
    correctAnswer: 0
  }, {
    question: "Which of the following statements comes closest to your view?",
    choices: ["Homosexuality should be accepted by society",
            "Homosexuality should be discouraged by society"],
    correctAnswer: 0
}, {
    question: "Which of the following statements comes closest to your view?",
    choices: ["Business corporations make too much profit",
            "Most corporations make a fair and reasonable amount of profit"],
    correctAnswer: 0
}, {
    question: "Which of the following statements comes closest to your view?",
    choices: ["Stricter environmental laws and regulations cost too many jobs and hurt the economy",
            "Stricter environmental laws and regulations are worth the cost"],
    correctAnswer: 0
}, {
    question: "Which of the following statements comes closest to your view?",
    choices: ["Immigrants today strengthen our country because of their hard work and talents",
            "Immigrants today are a burden on our country because they take our jobs, housing and health care"],
    correctAnswer: 0
}, {
    question: "Which of the following statements comes closest to your view?",
    choices: ["Poor people today have it easy because they can get government benefits without doing anything in return",
            "Poor people have hard lives because government benefits don't go far enough to help them live decently"],
    correctAnswer: 0
}, {
    question: "Which of the following statements comes closest to your view?",
    choices: ["The economic system in this country unfairly favors powerful interests",
            "The economic system in this country is generally fair to most Americans"],
    correctAnswer: 0
}, {
    question: "Which of the following statements comes closest to your view?",
    choices: [" Our country has made the changes needed to give blacks equal rights with whites",
              "Our country needs to continue making changes to give blacks equal rights with whites"],
    correctAnswer: 0
}, {
    question: "Which of the following statements comes closest to your view?",
    choices: ["It's best for the future of our country to be active in world affairs",
              "We should pay less attention to problems overseas and concentrate on problems here at home"],
  correctAnswer: 0
}, {
  question: "Which of the following statements comes closest to your view?",
  choices: ["Most people who want to get ahead can make it if they're willing to work hard",
          "Hard work and determination are no guarantee of success for most people"],
  correctAnswer: 0
}, {
  question: "Which of the following statements comes closest to your view?",
  choices: ["The obstacles that once made it harder for women than men to get ahead are now largely gone",
          "There are still significant obstacles that make it harder for women to get ahead than men"],
  correctAnswer: 0
}, {
  question: "Which of the following statements comes closest to your view?",
  choices: ["In foreign policy, the U.S. should take into account the interests of its allies even if it means making compromises with them",
          "In foreign policy, the U.S. should follow its OWN national interests even when its allies strongly disagree"],
  correctAnswer: 0
}, {
  question: "In politics today, do you consider yourself a Republican, or Democrat",
  choices: ["Democrat", "Republican"],
  correctAnswer: 0
},

];

  var questionCounter = 0; //Tracks question number
  var selections = []; //Array containing user choices
  var answers = [] //Array used to calculate user preference
  var quiz = $('#quiz'); //Quiz div object

  // Display initial question
  displayNext();

  // Click handler for the 'next' button
  $('#next').on('click', function (e) {
    e.preventDefault();

    // Suspend click listener during fade animation
    if(quiz.is(':animated')) {
      return false;
    }
    choose();

    // If no user selection, progress is stopped
    if (isNaN(selections[questionCounter])) {
      alert('Please make a selection!');
    } else {
      questionCounter++;
      displayNext();
    }
  });

  // Click handler for the 'prev' button
  $('#prev').on('click', function (e) {
    e.preventDefault();

    if(quiz.is(':animated')) {
      return false;
    }
    choose();
    questionCounter--;
    displayNext();
  });

  // Click handler for the 'Start Over' button
  $('#start').on('click', function (e) {
    e.preventDefault();

    if(quiz.is(':animated')) {
      return false;
    }
    questionCounter = 0;
    selections = [];
    displayNext();
    $('#start').hide();
  });

  // Animates buttons on hover
  $('.button').on('mouseenter', function () {
    $(this).addClass('active');
  });
  $('.button').on('mouseleave', function () {
    $(this).removeClass('active');
  });

  // Creates and returns the div that contains the questions and
  // the answer selections
  function createQuestionElement(index) {
    var qElement = $('<div>', {
      id: 'question'
    });

    var header = $('<h2>Question ' + (index + 1) + ':</h2>');
    qElement.append(header);

    var question = $('<p>').append(questions[index].question);
    qElement.append(question);

    var radioButtons = createRadios(index);
    qElement.append(radioButtons);

    return qElement;
  }

  // Creates a list of the answer choices as radio inputs
  function createRadios(index) {
    var radioList = $('<ul>');
    var item;
    var input = '';
    for (var i = 0; i < questions[index].choices.length; i++) {
      item = $('<li>');
      input = '<input type="radio" name="answer" value=' + i + ' />';
      input += questions[index].choices[i];
      item.append(input);
      radioList.append(item);
    }
    return radioList;
  }

  // Reads the user selection and pushes the value to an array
  function choose() {
    selections[questionCounter] = +$('input[name="answer"]:checked').val();
  }

  // Displays next requested element
  function displayNext() {
    quiz.fadeOut(function() {
      $('#question').remove();

      if(questionCounter < questions.length){
        var nextQuestion = createQuestionElement(questionCounter);
        quiz.append(nextQuestion).fadeIn();
        if (!(isNaN(selections[questionCounter]))) {
          $('input[value='+selections[questionCounter]+']').prop('checked', true);
        }

        // Controls display of 'prev' button
        if(questionCounter === 1){
          $('#prev').show();
        } else if(questionCounter === 0){

          $('#prev').hide();
          $('#next').show();
        }
      } else {
        var scoreElem = displayScore();
        quiz.append(scoreElem).fadeIn();
        $('#next').hide();
        $('#prev').hide();
        $('#start').show();
      }
    });
  }

  // Computes score and returns a paragraph element to be displayed
  function displayScore() {
    var score = $('<p>',{id: 'question'});

    var numCorrect = 0;
    for (var i = 0; i < selections.length; i++) {
      if (selections[i] === questions[i].correctAnswer) {
        answers.append(-1);
      }
      else if (selections[i] !== questions[i].correctAnswer) {
        answers.append(1);
      }
      console.log(answers);
    }
      localStorage.setItem("answerArray", JSON.stringify(answers)); //to get it back JSON.parse(localStorage.getItem("tGrades"))
    }
