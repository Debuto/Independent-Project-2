window.addEventListener("load", function(){
  console.log("ACK! Why are you here!");
})
// JavaScript code in scripts.js

document.addEventListener("DOMContentLoaded", function() {
  const coder = document.getElementById("coder");
  const normie = document.getElementById("normie");
  const yesButton = document.getElementById("yes1")
  const noButton = document.getElementById("no1")
  const opener = document.getElementById("opener")

  yesButton.addEventListener("click", function() {
    normie.classList.add("hidden");
    coder.classList.remove("hidden");
    opener.classList.add("hidden");
  });

  noButton.addEventListener("click", function() { 
    normie.classList.remove("hidden");
    coder.classList.add("hidden");
    opener.classList.add("hidden");
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Get the form element
  const form = document.getElementById('recommendationForm');
  const rec = document.getElementById("recommendationResult");
  const tryAgain2 = document.getElementById("tryAgainButton2")

  // Add event listener to the form's submit event
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page

    rec.classList.remove("hidden");
    coder.classList.add("hidden");
    tryAgain2.classList.remove("hidden");

    // Get the user's answers
    const question1Answer = document.getElementById('question1').value;
    const question2Answer = document.getElementById('question2').value;
    const question3Answer = document.getElementById('question3').value;
    const question4Answer = document.getElementById('question4').value;
    const question5Answer = document.getElementById('question5').value;

    // Call the function to generate the recommendation based on the answers
    const recommendation = generateRecommendation(question1Answer, question2Answer, question3Answer, question4Answer, question5Answer);

    // Display the recommendation on the page
    const recommendationResult = document.getElementById('recommendationResult');
    recommendationResult.innerHTML = `<h2>Recommendation:</h2><p>${recommendation}</p>`;
  });

  // Function to generate the recommendation based on the answers
  function generateRecommendation(answer1, answer2, answer3, answer4, answer5) {
    // Perform some logic to generate the recommendation based on the answers
    // This is just a simple example, you can customize it as per your needs

    let recommendation = '';

    if (answer1 === 'web' && answer2 === 'imperative' && answer3 === 'beginner') {
      recommendation = 'You should consider learning JavaScript!';
    } else if (answer1 === 'mobile' && answer2 === 'object-oriented' && answer3 === 'intermediate') {
      recommendation = 'You might enjoy learning Swift for iOS app development!';
    } else if (answer1 === 'data' && answer2 === 'functional' && answer3 === 'advanced') {
      recommendation = 'Python is a great choice for data analysis and scientific computing!';
    } else if (answer1 === 'game' && answer2 === 'declarative' && answer3 === 'intermediate') {
      recommendation = 'Try learning Unity and C# for game development!';
    } else {
      recommendation = 'Based on your answers, please consult further resources for a suitable programming language recommendation.';
    }

    return recommendation;
  }
});

