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

export async function fetchCharacters(url = "") {
  try {
    const defaultUrl = "https://rickandmortyapi.com/api/character";
    const searchUrl = defaultUrl + url;
    // console.log(searchUrl);
    const response = await fetch(defaultUrl + url);
    if (!response.ok) {
      throw new Error(response.status);
    }
    const responseData = await response.json();
    cardContainer.innerHTML = "";
    // console.log(responseData.results);
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

searchBar.addEventListener("submit", (event) => {
  event.preventDefault();
  const searchQuery = event.target.elements.query.value;
  const searchName = `/?name=${searchQuery}`;
  fetchCharacters(searchName);
});
