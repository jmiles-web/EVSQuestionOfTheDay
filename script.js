async function loadDailyQuestion() {
    try {
        const response = await fetch("questions.json");
        const questions = await response.json();

        const today = new Date();

        const localDate = new Date(
            today.getTime() - today.getTimezoneOffset() * 60000
        )
        .toISOString()
        .split("T")[0];

        document.getElementById(
            "date"
        ).innerText = `Date: ${localDate}`;

        const todayData = questions[localDate];

        if (!todayData) {
            document.getElementById("question").innerText =
                "No question scheduled for today.";

            return;
        }

        document.getElementById("question").innerText =
            todayData.question;

        const answersDiv = document.getElementById("answers");

        todayData.answers.forEach(answer => {
            const div = document.createElement("div");
            div.className = "answer";
            div.innerText = answer;
            answersDiv.appendChild(div);
        });

    } catch (error) {
        document.getElementById("question").innerText =
            "Unable to load today's question.";
        console.error(error);
    }
}

loadDailyQuestion();
