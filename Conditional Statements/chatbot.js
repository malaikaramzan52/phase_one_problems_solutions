// Create a simple rule-based chatbot that responds differently based on user
//  input keywords, using only if/elif/else
let userInput = prompt("Hi! I am a chatbot");
userInput = userInput.toLowerCase();
let response;
if (userInput.includes("hello") || userInput.includes("hi")) {
    response = "Hello! How can I assist you today?";
}
else if (userInput.includes("how are you")) {
    response = "I'm doing fine, thanks for asking!";
} 
else if (userInput.includes("your name")) {
    response = "I'm a simple chatbot.";
} 
else if (userInput.includes("bye")) {
    response = "Goodbye! Have a nice day!";
} 
else {
    response = "Sorry, I don't understand that.";
}
console.log(response);

