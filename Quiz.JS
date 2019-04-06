let typologyCase;

//finds typology given political beliefs
function findTypology(polArr,party){
  //democrat typologies
  var solidLiberal = 0.01;
  var opportunityDemocrat = 0.01;
  var disaffectedDemocrat = 0.01;
  var devoutAndDiverse = 0.01;
  //republican typologies
  var newEraEnterpriser = 0.01;
  var marketSkepticRepublican = 0.01;
  var countryFirstConservative = 0.01;
  var coreConservative = 0.01;
  //bystander typologies
  var bystander = 0.01;

  for (i=0;i<polArr.length;i++){
    switch(i) {
      case 0: //more to help needy vs. can't afford to help needy
        if (polArr[i]<0){
          solidLiberal *= 85;
          opportunityDemocrat *= 62;
          disaffectedDemocrat *= 72;
          devoutAndDiverse *= 62;
          newEraEnterpriser *= 31;
          marketSkepticRepublican *= 32;
          countryFirstConservative *= 19;
          coreConservative *= 10;
        }
        else if (polArr[i]>0){
          solidLiberal *= 12;
          opportunityDemocrat *= 33;
          disaffectedDemocrat *= 22;
          devoutAndDiverse *= 34;
          newEraEnterpriser *= 59;
          marketSkepticRepublican *= 58;
          countryFirstConservative *= 70;
          coreConservative *= 83;
        }
        break;
      case 1: //government wasteful vs. government good
        if (polArr[i]<0) {
            solidLiberal *= 30;
            opportunityDemocrat *= 41;
            disaffectedDemocrat *= 63;
            devoutAndDiverse *= 49;
            newEraEnterpriser *= 49;
            marketSkepticRepublican *= 69;
            countryFirstConservative *= 71;
            coreConservative *= 89;
        }
        if (polArr[i]>0) {
            solidLiberal *= 66;
            opportunityDemocrat *= 57;
            disaffectedDemocrat *= 32;
            devoutAndDiverse *= 47;
            newEraEnterpriser *= 47;
            marketSkepticRepublican *= 29;
            countryFirstConservative *= 21;
            coreConservative *= 8;
        }
        break;
      case 2: //military vs. diplomacy
        if (polArr[i]<0) {
            solidLiberal *= 4;
            opportunityDemocrat *= 15;
            disaffectedDemocrat *= 14;
            devoutAndDiverse *= 32;
            newEraEnterpriser *= 41;
            marketSkepticRepublican *= 42;
            countryFirstConservative *= 54;
            coreConservative *= 71;
        }
        if (polArr[i]>0) {
            solidLiberal *= 95;
            opportunityDemocrat *= 80;
            disaffectedDemocrat *= 82;
            devoutAndDiverse *= 66;
            newEraEnterpriser *= 49;
            marketSkepticRepublican *= 42;
            countryFirstConservative *= 25;
            coreConservative *= 13;
        }
        break;
      case 3: //discrimination strong vs. discrimination weak
        if (polArr[i]<0) {
          solidLiberal *= 91;
          opportunityDemocrat *= 54;
          disaffectedDemocrat *= 63;
          devoutAndDiverse *= 41;
          newEraEnterpriser *= 17;
          marketSkepticRepublican *= 12;
          countryFirstConservative *= 9;
          coreConservative *= 5;
        }
        if (polArr[i]>0) {
          solidLiberal *= 7;
          opportunityDemocrat *= 37;
          disaffectedDemocrat *= 28;
          devoutAndDiverse *= 47;
          newEraEnterpriser *= 73;
          marketSkepticRepublican *= 75;
          countryFirstConservative *= 76;
          coreConservative *= 80;
        }
        break;
        case 4: //business regulation good vs. regulation bad
          if (polArr[i]<0) {
              solidLiberal *= 96;
              opportunityDemocrat *= 76;
              disaffectedDemocrat *= 39;
              devoutAndDiverse *= 38;
              newEraEnterpriser *= 57;
              marketSkepticRepublican *= 41;
              countryFirstConservative *= 15;
              coreConservative *= 4;
          }
          if (polArr[i]>0) {
              solidLiberal *= 4;
              opportunityDemocrat *= 21;
              disaffectedDemocrat *= 54;
              devoutAndDiverse *= 55;
              newEraEnterpriser *= 37;
              marketSkepticRepublican *= 53;
              countryFirstConservative *= 73;
              coreConservative *= 89;
          }
          break;
      case 5: //homosexuality ok vs. homosexuality bad
        if (polArr[i]<0) {
            solidLiberal *= 99;
            opportunityDemocrat *= 92;
            disaffectedDemocrat *= 79;
            devoutAndDiverse *= 53;
            newEraEnterpriser *= 64;
            marketSkepticRepublican *= 62;
            countryFirstConservative *= 13;
            coreConservative *= 50;
        }
        if (polArr[i]>0) {
            opportunityDemocrat *= 7;
            disaffectedDemocrat *= 15;
            devoutAndDiverse *= 37;
            newEraEnterpriser *= 28;
            marketSkepticRepublican *= 31;
            countryFirstConservative *= 70;
            coreConservative *= 37;
        }
        break;
      case 6: //too much profit vs. ok profit
        if (polArr[i]<0) {
            solidLiberal *= 82;
            opportunityDemocrat *= 55;
            disaffectedDemocrat *= 95;
            devoutAndDiverse *= 50;
            newEraEnterpriser *= 24;
            marketSkepticRepublican *= 89;
            countryFirstConservative *= 47;
            coreConservative *= 10;
        }
        if (polArr[i]>0) {
            solidLiberal *= 16;
            opportunityDemocrat *= 40;
            disaffectedDemocrat *= 4;
            devoutAndDiverse *= 43;
            newEraEnterpriser *= 68;
            marketSkepticRepublican *= 10;
            countryFirstConservative *= 42;
            coreConservative *= 82;
        }
        break;
      case 7: //environmental regulations good vs. regulation bad
        if (polArr[i]<0) {
            solidLiberal *= 0;
            opportunityDemocrat *= 20;
            disaffectedDemocrat *= 28;
            devoutAndDiverse *= 45;
            newEraEnterpriser *= 34;
            marketSkepticRepublican *= 39;
            countryFirstConservative *= 70;
            coreConservative *= 92;
        }
        if (polArr[i]>0) {
            solidLiberal *= 100;
            opportunityDemocrat *= 79;
            disaffectedDemocrat *= 69;
            devoutAndDiverse *= 48;
            newEraEnterpriser *= 60;
            marketSkepticRepublican *= 57;
            countryFirstConservative *= 17;
            coreConservative *= 1;
        }
        break;
      case 8: //immigrants good vs. immigrants bad
        if (polArr[i]<0) {
            solidLiberal *= 99;
            opportunityDemocrat *= 99;
            disaffectedDemocrat *= 83;
            devoutAndDiverse *= 47;
            newEraEnterpriser *= 70;
            marketSkepticRepublican *= 29;
            coreConservative *= 39;
        }
        if (polArr[i]>0) {
            disaffectedDemocrat *= 11;
            devoutAndDiverse *= 44;
            newEraEnterpriser *= 23;
            marketSkepticRepublican *= 55;
            countryFirstConservative *= 76;
            coreConservative *= 43;
        }
        break;
      case 9: //poor easy vs. poor hard
        if (polArr[i]<0) {
          opportunityDemocrat *= 28;
          disaffectedDemocrat *= 16;
          devoutAndDiverse *= 10;
          newEraEnterpriser *= 61;
          marketSkepticRepublican *= 75;
          countryFirstConservative *= 58;
          coreConservative *= 83;
        }
        if (polArr[i]>0) {
          solidLiberal *= 98;
          opportunityDemocrat *= 61;
          disaffectedDemocrat *= 79;
          devoutAndDiverse *= 86;
          newEraEnterpriser *= 23;
          marketSkepticRepublican *= 14;
          countryFirstConservative *= 23;
          coreConservative *= 3;
        }
        break;
      case 10: //economy unfair vs. economy fair
        if (polArr[i]<0) {
            solidLiberal *= 99;
            opportunityDemocrat *= 67;
            disaffectedDemocrat *= 99;
            devoutAndDiverse *= 55;
            newEraEnterpriser *= 18;
            marketSkepticRepublican *= 94;
            countryFirstConservative *= 41;
            coreConservative *= 21;
        }
        if (polArr[i]>0) {
            opportunityDemocrat *= 32;
            devoutAndDiverse *= 43;
            newEraEnterpriser *= 75;
            marketSkepticRepublican *= 5;
            countryFirstConservative *= 48;
            coreConservative *= 75;
        }
        break;
      case 11: //equals rights alredy vs. not yet
        if (polArr[i]<0) {
          solidLiberal *= 2;
          opportunityDemocrat *= 31;
          disaffectedDemocrat *= 7;
          devoutAndDiverse *= 8;
          newEraEnterpriser *= 48;
          marketSkepticRepublican *= 61;
          countryFirstConservative *= 66;
          coreConservative *= 81;
        }
        if (polArr[i]>0) {
          solidLiberal *= 98;
          opportunityDemocrat *= 67;
          disaffectedDemocrat *= 92;
          devoutAndDiverse *= 89;
          newEraEnterpriser *= 43;
          marketSkepticRepublican *= 32;
          countryFirstConservative *= 25;
          coreConservative *= 12;
        }
        break;
      case 12: //foreign vs. domestic
        if (polArr[i]<0) {
          solidLiberal *= 87;
          opportunityDemocrat *= 76;
          disaffectedDemocrat *= 30;
          devoutAndDiverse *= 22;
          newEraEnterpriser *= 45;
          marketSkepticRepublican *= 22;
          countryFirstConservative *= 19;
          coreConservative *= 50;
        }
        if (polArr[i]>0) {
          solidLiberal *= 10;
          opportunityDemocrat *= 20;
          disaffectedDemocrat *= 63;
          devoutAndDiverse *= 69;
          newEraEnterpriser *= 48;
          marketSkepticRepublican *= 72;
          countryFirstConservative *= 66;
          coreConservative *= 44;
        }
        break;
      case 13: //hard work is enough vs. not enough
        if (polArr[i]<0) {
          solidLiberal *= 25;
          opportunityDemocrat *= 76;
          disaffectedDemocrat *= 43;
          devoutAndDiverse *= 47;
          newEraEnterpriser *= 90;
          marketSkepticRepublican *= 65;
          countryFirstConservative *= 57;
          coreConservative *= 94;
        }
        if (polArr[i]>0) {
          solidLiberal *= 73;
          opportunityDemocrat *= 22;
          disaffectedDemocrat *= 54;
          devoutAndDiverse *= 48;
          newEraEnterpriser *= 8;
          marketSkepticRepublican *= 34;
          countryFirstConservative *= 36;
          coreConservative *= 4;
        }
        break;
      case 14: //us compromise good vs. compromise bad
        if (polArr[i]<0) {
          solidLiberal *= 97;
          opportunityDemocrat *= 94;
          disaffectedDemocrat *= 61;
          devoutAndDiverse *= 26;
          newEraEnterpriser *= 56;
          marketSkepticRepublican *= 49;
          countryFirstConservative *= 9;
          coreConservative *= 30;
        }
        if (polArr[i]>0) {
          solidLiberal *= 2;
          opportunityDemocrat *= 5;
          disaffectedDemocrat *= 35;
          devoutAndDiverse *= 64;
          newEraEnterpriser *= 37;
          marketSkepticRepublican *= 47;
          countryFirstConservative *= 76;
          coreConservative *= 64;
        }
        break;
      default:
        console.log("iteration through polArr broke with i="+i);
    }
  }

  if (party.indexOf("Dem")>=0) {
      solidLiberal *= 99;
      opportunityDemocrat *= 79;
      disaffectedDemocrat *= 85;
      devoutAndDiverse *= 59;
      newEraEnterpriser *= 22;
      marketSkepticRepublican *= 12;
      countryFirstConservative *= 0;
      coreConservative *= 0;
  }
  if (party.indexOf("Rep")>=0) {
      solidLiberal *= 0;
      opportunityDemocrat *= 15;
      disaffectedDemocrat *= 2;
      devoutAndDiverse *= 27;
      newEraEnterpriser *= 66;
      marketSkepticRepublican *= 75;
      countryFirstConservative *= 95;
      coreConservative *= 97;
  }

  if (newEraEnterpriser>=marketSkepticRepublican&&newEraEnterpriser>=countryFirstConservative&&newEraEnterpriser>=coreConservative&&newEraEnterpriser>=solidLiberal&&newEraEnterpriser>=opportunityDemocrat&&newEraEnterpriser>=disaffectedDemocrat&&newEraEnterpriser>=devoutAndDiverse){
      typologyCase = 1;
      return "New Era Enterpriser";
    }
  if (marketSkepticRepublican>=newEraEnterpriser&&marketSkepticRepublican>=countryFirstConservative&&marketSkepticRepublican>=coreConservative&&marketSkepticRepublican>=solidLiberal&&marketSkepticRepublican>=opportunityDemocrat&&marketSkepticRepublican>=disaffectedDemocrat&&marketSkepticRepublican>=devoutAndDiverse){
      typologyCase = 2;
      return "Market Skeptic Republican";
    }
  if (countryFirstConservative>=newEraEnterpriser&&countryFirstConservative>=marketSkepticRepublican&&countryFirstConservative>=coreConservative&&countryFirstConservative>=solidLiberal&&countryFirstConservative>=opportunityDemocrat&&countryFirstConservative>=disaffectedDemocrat&&countryFirstConservative>=devoutAndDiverse) {
      typologyCase = 3;
      return "Country First Conservative";
    }
  if (coreConservative>=newEraEnterpriser&&coreConservative>=marketSkepticRepublican&&coreConservative>=countryFirstConservative&&coreConservative>=solidLiberal&&coreConservative>=opportunityDemocrat&&coreConservative>=disaffectedDemocrat&&coreConservative>=devoutAndDiverse){
      typologyCase = 4;
      return "Core Conservative";
    }
  if (solidLiberal>=opportunityDemocrat&&solidLiberal>=disaffectedDemocrat&&solidLiberal>=devoutAndDiverse&&solidLiberal>=newEraEnterpriser&&solidLiberal>=marketSkepticRepublican&&solidLiberal>=countryFirstConservative&&solidLiberal>=coreConservative){
      typologyCase = 5;
      return "Solid Liberal";
    }
  if (opportunityDemocrat>=solidLiberal&&opportunityDemocrat>=disaffectedDemocrat&&opportunityDemocrat>=devoutAndDiverse&&opportunityDemocrat>=newEraEnterpriser&&opportunityDemocrat>=marketSkepticRepublican&&opportunityDemocrat>=countryFirstConservative&&opportunityDemocrat>=coreConservative){
      typologyCase = 6;
      return "Opportunity Democrat";
    }
  if (disaffectedDemocrat>=solidLiberal&&disaffectedDemocrat>=opportunityDemocrat&&disaffectedDemocrat>=devoutAndDiverse&&disaffectedDemocrat>=newEraEnterpriser&&disaffectedDemocrat>=marketSkepticRepublican&&disaffectedDemocrat>=countryFirstConservative&&disaffectedDemocrat>=coreConservative){
      typologyCase = 7;
      return "Disaffected Democrat";
    }
  if (devoutAndDiverse>=solidLiberal&&devoutAndDiverse>=opportunityDemocrat&&devoutAndDiverse>=disaffectedDemocrat&&devoutAndDiverse>=newEraEnterpriser&&devoutAndDiverse>=marketSkepticRepublican&&devoutAndDiverse>=countryFirstConservative&&devoutAndDiverse>=coreConservative){
      typologyCase = 8;
      return "Devout and Diverse";
    }
  return "N/A";
// Apple 0
// Banana 1

}

function typologyDescriptor(gradient){
  var gradient = typologyCase;

  switch (gradient){
    case 1:
    return "This relatively young, economically conservative, Republican-leaning group tends to be relatively moderate on immigration and views about America’s engagement with the rest of the world. Most say U.S. involvement in the global economy is a good thing and that immigrants strengthen the nation. As is the case with other GOP-leaning groups, a majority of New Era Enterprisers reject the idea that racial discrimination is the main reason many black people are unable to get ahead. Nearly two-thirds favor societal acceptance of homosexuality. New Era Enterprisers are less critical about government than other Republican-leaning groups.";
    break;
    case 2:
    return "Critical of many major institutions and government, Market Skeptic Republicans mostly identify with, or lean toward, the GOP. They stand out from other Republican-oriented groups in their negative views of the economic system: An overwhelming majority say it “unfairly favors powerful interests.” Most also say businesses make too much profit, and they are the most likely Republican-leaning group to want to raise taxes on corporations (55%). They are similar to other GOP-leaning groups in their skepticism about the social safety net."
    break;
    case 3:
    return "This largely Republican group is highly critical of immigration and U.S. global involvement. Country First Conservatives are most likely to describe immigrants as a burden on the country and to say that too much openness threatens American identity. More than any other group, they say that America should act in its own interest even when its foreign allies disagree. Like Core Conservatives, they prefer a smaller government with fewer services, and most think that government is wasteful and inefficient. Country First Conservatives are conservative on social issues and are the only typology group in which a majority says homosexuality should be discouraged by society."
    break;
    case 4:
    return "This overwhelmingly Republican group holds conservative attitudes across a wide range of issues, especially in their support for smaller government. Core Conservatives are deeply skeptical of the social safety net and favor lower tax rates on corporations and high-income individuals. While they are divided on whether immigrants do more to strengthen or burden the country, Core Conservatives offer far more positive views of immigrants than do Country First Conservatives. Core Conservatives are relatively upbeat about national conditions and a majority says that the United States “stands above” all other nations in the world."
    break;
    case 5:
    return "Highly educated and politically engaged, Solid Liberals hold consistently liberal values. They back a robust role for government and are strong advocates of the social safety net. Large majorities view the current economic system as unfair and see economic inequality as a major problem. They take broadly positive views of immigrants, and fully 99% think being open to people from around the world is an essential part of the nation’s identity. Most say more needs to be done to address both racial discrimination and obstacles to women’s achievement. They support same-sex marriage and believe homosexuality should be accepted by society. Solid Liberals are the most Democratic of all typology groups: nearly two-thirds (64%) identify as Democrats, another 35% lean toward the Democratic Party."
    break;
    case 6:
    return "Democratic-leaning and financially comfortable, Opportunity Democrats have liberal attitudes on most issues including the environment, immigration and homosexuality. They stand out from other Democratic groups in their strong belief that hard work is enough for most people to get ahead and for being somewhat less likely to see structural barriers facing blacks and women. They are supportive of U.S. engagement abroad and involvement in global markets."
    break;
    case 7:
    return "This majority-minority group mostly identifies as Democratic or leans toward the Democratic Party. Disaffected Democrats strongly believe the economic system unfairly favors powerful interests and that business corporations make too much profit. Relatively few believe their family has achieved the American Dream, and 24% believe it is out of reach for their family. Most say the government should do more to help the needy and that poor people have hard lives because government benefits do not go far enough to help them live decently. In contrast to other Democratic-oriented groups, a majority (63%) characterizes government as “almost always wasteful and inefficient."
    break;
    case 8:
    return "This racially and ethnically diverse group is less politically homogenous than most other typology groups, though a 59% majority associates with the Democratic Party. Devout and Diverse voice strong support for the social safety net and further action on racial equality. However, they take more conservative views than their fellow Democratic-leaning groups on a number of issues including global engagement, views of business and attitudes on homosexuality and immigrants. Devout and Diverse are defined, in part, by their faith: Most say that it is necessary to believe in God in order to be moral and have good values."
    break;
  }
}

let questions = [{
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
    choices: ["Our country has made the changes needed to give blacks equal rights with whites",
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
  let quiz = $('#quiz'); //Quiz div object
  let container2 = $('#container2');
  let party;

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
    quiz.children("p").remove();
    container2.children("p").remove();
    title2.remove();
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
        quiz.append("<p>"+scoreElem+"</p>").fadeIn();
        title2.append("What this Means")
        container2.append("<p>"+ typologyDescriptor() + "</p>").fadeIn();
        $('#next').hide();
        $('#prev').hide();
        $('#start').show();
      }
    });
  }

  // Computes score and returns a paragraph element to be displayed
  function displayScore() {
    var score = $('<p>',{id: 'question'});
    var answers = [];
    var numCorrect = 0;
    for (var i = 0; i < selections.length; i++) {
      if (selections[i] === questions[i].correctAnswer) {
        answers.push(-1);
      }
      else if (selections[i] !== questions[i].correctAnswer) {
        answers.push(1);
      }
      console.log(answers);
    }
    party = answers.pop();
    var partyStr="";
    if (party==-1){
      partyStr = "Democrat";
    }
    else if (party==1){
      partyStr = "Republican";
    }
    else{
      console.log("PARTY IS "+partyStr);
    }
    return findTypology(answers,partyStr);
      //localStorage.setItem("answerArray", JSON.stringify(answers)); to get it back JSON.parse(localStorage.getItem("tGrades"))
  }
