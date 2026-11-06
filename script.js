
const buttons = document.querySelectorAll(".choose-btn");

buttons.forEach(function(button) {

button.addEventListener("click", function() {


    const card = button.parentElement;

    
    const planName = card.querySelector("h2").textContent;
    const price = card.querySelector(".price").textContent;
    const description = card.querySelector(".description").textContent;

    
    const featureItems = card.querySelectorAll("li");

    let features = "";

    featureItems.forEach(function(item) {
        features += "\n- " + item.textContent;
    });

    
    const message =
        "PLAN DETAILS\n\n" +
        "Plan: " + planName + "\n" +
        "Price: " + price + "\n" +
        "Description: " + description + "\n\n" +
        "Features:" + features +
        "\n\nDo you want to confirm this plan?";

    
    const confirmPlan = confirm(message);

    if (confirmPlan) {

        alert(
            "Congratulations!\n\n" +
            "You have successfully selected " + planName +
            ".\n\nThank you for choosing our plan!"
        );

    } else {

        alert("Plan selection cancelled. You can choose another plan.");

    }

});

});