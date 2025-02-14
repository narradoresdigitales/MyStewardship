export function initEcoHero() {
    const app = document.getElementById('app');

    if (!app) {
        console.error("Error: #app container not found!");
        return;
    }

    // Goal Type Text
    const goalTypeText = document.createElement("p");
    goalTypeText.textContent = "Set a goal for how many days a week you will place plastics, cardboard in the recycling bin.";

    // Goal Input
    const goalInput = document.createElement("input");
    goalInput.type = "number";
    goalInput.placeholder = "Set your recycling goal (e.g., 10 items)";
    goalInput.classList.add("goalSet");

    // Buttons with added classes
    const setGoalBtn = document.createElement("button");
    setGoalBtn.textContent = "Set Goal";
    setGoalBtn.classList.add("green");  // Add class for styling

    const resetGoalBtn = document.createElement("button");
    resetGoalBtn.textContent = "Reset Goal";
    resetGoalBtn.classList.add("red");  // Add class for styling

    const removeLogBtn = document.createElement("button");
    removeLogBtn.textContent = "Remove Log Item";
    removeLogBtn.classList.add("yellow");  // Add class for styling

    // Progress Display
    const progressContainer = document.createElement("div");
    progressContainer.innerHTML = `
        <p><strong>Goal:</strong> <span id="goalText">Not set</span></p>
        <p><strong>Recycled:</strong> <span id="progress">0</span></p>
        <progress id="progressBar" value="0" max="10"></progress>
        <button id="logRecycle" class="blue">+ Log Item</button> <!-- Added class for styling -->
    `;

    // Append elements
    app.appendChild(goalTypeText); // Add the new text above the input
    app.appendChild(goalInput);
    app.appendChild(setGoalBtn);
    app.appendChild(resetGoalBtn);
    app.appendChild(removeLogBtn);
    app.appendChild(progressContainer);

    // Load saved goal if it exists
    const savedGoal = localStorage.getItem("recycleGoal");
    const savedProgress = localStorage.getItem("progress") || "0";

    if (savedGoal) {
        document.getElementById("goalText").textContent = `${savedGoal} days`;
        document.getElementById("progress").textContent = savedProgress;
        document.getElementById("progressBar").value = savedProgress;
        document.getElementById("progressBar").max = savedGoal;
    }

    // Handle Goal Setting
    setGoalBtn.addEventListener("click", () => {
        const goal = parseInt(goalInput.value);
        if (goal > 0) {
            localStorage.setItem("recycleGoal", goal);
            localStorage.setItem("progress", 0); // Reset progress when setting a new goal
            document.getElementById("goalText").textContent = `${goal} days`;
            document.getElementById("progressBar").max = goal;
            document.getElementById("progress").textContent = 0; // Reset progress text
            goalInput.value = ''; // Clear input field after setting goal
        } else {
            alert("Please enter a valid goal.");
        }
    });

    // Handle Resetting Goal
    resetGoalBtn.addEventListener("click", () => {
        localStorage.removeItem("recycleGoal");
        localStorage.setItem("progress", 0); // Reset progress
        document.getElementById("goalText").textContent = "Not set";
        document.getElementById("progress").textContent = 0;
        document.getElementById("progressBar").value = 0;
        document.getElementById("progressBar").max = 10; // Reset to default max
        alert("Goal has been reset!");
    });

    // Handle Progress Logging
    document.getElementById("logRecycle").addEventListener("click", () => {
        let progress = parseInt(localStorage.getItem("progress") || "0");
        const goal = parseInt(localStorage.getItem("recycleGoal") || "10");

        if (progress < goal) {
            progress++;
            localStorage.setItem("progress", progress);
            document.getElementById("progress").textContent = progress;
            document.getElementById("progressBar").value = progress;
        } else {
            alert("Goal reached! You have recycled all your target items.");
        }
    });

    // Handle Remove Log Item
    removeLogBtn.addEventListener("click", () => {
        let progress = parseInt(localStorage.getItem("progress") || "0");

        if (progress > 0) {
            progress--;
            localStorage.setItem("progress", progress);
            document.getElementById("progress").textContent = progress;
            document.getElementById("progressBar").value = progress;
        } else {
            alert("No logs to remove!");
        }
    });
}
