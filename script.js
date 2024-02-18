
const form = document.querySelector(".calculator");
const bmiText = document.getElementById("bmi");
const descText = document.getElementById("desc");


form.addEventListener("submit", onFormSubmit);
form.addEventListener("reset", onFormReset);

function onFormReset() {
  bmiText.textContent = "0";
  bmiText.className = "";
  descText.textContent = "N/A";
}

function onFormSubmit(e) {
  e.preventDefault();

  const weight = parseFloat(form.querySelector("#weight").value);
  const height = parseFloat(form.querySelector("#height").value);
  const age = parseFloat(form.querySelector("#age").value);

  if (isNaN(weight) || isNaN(height) || isNaN(age) || weight <= 0 || height <= 0 || age <= 0) {
    alert("Please enter valid weight, height, and age");
    return;
  }

  const heightInMeters = height / 100;
  const bmi = weight / Math.pow(heightInMeters, 2);
  const desc = interpretBMI(bmi, age);

  bmiText.textContent = bmi.toFixed(2);
  bmiText.className = desc;
  descText.innerHTML = `You are <strong>${desc}</strong>`;
}

function interpretBMI(bmi, age) {
  if (age >= 2 && age <= 19) {
    if (bmi < 5) {
      return "underweight";
    } else if (bmi >= 5 && bmi < 85) {
      return "healthy";
    } else if (bmi >= 85 && bmi < 95) {
      return "overweight";
    } else {
      return "obese";
    }
  } else {
    if (bmi < 18.5) {
      return "underweight";
    } else if (bmi < 25) {
      return "healthy";
    } else if (bmi < 30) {
      return "overweight";
    } else {
      return "obese";
    }
  }
}
