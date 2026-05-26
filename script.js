function submitQuiz() {
    const form = document.getElementById("quiz-form");
    const formData = new FormData(form);

    let scores = {
        "Technologist": 0,
        "Humanist": 0,
        "Pragmatist": 0,
        "Consciousness Explorer": 0
    };

    formData.forEach((value) => {
        scores[value]++;
    });

    let highestScore = 0;
    let personalityType = "";

    for (let type in scores) {
        if (scores[type] > highestScore) {
            highestScore = scores[type];
            personalityType = type;
        }
    }

    const descriptions = {
        "Technologist": "You embrace technology and see its potential to enhance efficiency and innovation. You are often excited by the possibilities of AI and its role in our daily lives. You trust data-driven solutions and believe in leveraging technology to solve complex problems.",
        "Humanist": "You value human connections and personal experiences. You prioritize ethics, empathy, and intuition over pure efficiency. You believe that human judgment, creativity, and emotions are irreplaceable, and you advocate for responsible AI use that centers on human well-being.",
        "Pragmatist": "You evaluate AI on a case-by-case basis, supporting its use when it improves efficiency but recognizing its limits in areas requiring human judgment. You seek practical solutions rather than ideological stances on technology, carefully weighing its benefits and risks before embracing new advancements.",
        "Consciousness Explorer": "You are curious about AI’s deeper implications—whether ethical, philosophical, or consciousness-related. You question what it means to be intelligent and sentient, exploring the boundaries between human and artificial intelligence. You are open to new perspectives on technology’s role in shaping our understanding of the mind and reality."
    };

    document.getElementById("result").style.display = "block";
    document.getElementById("result-type").textContent = personalityType;
    document.getElementById("result-description").textContent = descriptions[personalityType];
}
function retakeQuiz() {
    location.reload();
}
