const main = document.querySelector(".main");
const again = document.querySelector(".again .btn");
const formArea = document.querySelector(".formArea");
let formValue = document.querySelector(".formValue");
let aside = document.querySelector(".aside");
let para = document.createElement("p");
let para1 = document.createElement("p");
const X_mark = document.querySelector(".fa-xmark");
let para2 = document.createElement("p");
const alerts = document.querySelector(".alert");
let i = 1;

const RandomNumber = () => { // function to generate random number
  let displayValue = document.querySelector(".enteredNumber span p"); // to display the entered number
  displayValue.innerHTML = `?`;
  return Math.floor(Math.random() * 100) + 1;
 
};

let number = RandomNumber(); // function to generate random number on window load
let run = true;

const isMatch = () => { // function to check the number matched or not
  let values = parseInt(formValue.value);
  if (i <= 10 && run) {
    if (values > number) {
      aside.appendChild(
        para
      ).innerHTML = `You Entered <span> ${values} </span> is Greater than the actual number `;
      displayValue.innerHTML = values;
    } else if (values < number) {
      aside.appendChild(
        para
      ).innerHTML = `You Entered <span> ${values} </span> is Small than the actual number `;
      displayValue.innerHTML = values;
    } else {
      run = false;
      alerts.classList.remove("hidealert");
      alerts.appendChild(para).innerHTML = ` Hurray 🥇 you find Correct Number`;
      alerts.appendChild(para2).innerHTML = `You got ${
        10 - i
      } marks out of ${10}`;
      main.style.backgroundColor = "green";
      displayValue.innerHTML = number;
    }

    side.appendChild(para1).innerHTML = `You tried <span> ${i} </span> times `;
    i++;
    console.log(i);
  } else {
    run = false;
    aside.appendChild(para).innerHTML = `You Loss 😩`;
    console.log(i);
    main.style.backgroundColor = " rgb(255, 30, 30)";
  }
};

const handleform = (e) => { // function to handle the form
  e.preventDefault();
  isMatch();
};

X_mark.addEventListener("click", () => { // function to close the alert box
  alerts.classList.add("hidealert");
});

again.addEventListener("click", () => { // function to reset the game
  number = RandomNumber();
  displayValue.innerHTML = ``;
  formValue.value = "";
  aside.appendChild(para).innerHTML = "";
  aside.appendChild(para1).innerHTML = "";
  alerts.classList.add("hidealert");
  main.style.backgroundColor = "rgb(255, 137, 157)";
  run = true;
  i = 1;
});

formArea.addEventListener("submit", handleform);
