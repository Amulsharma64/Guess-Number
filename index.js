const main = document.querySelector(".main");
const again = document.querySelector(".again .btn");
const formArea = document.querySelector(".formArea");
let formValue = document.querySelector(".formValue");
let displayValue = document.querySelector(".enteredNumber span p");
let aside = document.querySelector(".aside");
let para = document.createElement("p");
let para1 = document.createElement("p");
let para2 = document.createElement("p");
const alerts = document.querySelector(".alert");
let i = 1;
const number = Math.trunc(Math.random() * 100);
displayValue.innerHTML = `?`;
const increment = () => {
  let values = formValue.value;
  if (values > number) {
    aside.appendChild(
      para
    ).innerHTML = `You Entered <span> ${values} </span> is Greater than the actual number `;
  } else if (values < number) {
    aside.appendChild(
      para
    ).innerHTML = `You Entered <span> ${values} </span> is Small than the actual number `;
  } else {
    alerts.classList.remove("hidealert");
    alerts.appendChild(para).innerHTML = ` Hurray 🥇 you find Correct Number`;
    alerts.appendChild(para2).innerHTML = `You got ${
      10 - i
    } marks out of ${10}`;
    main.style.backgroundColor = "green";
    displayValue.innerHTML = number;
    setTimeout(() => {
      location.reload();
    }, 4000);
  }

  aside.appendChild(para1).innerHTML = `You tried <span> ${i} </span> times `;
  i++;
  console.log(i);
};

const handleform = (e) => {
  e.preventDefault();
  increment();
};

formArea.addEventListener("submit", handleform);
