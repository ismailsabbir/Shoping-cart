function clculator1(currentCasNumb, casingPrice) {
  casingTotalprice = currentCasNumb * 59;
  casingPrice.innerText = casingTotalprice;
}

function calculation(currentmobNumb, mobilePrice) {
  const mobileTotalprice = currentmobNumb * 1219;
  mobilePrice.innerText = mobileTotalprice;
}

document
  .getElementById("mobile-incre-btn")
  .addEventListener("click", function () {
    const mobileNumber = document.getElementById("mobile-number");
    const mobilenumberstr = mobileNumber.value;
    const mobilenumberval = parseInt(mobilenumberstr);
    const currentmobNumb = mobilenumberval + 1;
    mobileNumber.value = currentmobNumb;

    const mobilePrice = document.getElementById("mobile-price");
    const result1 = calculation(currentmobNumb, mobilePrice);
    const subele = document.getElementById("sub-total");
    const substr = subele.innerText;
    const subtotlval = parseFloat(substr);

    const subres = subtotlval;
    const sub = subres + 1219;
    subele.innerText = sub;

    const textele = document.getElementById("text-amount");
    const textstr = textele.innerText;
    const textAmount1 = parseFloat(textstr);
    const textAmount = textAmount1 + 20;

    textele.innerText = textAmount;

    const finalele = document.getElementById("final-amount");
    const finalstr = finalele.innerText;
    const finalval = parseFloat(finalstr);
    const finalsub = finalval + 1219 + 20;
    finalele.innerText = finalsub;
  });

// function calculation(currentmobNumb, mobilePrice) {
//   const mobileTotalprice = currentmobNumb * 1219;
//   mobilePrice.innerText = mobileTotalprice;
// }

document
  .getElementById("mobile-dec-btn")
  .addEventListener("click", function () {
    const mobileNumber = document.getElementById("mobile-number");
    const mobilenumberstr = mobileNumber.value;
    const mobilenumberval = parseInt(mobilenumberstr);
    const currentmobNumb = mobilenumberval - 1;
    mobileNumber.value = currentmobNumb;

    const mobilePrice = document.getElementById("mobile-price");

    const result1 = calculation(currentmobNumb, mobilePrice);

    const textele = document.getElementById("text-amount");
    const textstr = textele.innerText;
    const textAmount1 = parseFloat(textstr);
    const textAmount = textAmount1 + 20;
    textele.innerText = textAmount;

    if (currentmobNumb < 0) {
      return 0;
    } else {
      const subele = document.getElementById("sub-total");
      const substr = subele.innerText;
      const subtotlval = parseFloat(substr);
      const subres = subtotlval;
      const sub = subres - 1219;
      subele.innerText = sub;

      const finalele = document.getElementById("final-amount");
      const finalstr = finalele.innerText;
      const finalval = parseFloat(finalstr);
      const finalsub = finalval - 1219 - 20;
      finalele.innerText = finalsub;
    }
  });

document.getElementById("increase-btn").addEventListener("click", function () {
  const casingNumber = document.getElementById("casing-number");
  const casingnumberstr = casingNumber.value;
  const casingnumberval = parseInt(casingnumberstr);
  const currentCasNumb = casingnumberval + 1;
  casingNumber.value = currentCasNumb;

  const textele = document.getElementById("text-amount");
  const textstr = textele.innerText;
  const textAmount1 = parseFloat(textstr);
  const textAmount = textAmount1 + 10;
  textele.innerText = textAmount;

  const casingPrice = document.getElementById("casing-price");

  const result1 = clculator1(currentCasNumb, casingPrice);

  const subele = document.getElementById("sub-total");
  const substr = subele.innerText;
  const subtotlval = parseFloat(substr);
  const subres = subtotlval;
  const sub = subres + 59;
  subele.innerText = sub;

  const finalele = document.getElementById("final-amount");
  const finalstr = finalele.innerText;
  const finalval = parseFloat(finalstr);
  const finalsub = finalval + 59 + 20;
  finalele.innerText = finalsub;
});

// function clculator1(currentCasNumb, casingPrice) {
//   casingTotalprice = currentCasNumb * 59;
//   casingPrice.innerText = casingTotalprice;
// }

document.getElementById("decrese-btn").addEventListener("click", function () {
  const casingNumber = document.getElementById("casing-number");
  const casingnumberstr = casingNumber.value;
  const casingnumberval = parseInt(casingnumberstr);

  const textele = document.getElementById("text-amount");
  const textstr = textele.innerText;
  const textAmount1 = parseFloat(textstr);
  const textAmount = textAmount1 + 10;
  textele.innerText = textAmount;

  const currentCasNumb = casingnumberval - 1;
  casingNumber.value = currentCasNumb;

  const casingPrice = document.getElementById("casing-price");
  clculator1(currentCasNumb, casingPrice);

  if (currentCasNumb < 0) {
    return 0;
  } else {
    const subele = document.getElementById("sub-total");
    const substr = subele.innerText;
    const subtotlval = parseFloat(substr);
    const subres = subtotlval;
    const sub = subres - 59;
    subele.innerText = sub;

    const finalele = document.getElementById("final-amount");
    const finalstr = finalele.innerText;
    const finalval = parseFloat(finalstr);
    const finalsub = finalval - 59 - 20;
    finalele.innerText = finalsub;
  }
});
// container

document.getElementById("check-btn").addEventListener("click", function () {
  window.print();
});
