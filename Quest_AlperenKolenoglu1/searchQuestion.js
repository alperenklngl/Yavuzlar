function searchQuestion(searchTerm) {
    const results = questions.filter(q => q.question.toLowerCase().includes(searchTerm.toLowerCase()));
    if(results.length > 0) {
        results.forEach(q => console.log(q.question));
    } else {
        console.log("Soru bulunamadı.");
    }
}

document.getElementById("search-btn").addEventListener("click", function() {
    const searchTerm = document.getElementById("search-input").value;
    searchQuestion(searchTerm);
});
