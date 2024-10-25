function calculateTip(event) {
  const totalAmount = parseFloat(document.getElementById("amount").value);
  const serviceCharge = parseFloat(document.getElementById("service").value);
  const noOfPeople = parseInt(document.getElementById("person").value);

  if (!validateInputs(totalAmount, serviceCharge, noOfPeople)) {
    return;
  }

  const totalTipAmount = totalAmount * serviceCharge;
  const eachPersonPayAmount = totalTipAmount / noOfPeople;

  displayResult(totalAmount, totalTipAmount, eachPersonPayAmount);

  clearInputs();
}

function validateInputs(totalAmount, serviceCharge, noOfPeople) {
  if (isNaN(totalAmount) || totalAmount <= 0) {
    alert("Please enter a valid total amount greater than 0.");
    return false;
  }

  if (isNaN(serviceCharge) || serviceCharge <= 0) {
    alert("Please select a valid tip percentage.");
    return false;
  }

  if (isNaN(noOfPeople) || noOfPeople <= 0) {
    alert("Please enter a valid number of people greater than 0.");
    return false;
  }

  return true;
}

function displayResult(totalAmount, totalTipAmount, eachPersonPayAmount) {
  const result = document.getElementById("result");
  result.style.display = "block";

  result.innerHTML = "";

  // Create secure elements with textContent (prevents XSS)
  const para1 = document.createElement("p");
  const para2 = document.createElement("p");
  const para3 = document.createElement("p");

  para1.textContent = `Your total bill amount is: $${totalAmount.toFixed(2)}`;
  para2.textContent = `Your total tip amount is: $${totalTipAmount.toFixed(2)}`;
  para3.textContent = `Each person should pay: $${eachPersonPayAmount.toFixed(
    2
  )}`;

  // Append the results to the result div
  result.appendChild(para1);
  result.appendChild(para2);
  result.appendChild(para3);
}

// Function to clear input fields
function clearInputs() {
  document.getElementById("amount").value = "";
  document.getElementById("service").value = "0";
  document.getElementById("person").value = "";
}

document
  .getElementById("calculate-btn")
  .addEventListener("click", calculateTip);
