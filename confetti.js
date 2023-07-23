const fallingConfetti = () => {
  let confettiContainer = document.getElementById("confetti-container");
  let colors = ["#8398FF", "#FFD34E", "#E870B0", "#6ECE8A", "#8DDFF2"];
  for (let i = 0; i < 1000; i++) {
    const element = document.createElement("div");
    element.classList.add("confetti");
    confettiContainer.appendChild(element);
  }
  let confetti = document.querySelectorAll(".confetti");

  for (let i = 0; i < confetti.length; i++) {
    const size = Math.random() * 0.01 * [i];
    confetti[i].style.width = 3 + size + "px";
    confetti[i].style.height = 15 + size + "px";
    confetti[i].style.left = Math.random() * innerWidth + "px";

    let background = colors[Math.floor(Math.random() * colors.length)];
    confetti[i].style.backgroundColor = background;

    confetti[i].style.transform = "rotate(" + size * [i] + "deg)";
  }
};

fallingConfetti();
