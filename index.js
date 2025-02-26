import CharacterCard from "./components/CharacterCard/CharacterCard.js";
import setPaginationMax from "./components/NavPagination/NavPagination.js";

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
    const response = await fetch("https://rickandmortyapi.com/api/character");
    if (!response.ok) {
      throw new Error(response.status);
    }
    const responseData = await response.json();
    cardContainer.innerHTML = "";
    // console.log(responseData);

    responseData.results.forEach((element) => {
      const newCard = CharacterCard(element);
      cardContainer.append(newCard);
    });

    return responseData;
  } catch (error) {
    console.error(error.message);
    return error;
  }
}

const firstPageCharacterData = await fetchCharacters();

// Set max Page on first creation
setPaginationMax(firstPageCharacterData, pagination);
