const jokes = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them!",
  "Why don't skeletons fight each other? They don't have the guts!",
  "I used to play piano by ear, but now I use my hands and fingers.",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "I'm reading a book about anti-gravity. It's impossible to put down!",
  "Why did the bicycle fall over? Because it was two-tired!",
  "Why don't eggs tell jokes? They might crack up!",
  "Why did the tomato turn red? Because it saw the salad dressing!",
  "What do you call fake spaghetti? An impasta!",
  "Why don't skeletons fight each other? They don't have the guts!",
  "Why don't scientists trust atoms? Because they make up everything!",
  "What did one wall say to the other wall? I'll meet you at the corner!",
  "Why don't some couples go to the gym? Because some relationships don't work out!",
  "Why don't you ever see elephants hiding in trees? Because they're really good at it!",
  "What do you call a pile of cats? A meowtain!",
  "Why don't scientists trust atoms? Because they make up everything!",
  "I'm on a whiskey diet. I've lost three days already!",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "What do you call a snowman with a six-pack? An abdominal snowman!",
  "Why did the bicycle fall over? Because it was two-tired!",
  "Why don't eggs tell jokes? They might crack up!",
  "What did one hat say to the other hat? You stay here, I'll go on ahead!",
  "What do you get if you cross a snowman and a vampire? Frostbite!",
  "Why don't scientists trust atoms? Because they make up everything!",
  "I used to play piano by ear, but now I use my hands and fingers.",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "What did one wall say to the other wall? I'll meet you at the corner!",
  "Why don't some couples go to the gym? Because some relationships don't work out!",
  "What do you call a pile of cats? A meowtain!",
  "Why don't you ever see elephants hiding in trees? Because they're really good at it!",
  "Why don't eggs tell jokes? They might crack up!",
  "Why did the tomato turn red? Because it saw the salad dressing!",
  "What do you call fake spaghetti? An impasta!",
  "Why don't skeletons fight each other? They don't have the guts!",
  "Why did the bicycle fall over? Because it was two-tired!",
  "What did one hat say to the other hat? You stay here, I'll go on ahead!",
  "What do you get if you cross a snowman and a vampire? Frostbite!",
  "I'm on a whiskey diet. I've lost three days already!",
  "Why don't scientists trust atoms? Because they make up everything!",
  "I used to play piano by ear, but now I use my hands and fingers.",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "Why don't some couples go to the gym? Because some relationships don't work out!",
  "What do you call a pile of cats? A meowtain!",
  "Why don't you ever see elephants hiding in trees? Because they're really good at it!",
  "Why don't eggs tell jokes? They might crack up!",
  "Why did the tomato turn red? Because it saw the salad dressing!",
  "What do you call fake spaghetti? An impasta!",
  "Why don't skeletons fight each other? They don't have the guts!",
  "Why did the bicycle fall over? Because it was two-tired!",
  "What did one hat say to the other hat? You stay here, I'll go on ahead!",
  "What do you get if you cross a snowman and a vampire? Frostbite!",
  "I'm on a whiskey diet. I've lost three days already!"
];

function getJoke() {
  jokeElement = document.getElementById("joke");
  const randomValue = Math.floor(Math.random() * jokes.length);
  jokeElement.innerText = jokes[randomValue];
}

getJoke();

// console.log[2];
// alert("Hi");
