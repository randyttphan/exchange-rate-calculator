//DOM elements
const currencyElement1 = document.getElementById("currency-one");
const amountElement1 = document.getElementById("amount-one");
const currencyElement2 = document.getElementById("currency-two");
const amountElement2 = document.getElementById("amount-two");
const rate = document.getElementById("rate");
const convertBtn = document.getElementById("convert");

//Fetch exchange rates and update the DOM
function calculate() {
  const currency_one = currencyElement1.value;
  const currency_two = currencyElement2.value;

  //make a request and select the currency dynamically
  fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then(response => response.json())
    .then(data => {
      //   console.log(data);
    });
}

//Event Listeners
currencyElement1.addEventListener("change", calculate);
amountElement1.addEventListener("input", calculate);
currencyElement2.addEventListener("change", calculate);
amountElement2.addEventListener("input", calculate);
convertBtn.addEventListener("click", calculate);
calculate();
