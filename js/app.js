let input = document.querySelector(".email");
let btn = document.querySelector(".next-btn");
let sendMoneyBtn = document.querySelector(".send-money");
let mainPage = document.querySelector(".main");
let secondPage = document.querySelector(".second-page");
let loader = document.querySelector(".loader");
let transferFoundBtn = document.querySelector(".transfer-btn");
let dashboard = document.querySelector(".dashboard");
let sendAndRequest = document.querySelector(".send-and-request");
let inputUsd = document.querySelector(".input-usd");
let finishBtn = document.querySelector(".finish-btn");
let chosedUser = document.querySelector(".choseduser");
let thirdPage = document.querySelector(".third-page");
let finishPage = document.querySelector(".ssecssesfuly-wrapper");
let makeMorePayment = document.querySelector(".make-more-btn");
let countUsd = document.querySelector(".count-usd");
let sendingUser = document.querySelector(".sending-user");
let balance = document.querySelector(".balance");
let balanceCount = 478152000;
let count = 0;

inputUsd.addEventListener("keypress", (e) => {
  if (
    e.key === "1" ||
    e.key === "2" ||
    e.key === "3" ||
    e.key === "4" ||
    e.key === "5" ||
    e.key === "6" ||
    e.key === "7" ||
    e.key === "8" ||
    e.key === "9" ||
    e.key === "0"
  ) {
    finishBtn.classList.add("active");
  } else {
    finishBtn.classList.remove("active");
  }
});

makeMorePayment.addEventListener("click", () => {
  loader.classList.remove("hidden");
  finishPage.classList.add("hidden");
  setTimeout(() => {
    loader.classList.add("hidden");
    mainPage.classList.remove("hidden");
  }, 1000);
});

finishBtn.addEventListener("click", () => {
  let numberValue = 0;
  numberValue = inputUsd.value;
  if (balanceCount < numberValue) {
    balance.innerHTML = "0";
  } else {
    count = balanceCount - parseInt(numberValue);
    balanceCount = balanceCount - parseInt(numberValue);
    balance.innerHTML = `$${count.toLocaleString()}`;
  }
  thirdPage.classList.add("hidden");
  loader.classList.remove("hidden");
  countUsd.innerHTML = `$${inputUsd.value}`;
  sendingUser.innerHTML = `@${input.value}`;
  input.value = "";
  inputUsd.value = "";
  setTimeout(() => {
    loader.classList.add("hidden");
    finishPage.classList.remove("hidden");
  }, 1000);
});

btn.addEventListener("click", () => {
  chosedUser.innerHTML = `@${input.value}`;
  secondPage.classList.add("hidden");
  finishPage.classList.add("hidden");
  loader.classList.remove("hidden");

  setTimeout(() => {
    thirdPage.classList.remove("hidden");
    loader.classList.add("hidden");
  }, 1000);
});

sendAndRequest.addEventListener("click", () => {
  sendAndRequest.classList.add("active");
  thirdPage.classList.add("hidden");
  finishPage.classList.add("hidden");
  dashboard.classList.remove("active");
  mainPage.classList.add("hidden");
  loader.classList.remove("hidden");
  input.value = "";
  inputUsd.value = "";
  setTimeout(() => {
    loader.classList.add("hidden");
    secondPage.classList.remove("hidden");
  }, 1000);
});

dashboard.addEventListener("click", () => {
  dashboard.classList.add("active");
  thirdPage.classList.add("hidden");
  finishPage.classList.add("hidden");
  sendAndRequest.classList.remove("active");
  secondPage.classList.add("hidden");
  loader.classList.remove("hidden");
  input.value = "";
  inputUsd.value = "";
  setTimeout(() => {
    loader.classList.add("hidden");
    mainPage.classList.remove("hidden");
  }, 1000);
});

transferFoundBtn.addEventListener("click", () => {
  sendAndRequest.classList.add("active");
  thirdPage.classList.add("hidden");
  finishPage.classList.add("hidden");
  dashboard.classList.remove("active");
  mainPage.classList.add("hidden");
  loader.classList.remove("hidden");
  input.value = "";
  inputUsd.value = "";
  setTimeout(() => {
    loader.classList.add("hidden");
    secondPage.classList.remove("hidden");
  }, 1000);
});

sendMoneyBtn.addEventListener("click", () => {
  sendAndRequest.classList.add("active");
  thirdPage.classList.add("hidden");
  finishPage.classList.add("hidden");
  dashboard.classList.remove("active");
  mainPage.classList.add("hidden");
  loader.classList.remove("hidden");
  input.value = "";
  inputUsd.value = "";
  setTimeout(() => {
    loader.classList.add("hidden");
    secondPage.classList.remove("hidden");
  }, 1000);
});

input.addEventListener("keypress", (e) => {
  if (
    e.key === "q" ||
    e.key === "w" ||
    e.key === "e" ||
    e.key === "r" ||
    e.key === "t" ||
    e.key === "y" ||
    e.key === "u" ||
    e.key === "i" ||
    e.key === "o" ||
    e.key === "p" ||
    e.key === "a" ||
    e.key === "s" ||
    e.key === "d" ||
    e.key === "f" ||
    e.key === "g" ||
    e.key === "h" ||
    e.key === "j" ||
    e.key === "k" ||
    e.key === "l" ||
    e.key === "z" ||
    e.key === "x" ||
    e.key === "c" ||
    e.key === "v" ||
    e.key === "b" ||
    e.key === "n" ||
    e.key === "m" ||
    e.key === "Q" ||
    e.key === "W" ||
    e.key === "E" ||
    e.key === "R" ||
    e.key === "T" ||
    e.key === "Y" ||
    e.key === "U" ||
    e.key === "I" ||
    e.key === "O" ||
    e.key === "P" ||
    e.key === "A" ||
    e.key === "S" ||
    e.key === "D" ||
    e.key === "F" ||
    e.key === "G" ||
    e.key === "H" ||
    e.key === "J" ||
    e.key === "K" ||
    e.key === "L" ||
    e.key === "Z" ||
    e.key === "X" ||
    e.key === "C" ||
    e.key === "V" ||
    e.key === "B" ||
    e.key === "N" ||
    e.key === "M" ||
    e.key === "@" ||
    e.key === "-" ||
    e.key === "_" ||
    e.key === "." ||
    e.key === "1" ||
    e.key === "2" ||
    e.key === "3" ||
    e.key === "4" ||
    e.key === "5" ||
    e.key === "6" ||
    e.key === "7" ||
    e.key === "8" ||
    e.key === "9" ||
    e.key === "0"
  ) {
    btn.classList.add("btn-active");
  } else {
    btn.classList.remove("btn-active");
  }
});
