const calcBtn = document.getElementById("calcBtn");

if (calcBtn) {
  calcBtn.addEventListener("click", function () {
    const name = document.getElementById("customerName").value;
    const food = document.getElementById("foodPrice").value;
    const drink = document.getElementById("drinkPrice").value;

    const errorMsg = document.getElementById("errorMsg");
    const totalMsg = document.getElementById("totalMsg");

    errorMsg.textContent = "";
    totalMsg.textContent = "";

    if (name === "" || food === "" || drink === "") {
      errorMsg.textContent = "Please fill in all fields.";
      return;
    }

    if (food < 0 || drink < 0) {
      errorMsg.textContent = "Prices cannot be negative.";
      return;
    }

    const total = Number(food) + Number(drink);
    totalMsg.textContent = "Thank you " + name + ". Total Bill: $" + total;
  });
}