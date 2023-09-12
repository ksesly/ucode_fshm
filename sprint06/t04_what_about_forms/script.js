document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("quiz-form");
    const result = document.getElementById("result");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = new FormData(form);
        let score = 0;
        if (formData.get("question1") === "correct") {
            score++;
        }
        if (formData.get("question2") === "correct") {
            score++;
        }
        if (formData.get("question3") === "correct") {
            score++;
        }
        if (formData.get("question4") === "correct") {
            score++;
        }

        const question5Answer = formData.get("question5").toLowerCase();
        if (question5Answer.includes("mjolnir") || question5Answer.includes("stormbreaker")) {
            score++;
        }

        const totalQuestions = 5; 
        result.innerHTML = `You scored ${score} out of ${totalQuestions} questions.`;

        const normalTime = calculateNormalTime();
        const quantumTime = calculateQuantumTime();
        displayTime(normalTime, quantumTime);
    });

    function calculateNormalTime() {
       
        const years = 2;
        const months = 6;
        const days = 15;
        return { years, months, days };
    }

    // Function to calculate time in quantum space
    function calculateQuantumTime() {
        // Calculate time in quantum space here
        const years = 0;
        const months = 7;
        const days = 20;
        return [years, months, days];
    }

    // Function to display time in both spaces
    function displayTime(normalTime, quantumTime) {
        console.log(`In real life you were absent for ${normalTime.years} years, ${normalTime.months} months, ${normalTime.days} days.`);
        console.log(`In quantum space you were absent for ${quantumTime[0]} years, ${quantumTime[1]} months, ${quantumTime[2]} days.`);
    }
});
