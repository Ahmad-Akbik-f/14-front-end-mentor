/** @format */
//Varibles
let main = document.querySelector("main .form");
let card = document.querySelector(".card");
let form = document.querySelector(".form form");
let nameInp = document.querySelector('.form form input[name="name"]');
let numInp = document.querySelector('.form form input[name="number"]');
let mInp = document.querySelector('.form form input[name="month"]');
let yInp = document.querySelector('.form form input[name="year"]');
let cvcInp = document.querySelector(".form form .backNumber input");
let cardName = document.querySelector(".cards .front__det p");
let cardNums = document.querySelectorAll(".cards .front__number .nums p");
let cardY = document.querySelector(".cards .front__det .date .year");
let cardM = document.querySelector(".cards .front__det .date .month");
let cardCVC = document.querySelector(".img-cards .cards .back p");
let btn = document.querySelector(".form form .button");
//Trigers
let triger1 = false;
let triger2 = false;
let triger3 = false;
let triger4 = false;
let triger5 = false;
let triger6 = false;
//btn
btn.onclick = (el) => {
  el.preventDefault();
  nameValidat();
  numValidation();
  cvcValidation();
  dateValidate();
  if (!triger3) {
    mInp.parentElement.classList.add("error");
    yInp.parentElement.classList.add("error");
  } else {
    mInp.parentElement.classList.remove("error");
    yInp.parentElement.classList.remove("error");
  }
  if (triger1 && triger2 && triger3 && triger4 && triger5 && triger6) {
    main.removeChild(form);
    let done = document.createElement("form");
    done.classList.add("done");
    let tick = document.createElement("div");
    tick.textContent = "✔";
    let doneThanks = document.createElement("h2");
    doneThanks.textContent = "THANK YOU!";
    let doneText = document.createElement("p");
    doneText.textContent = "We've added your card details";
    let doneBtn = document.createElement("a");
    doneBtn.textContent = "Continue";
    doneBtn.classList.add("button");
    done.append(tick, doneThanks, doneText, doneBtn);
    main.append(done);
    console.log("good");
  }
};

//
nameInp.oninput = () => {
  nameValidat();
  cardName.textContent = nameInp.value;
};

//
numInp.oninput = (el) => {
  numValidation();
  for (let i = 0; i < cardNums.length; i++) {
    if (numInp.value[i] != undefined) {
      cardNums[i].textContent = numInp.value[i];
    } else {
      cardNums[i].textContent = 0;
    }
  }
};

//

mInp.oninput = () => {
  dateValidate();
  if (triger4) {
    cardM.textContent = mInp.value;
  } else {
    cardM.textContent = "00";
  }
  if (!triger3) {
    mInp.parentElement.classList.add("error");
  } else {
    mInp.parentElement.classList.remove("error");
  }
};

yInp.oninput = () => {
  dateValidate();
  if (triger5) {
    cardY.textContent = yInp.value;
  } else {
    cardY.textContent = "00";
  }
  if (!triger3) {
    yInp.parentElement.classList.add("error");
  } else {
    yInp.parentElement.classList.remove("error");
  }
};

//
cvcInp.onfocus = () => {
  card.classList.add("fliped");
};
cvcInp.onblur = () => {
  card.classList.remove("fliped");
};
cvcInp.oninput = () => {
  cardCVC.textContent = cvcInp.value;
  cvcValidation();
};

//functions
function flipTheCard(inp) {
  if (inp.name == "cvc") {
    card.classList.add("fliped");
  } else {
    card.classList.add("fliped");
  }
}

function numValidation() {
  empty(numInp, triger2);
  if (Number.isNaN(Number(numInp.value))) {
    triger2 = false;
    numInp.parentElement.classList.add("error");
    numInp.parentElement.classList.add("num");
    numInp.classList.add("error");
  } else {
    triger2 = true;
  }
}

//
function nameValidat() {
  empty(nameInp, triger1);
  if (nameInp.value.length >= 5 && !Number.isNaN(nameInp.value)) {
    triger1 = true;
    nameInp.parentElement.classList.remove("error");
    nameInp.classList.remove("error");
  } else {
    triger1 = false;
    nameInp.parentElement.classList.add("error");
    nameInp.classList.add("error");
  }
}
function dateValidate() {
  empty(mInp, triger4);
  empty(yInp, triger5);
  if (Number.parseInt(mInp.value) <= 12 && Number.parseInt(mInp.value) > 0) {
    triger4 = true;
    mInp.classList.remove("error");
  } else {
    triger4 = false;
    mInp.classList.add("error");
  }
  if (Number.parseInt(yInp.value) <= 23 && Number.parseInt(yInp.value) > 0) {
    triger5 = true;
    yInp.classList.remove("error");
  } else {
    triger5 = false;
    yInp.classList.add("error");
  }
  if (triger4 && triger5) {
    triger3 = true;
  } else {
    triger3 = false;
  }
}
//
function cvcValidation() {
  empty(cvcInp, triger6);
  if (cvcInp.value.length == 3) {
    triger6 = true;
    cvcInp.parentElement.classList.remove("error", "cvc");
    cvcInp.classList.remove("error");
  } else {
    triger6 = false;
    cvcInp.parentElement.classList.add("error", "cvc");
    cvcInp.classList.add("error");
    cardCVC.textContent = "###";
  }
}

//
function empty(inp, tri) {
  if (inp.value == "") {
    inp.parentElement.classList.remove(/./gi);
    inp.parentElement.classList.add("error");
    inp.classList.add("error");
    tri = false;
  } else {
    tri = true;
    inp.parentElement.classList.remove("error");
    inp.classList.remove("error");
  }
}
