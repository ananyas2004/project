const btnele = document.getElementById("btn");
const bmiinputele = document.getElementById("bmi-result");
const weightcndele = document.getElementById("weight-condition");

function calculateBMI()
{
const heightvalue = document.getElementById("height").value/ 100;
const weightvalue = document.getElementById("weight").value;


const bmiValue = weightvalue/ (heightvalue * heightvalue);
bmiinputele.value = bmiValue;


  if (bmiValue < 18.5) {
    weightcndele.innerText = "Under weight";
  } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    weightcndele.innerText = "Normal weight";
  } else if (bmiValue >= 25 && bmiValue <= 29.9) {
    weightcndele.innerText = "Overweight";
  } else if (bmiValue >= 30) {
    weightcndele.innerText = "Obesity";
  }
}

btnele.addEventListener("click" , calculateBMI)