(function () {
  "use strict";

  var quizQuestions = [
    {
      question: "What does extinction mean in biology?",
      options: [
        "A species moves to a new habitat",
        "A species population declines seasonally",
        "The last individual of a species dies globally",
        "A species changes its diet"
      ],
      answer: 2
    },
    {
      question: "Which factor is strongly linked to many modern extinctions?",
      options: [
        "Natural plate tectonics alone",
        "Human-driven habitat destruction",
        "Only asteroid impacts",
        "Ocean tides"
      ],
      answer: 1
    },
    {
      question: "Why are fossils important for extinction studies?",
      options: [
        "They predict daily weather",
        "They reveal past life forms and ecosystem changes",
        "They replace all modern field research",
        "They only show plant history"
      ],
      answer: 1
    },
    {
      question: "What is a key difference between extinct and endangered species?",
      options: [
        "Endangered species can still be conserved",
        "Extinct species always return naturally",
        "Endangered species have zero living individuals",
        "There is no difference"
      ],
      answer: 0
    },
    {
      question: "Which action best helps reduce extinction risk today?",
      options: [
        "Ignoring population data",
        "Expanding unplanned land conversion",
        "Protecting habitats and supporting conservation policy",
        "Removing protected areas"
      ],
      answer: 2
    }
  ];

  document.addEventListener("DOMContentLoaded", function () {
    initQuiz();
  });

  function initQuiz() {
    var quizCard = document.getElementById("quizCard");
    if (!quizCard) {
      return;
    }

    var progressEl = document.getElementById("quizProgress");
    var questionEl = document.getElementById("quizQuestion");
    var optionsEl = document.getElementById("quizOptions");
    var feedbackEl = document.getElementById("quizFeedback");
    var nextButton = document.getElementById("quizNext");

    var resultBox = document.getElementById("quizResult");
    var scoreText = document.getElementById("quizScoreText");
    var restartButton = document.getElementById("quizRestart");

    var currentQuestionIndex = 0;
    var score = 0;

    renderQuestion();

    nextButton.addEventListener("click", function () {
      var selectedOption = optionsEl.querySelector("input[name='quizOption']:checked");

      if (!selectedOption) {
        feedbackEl.textContent = "Please select an answer before moving to the next question.";
        return;
      }

      feedbackEl.textContent = "";

      if (Number(selectedOption.value) === quizQuestions[currentQuestionIndex].answer) {
        score += 1;
      }

      currentQuestionIndex += 1;

      if (currentQuestionIndex >= quizQuestions.length) {
        showResult();
      } else {
        renderQuestion();
      }
    });

    restartButton.addEventListener("click", function () {
      currentQuestionIndex = 0;
      score = 0;
      resultBox.classList.add("hidden");
      quizCard.classList.remove("hidden");
      feedbackEl.textContent = "";
      renderQuestion();
    });

    function renderQuestion() {
      var current = quizQuestions[currentQuestionIndex];

      progressEl.textContent = "Question " + (currentQuestionIndex + 1) + " of " + quizQuestions.length;
      questionEl.textContent = current.question;

      optionsEl.innerHTML = "";
      current.options.forEach(function (optionText, index) {
        var optionId = "quizOption" + index;
        var label = document.createElement("label");
        label.className = "quiz-option";
        label.setAttribute("for", optionId);

        var input = document.createElement("input");
        input.type = "radio";
        input.name = "quizOption";
        input.id = optionId;
        input.value = String(index);

        var span = document.createElement("span");
        span.textContent = optionText;

        label.appendChild(input);
        label.appendChild(span);
        optionsEl.appendChild(label);
      });

      if (currentQuestionIndex === quizQuestions.length - 1) {
        nextButton.textContent = "Finish Quiz";
      } else {
        nextButton.textContent = "Next Question";
      }
    }

    function showResult() {
      quizCard.classList.add("hidden");
      resultBox.classList.remove("hidden");

      var total = quizQuestions.length;
      var percentage = Math.round((score / total) * 100);
      var levelMessage = "";

      if (percentage >= 80) {
        levelMessage = "Excellent understanding of extinction and conservation.";
      } else if (percentage >= 50) {
        levelMessage = "Good effort. Review the sections once more for stronger clarity.";
      } else {
        levelMessage = "Keep exploring the pages. You will quickly improve with another attempt.";
      }

      scoreText.textContent = "You scored " + score + " out of " + total + " (" + percentage + "%). " + levelMessage;
    }
  }
})();

