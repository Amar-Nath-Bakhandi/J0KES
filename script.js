const btnElement = document.getElementById(`btn`);
const jokeElement = document.getElementById(`joke`);

const apiKey = "z9amlxkoB0Cl4er0iKVoYQ==uQqLXpgnAS7pWl4f";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

btnElement.addEventListener(`click`, async () => {
  // console.log("anything but happiness")

  jokeElement.innerText = "Loading..."; // It shows this text after the button is clicked, Note: Gives an interactive screen

  const response = await fetch(apiUrl, options);
  const data = await response.json();

  console.log(data[0].joke); // Prints the joke in the console
  jokeElement.innerText = data[0].joke; // Prints the joke in the DOM
});

// Toggling effect: It lets the user to get the message for only once 

var toggleBtn = document.getElementById(`btn`);
toggleBtn.addEventListener(`click`, async (event) => {
  toggleBtn.textContent = "Just a moment";
  event.target.disabled = true;
});


function change() {
  if (toggleBtn === false) {
    toggleBtn.textContent = "hahaha";
  }
}
