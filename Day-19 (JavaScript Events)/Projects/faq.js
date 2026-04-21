const faq = document.querySelector(".faq");
faq.addEventListener("click", (e) => {
  // const currentItem =  e.target.parentElement;
  // const currentAnswer = currentItem.querySelector('.answer');
  // // console.log(currentAnswer);
  // currentAnswer.classList.toggle('show')

  const currentItem = e.target.parentElement;
  const currentAnswer = currentItem.querySelector(".answer");
  console.log(currentAnswer)
  if (currentAnswer) {
    currentAnswer.classList.toggle("show");
  }
});

