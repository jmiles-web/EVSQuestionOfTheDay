fetch("data/questions.json")
.then(response => response.json())
.then(data => {

    let today = new Date();

    today.setHours(0,0,0,0);

    let selected = data[0];

    data.forEach(item => {

        let itemDate = new Date(item.date);

        if(itemDate <= today){
            selected = item;
        }

    });

    document.getElementById("question").innerText =
        selected.question;

    let answersDiv =
        document.getElementById("answers");

    selected.answers.forEach(answer => {

        let div =
            document.createElement("div");

        div.className = "answer";

        div.innerText = answer;

        answersDiv.appendChild(div);

    });

});
