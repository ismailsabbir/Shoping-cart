document.getElementById("increase-btn").addEventListener("click", function () {
  const casingNumber = document.getElementById("casing-number");
  const casingnumberstr = casingNumber.value;
  const casingnumberval = parseInt(casingnumberstr);
  const currentCasNumb = casingnumberval + 1;
  casingNumber.value = currentCasNumb;

  const casingPrice = document.getElementById("casing-price");

  casingTotalprice = currentCasNumb * 59;
  casingPrice.innerText = casingTotalprice;
});
document.getElementById("decrese-btn").addEventListener("click", function () {
  const casingNumber = document.getElementById("casing-number");
  const casingnumberstr = casingNumber.value;
  const casingnumberval = parseInt(casingnumberstr);
  const currentCasNumb = casingnumberval - 1;
  casingNumber.value = currentCasNumb;

  const casingPrice = document.getElementById("casing-price");

  casingTotalprice = currentCasNumb * 59;
  casingPrice.innerText = casingTotalprice;
});
