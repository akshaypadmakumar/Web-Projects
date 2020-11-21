function check() {
  var question1 = document.quiz.question1.value;
  var question2 = document.quiz.question2.value;
  var question3 = document.quiz.question3.value;
  var question4 = document.quiz.question4.value;
  var question5 = document.quiz.question5.value;
  var correct = 0;

  if (question1 == "Washington DC") {
    correct++;
  }

  if (question2 == "5") {
    correct++;
  }

  if (question3 == "4") {
    correct++;
  }

  if (question4 == "78") {
    correct++;
  }

  if (question5 == "Arctic") {
    correct++;
  }

  alert("You got "+ correct + "/5 questions correct");
}
