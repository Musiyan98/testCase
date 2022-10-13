const formEl = document.querySelector("form");
const outputEl = document.querySelector(".output");
formEl.addEventListener("submit", sendMessage);
let phoneNumber;
const ukraineMobileNumber = [
  "050",
  "066",
  "095",
  "099",
  "067",
  "068",
  "096",
  "097",
  "098",
  "063",
  "073",
  "093",
];

function sendMessage(e) {
  e.preventDefault();
  let phoneForCheck = String(e.currentTarget.elements.input.value);
  let chengePhone = checkAndChengePhone(phoneForCheck);
  outputEl.textContent = `Ви хотіли отримати номер ${chengePhone}`;
}

function checkAndChengePhone(phone) {
  let resultPhone;
  phoneNumber = String(phone).trim();
  let numberLength = phoneNumber.length;
  switch (numberLength) {
    case 13:
      // console.log(phoneNumber);
      resultPhone = checkinternationalPhone(phoneNumber);
      break;
    case 12:
      resultPhone = checkinternationalPhoneWithuotPlus(phoneNumber);
      break;
    case 10:
      resultPhone = checkinternalPhone(phoneNumber);
      break;
    case 9:
      resultPhone = checkinternalPhoneWithuotZerro(phoneNumber);
      break;
    default:
      alert("введіть коректний номер, будь ласка");
  }

  console.log(resultPhone);
  return resultPhone;
}

function checkinternationalPhone(phone) {
  if (phone.slice(0, 4) === "+380") {
    let chekNum = phone.slice(3, 13);
    if (checkUkrainianOperator(chekNum)) {
      resultPhone = "9" + chekNum;
      return resultPhone;
    }
  }
  alert(`Номер ${phone} невірний! введіть коректний номер, будь ласка`);
}
function checkinternationalPhoneWithuotPlus(phone) {
  if (phone.slice(0, 3) === "380") {
    let chekNum = phone.slice(2, 12);
    if (checkUkrainianOperator(chekNum)) {
      resultPhone = "9" + chekNum;
      return resultPhone;
    }
  }
  alert(`Номер ${phone} невірний! введіть коректний номер, будь ласка`);
}
function checkinternalPhone(phone) {
  if (phone.slice(0, 1) === "0") {
    let chekNum = phone.slice(0, 10);
    if (checkUkrainianOperator(chekNum)) {
      resultPhone = "9" + chekNum;
      return resultPhone;
    }
  }
  alert(`Номер ${phone} невірний! введіть коректний номер, будь ласка`);
}
function checkinternalPhoneWithuotZerro(phone) {
  // if (phone.slice(0, 4) === "+380") {
  let chekNum = `0${phone}`;
  if (checkUkrainianOperator(chekNum)) {
    resultPhone = "9" + chekNum;
    return resultPhone;
  }
  alert(`Номер ${phone} невірний! введіть коректний номер, будь ласка`);
}

function checkUkrainianOperator(phone) {
  let chekNum = phone.slice(0, 3);
  itsUkrMobNumber = ukraineMobileNumber.includes(chekNum);

  if (itsUkrMobNumber) {
    return true;
  }

  return false;
}

// checkAndChengePhone("+380927726116     ");
// checkAndChengePhone("380957726116");
// checkAndChengePhone("0957726116");
// checkAndChengePhone("957726116");
// checkAndChengePhone("654165");
