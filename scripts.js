// Define questions for each level
const questions = {
    easy: [
        {
            question: "What year was Taylor Swift born?",
            options: ["1989", "1990", "1991", "1992"],
            answer: "1989"
        }
    ],
    medium: [
        {
            question: "What song contains the lyrics 'you drew stars around my scars but now I'm bleeding'?",
            options: ["All Too Well", "Clean", "Out of the Woods", "Dear John"],
            answer: "All Too Well"
        }
    ],
    level13: [
        // Add questions for level 13 as needed
    ]
};

// Function to start the quiz
function startQuiz(level) {
    const questionContainer = document.querySelector('.question-content');
    const backButton = document.querySelector('.back-btn');
    
    questionContainer.innerHTML = ''; // Clear previous content
    backButton.style.display = 'block'; // Show back button

    const currentQuestion = questions[level][0]; // Get the first question for the level

    // Create question and options elements
    const questionElement = document.createElement('h2');
    questionElement.classList.add('question');
    questionElement.innerText = currentQuestion.question;

    const optionsList = document.createElement('ul');
    optionsList.classList.add('options');

    currentQuestion.options.forEach(option => {
        const listItem = document.createElement('li');
        const button = document.createElement('button');
        button.classList.add('option-btn');
        button.innerText = option;
        button.onclick = () => checkAnswer(option, currentQuestion.answer);
        listItem.appendChild(button);
        optionsList.appendChild(listItem);
    });

    // Append question and options to the container
    questionContainer.appendChild(questionElement);
    questionContainer.appendChild(optionsList);

    // Show the quiz section and hide the hero and popup
    document.getElementById('quiz-section').style.display = 'block';
    document.getElementById('level-popup').style.display = 'none'; // Hide level popup
    document.getElementById('hero').style.display = 'none'; // Hide the hero section
}

// Function to check answer
function checkAnswer(selected, correct) {
    if (selected === correct) {
        alert('Correct answer!');
    } else {
        alert('Wrong answer! The correct answer is ' + correct);
    }
}

// Function to show the level selection popup
document.querySelector('.start-btn').addEventListener('click', function() {
    document.getElementById('level-popup').style.display = 'flex';
});

// Function to close the level selection popup
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('level-popup').style.display = 'none';
});

// Function to go back to the main page
function goBack() {
    document.getElementById('quiz-section').style.display = 'none'; // Hide quiz section
    document.getElementById('level-popup').style.display = 'none'; // Ensure the popup is hidden
    document.getElementById('hero').style.display = 'block'; // Show the hero section again
    const backButton = document.querySelector('.back-btn');
    backButton.style.display = 'none'; // Hide back button when going back to home
}
