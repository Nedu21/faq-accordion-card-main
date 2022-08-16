"use strict";

const questions = document.querySelectorAll(".card__content--body_question");

questions.forEach((question) => {
  question.addEventListener("click", function (e) {
    if (!question.classList.contains("card__content--body_question-active")) {
      questions.forEach((question) => {
        question.classList.remove("card__content--body_question-active");
      });
      question.classList.add("card__content--body_question-active");
    } else {
      question.classList.remove("card__content--body_question-active");
    }
  });
});
