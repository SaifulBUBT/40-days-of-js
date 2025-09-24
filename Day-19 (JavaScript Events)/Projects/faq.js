const faq = document.querySelector(".faq");
faq.addEventListener("click", (e) => {
  // const currentItem =  e.target.parentElement;
  // const currentAnswer = currentItem.querySelector('.answer');
  // // console.log(currentAnswer);
  // currentAnswer.classList.toggle('show')

  const currentItem = e.target.parentElement;
  const currentAnswer = currentItem.querySelector(".answer");
  if (currentAnswer) {
    currentAnswer.classList.toggle("show");
  }
});
// event listener
document.addEventListener("click", (e) => {
  const allAnswers = document.querySelectorAll(".answer.show");
  console.log(allAnswers);

  allAnswers.forEach((answer) => {
    answer.classList.remove("show");
  });
});
