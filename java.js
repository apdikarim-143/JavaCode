
    // Navigation function
    function showSection(sectionId) {
      const sections = document.querySelectorAll('.section');
      sections.forEach(section => {
        section.classList.remove('active');
      });
      document.getElementById(sectionId).classList.add('active');
    }

    // DOM Elements
    const calcBtn = document.getElementById("calcBtn");
    const errorMsg = document.getElementById("errorMsg");
    const totalMsg = document.getElementById("totalMsg");

    // Event
    calcBtn.addEventListener("click", function () {
      const name = document.getElementById("customerName").value;
      const food = document.getElementById("foodPrice").value;
      const drink = document.getElementById("drinkPrice").value;

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