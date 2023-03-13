const scissor = document.querySelector(".scissor");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const answer = document.querySelector(".answer");
const result = document.querySelector(".result");
const lose = document.querySelector(".lose");
const draw = document.querySelector(".draw");
const again = document.querySelector(".again");

let resultNumber = Math.trunc(Math.random() * 3) + 1;

console.log(resultNumber);

scissor.addEventListener("click", function () {
  let resultNumber = Math.trunc(Math.random() * 3) + 1;
  this.style.width = "120px";
  answer.src = `./Image/${resultNumber}.png`;
  answer.style.width = "120px";
  rock.style.display = "none";
  paper.style.display = "none";
  answer.style.marginTop = "2.4rem";

  if (resultNumber == "1") {
    result.innerHTML = "Oops! Draw!";
  } else if (resultNumber == "2") {
    result.innerHTML = "You Lose :((";
  } else {
    result.innerHTML = "You Win!! ";
  }
});

rock.addEventListener("click", function () {
  let resultNumber = Math.trunc(Math.random() * 3) + 1;
  this.style.width = "120px";
  answer.src = `./Image/${resultNumber}.png`;
  answer.style.width = "120px";
  scissor.style.display = "none";
  paper.style.display = "none";
  answer.style.marginTop = "2.4rem";

  if (resultNumber == "1") {
    result.innerHTML = "You Win!! ";
  } else if (resultNumber == "2") {
    result.innerHTML = "Oops! Draw!";
  } else {
    result.innerHTML = "You Lose :((";
  }
});

paper.addEventListener("click", function () {
  let resultNumber = Math.trunc(Math.random() * 3) + 1;
  this.style.width = "120px";
  answer.src = `./Image/${resultNumber}.png`;
  answer.style.width = "120px";
  rock.style.display = "none";
  scissor.style.display = "none";
  answer.style.marginTop = "2.4rem";

  if (resultNumber == "1") {
    result.innerHTML = "You Lose :((";
  } else if (resultNumber == "2") {
    result.innerHTML = "You Win!! ";
  } else {
    result.innerHTML = "Oops! Draw!";
  }
});

again.addEventListener("click", function () {
  result.innerHTML = "";
  scissor.style.width = "70px";
  rock.style.width = "70px";
  paper.style.width = "70px";
  answer.style.width = "70px";
  answer.src = "./Image/900px-Icon-round-Question_mark.jpg";
  scissor.style.display = "block";
  rock.style.display = "block";
  paper.style.display = "block";
  answer.style.marginTop = "5rem";
});

//
