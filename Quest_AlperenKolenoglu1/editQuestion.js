document.addEventListener("DOMContentLoaded", function() {
    const questionList = document.getElementById("question-list");
    const editQuestionInput = document.getElementById("edit-question");
    const editAnswer1Input = document.getElementById("edit-answer1");
    const editAnswer2Input = document.getElementById("edit-answer2");
    const editAnswer3Input = document.getElementById("edit-answer3");
    const editAnswer4Input = document.getElementById("edit-answer4");
    const editCorrectAnswerSelect = document.getElementById("edit-correct-answer");
    const editDifficultySelect = document.getElementById("edit-difficulty");
    const updateQuestionBtn = document.getElementById("update-question-btn");

    questions.forEach((q, index) => {
        const option = document.createElement("option");
        option.value = index;
        option.textContent = q.question;
        questionList.appendChild(option);
    });

    questionList.addEventListener("change", function() {
        const selectedQuestion = questions[questionList.value];
        editQuestionInput.value = selectedQuestion.question;
        editAnswer1Input.value = selectedQuestion.answers[0].text;
        editAnswer2Input.value = selectedQuestion.answers[1].text;
        editAnswer3Input.value = selectedQuestion.answers[2].text;
        editAnswer4Input.value = selectedQuestion.answers[3].text;
        editCorrectAnswerSelect.value = selectedQuestion.answers.findIndex(a => a.correct);
        editDifficultySelect.value = selectedQuestion.difficulty;
    });

    updateQuestionBtn.addEventListener("click", function() {
        const selectedQuestionIndex = questionList.value;
        if (selectedQuestionIndex !== "") {
            questions[selectedQuestionIndex] = {
                question: editQuestionInput.value,
                answers: [
                    { text: editAnswer1Input.value, correct: editCorrectAnswerSelect.value === "0" },
                    { text: editAnswer2Input.value, correct: editCorrectAnswerSelect.value === "1" },
                    { text: editAnswer3Input.value, correct: editCorrectAnswerSelect.value === "2" },
                    { text: editAnswer4Input.value, correct: editCorrectAnswerSelect.value === "3" }
                ],
                difficulty: editDifficultySelect.value
            };
            alert("Soru güncellendi!");
        } else {
            alert("Lütfen bir soru seçin.");
        }
    });
});
