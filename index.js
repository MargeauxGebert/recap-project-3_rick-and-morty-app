import CharacterCard from "./components/CharacterCard/CharacterCard.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";

// Fetch Characters

export async function fetchCharacters() {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character`);
    if (!response.ok) {
      throw new Error(response.status);
    }
    const responseData = await response.json();
    cardContainer.innerHTML = "";
    console.log(responseData.results);
    //return responseData.results;

    responseData.results.forEach((element) => {
      const newCard = CharacterCard(element);
      cardContainer.append(newCard);
    });
  } catch (error) {
    console.error(error.message);
    return error;
  }
}

fetchCharacters();

async function fetchRick(url) {
  const response = await fetch(url);
  const rick = await response.json();
  console.log(rick);
}
const urlRick = "https://rickandmortyapi.com/api/character/?name=rick+sanchez";
fetchRick(urlRick);
// searchBar.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const searchQuery = event.target.elements.query.value;


// /&name=${input}
// });

// Create a 'submit' event listener on the search bar.
// Update the state variable searchQuery with the current text inside the search bar every time this event is triggered.
// Modify the fetch URL again by adding another URL encoded attribute name: append &name=<searchQuery> to the URL. If the search query is an empty string, it will be ignored by the API, so don't worry about that.
// Now trigger the function fetchCharacters whenever a submit event happens.
