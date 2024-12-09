// script.js

document.addEventListener("DOMContentLoaded", () => {
    const toggleIngredientsBtn = document.getElementById("toggle-ingredients");
    const toggleStepsBtn = document.getElementById("toggle-steps");
    const ingredientsDiv = document.querySelector(".ingredients");
    const instructionsDiv = document.querySelector(".instructions");
    const startCookingBtn = document.getElementById("start-cooking");
    const nextStepBtn = document.getElementById("next-step");
    const steps = document.querySelectorAll(".instructions ol li");
    let currentStep = 0;
  
    // Toggle Ingredients
    toggleIngredientsBtn.addEventListener("click", () => {
      ingredientsDiv.classList.toggle("hidden");
      toggleIngredientsBtn.textContent = ingredientsDiv.classList.contains("hidden")
        ? "Show Ingredients"
        : "Hide Ingredients";
    });
  
    // Toggle Instructions
    toggleStepsBtn.addEventListener("click", () => {
      instructionsDiv.classList.toggle("hidden");
      toggleStepsBtn.textContent = instructionsDiv.classList.contains("hidden")
        ? "Show Steps"
        : "Hide Steps";
    });
  
    // Start Cooking
    startCookingBtn.addEventListener("click", () => {
      startCookingBtn.classList.add("hidden");
      nextStepBtn.classList.remove("hidden");
      highlightStep(currentStep);
    });
  
    // Go to Next Step
    nextStepBtn.addEventListener("click", () => {
      if (currentStep < steps.length - 1) {
        currentStep++;
        highlightStep(currentStep);
      } else {
        alert("You're done! Enjoy your dish!");
        nextStepBtn.classList.add("hidden");
      }
    });
  
    // Highlight Current Step
    function highlightStep(stepIndex) {
      steps.forEach((step, index) => {
        step.classList.toggle("active", index === stepIndex);
      });
    }
  });
  