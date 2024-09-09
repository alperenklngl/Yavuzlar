document.getElementById("add-question-btn").addEventListener("click", function() {
    const newQuestion = document.getElementById("new-question").value;
    const newAnswer1 = document.getElementById("new-answer1").value;
    const newAnswer2 = document.getElementById("new-answer2").value;
    const newAnswer3 = document.getElementById("new-answer3").value;
    const newAnswer4 = document.getElementById("new-answer4").value;
    const correctAnswerIndex = parseInt(document.getElementById("new-correct-answer").value);
    const difficulty = document.getElementById("new-difficulty").value;

    if(newQuestion && newAnswer1 && newAnswer2 && newAnswer3 && newAnswer4) {
        questions.push({
            question: newQuestion,
            answers: [
                { text: newAnswer1, correct: correctAnswerIndex === 0 },
                { text: newAnswer2, correct: correctAnswerIndex === 1 },
                { text: newAnswer3, correct: correctAnswerIndex === 2 },
                { text: newAnswer4, correct: correctAnswerIndex === 3 }
            ],
            difficulty: difficulty
        });
        alert("Soru basariyla eklendi!");
    } else {
        alert("Boş alan birakilamaz.");
    }
});
