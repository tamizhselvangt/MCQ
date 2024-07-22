const answer = document.querySelector(".answers");

answer.addEventListener("click", function (e) {
  // console.log(e.target);
  // console.log(answer);
  if (e.target.classList.contains("B")) {
    e.target.style.backgroundColor = "green";
  } else {
    e.target.style.backgroundColor = "red";
    document.querySelector(".B").style.backgroundColor = "green";
  }
});
