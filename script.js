document.addEventListener("DOMContentLoaded", function () {
    const starContainer = document.createElement("div");
    starContainer.classList.add("stars");

    for (let i = 0; i < 100; i++) {
        let star = document.createElement("div");
        star.classList.add("star");
        star.style.top = Math.random() * 100 + "vh";
        star.style.left = Math.random() * 100 + "vw";
        star.style.animationDuration = Math.random() * 2 + "s";
        starContainer.appendChild(star);
    }

    document.body.appendChild(starContainer);

    // Dark Mode Toggle
    const darkModeToggle = document.getElementById("darkModeToggle");
    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });

    // Skills Chart
    const ctx = document.getElementById("skillsChart").getContext("2d");
    new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["Cypress", "Selenium", "Python", "GenAI", "JIRA"],
            datasets: [{
                label: "Skill Level",
                data: [90, 85, 80, 95, 75],
                backgroundColor: ["#0073e6", "#4CAF50", "#FFC107", "#FF5722", "#9C27B0"]
            }]
        }
    });
});
