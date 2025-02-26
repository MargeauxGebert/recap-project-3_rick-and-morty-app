import CharacterCard from "./components/CharacterCard/CharacterCard.js";
import { setPaginationMax } from "./components/NavPagination/NavPagination.js";
import { nextGoToPage } from "./components/NavButton/NavButton.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

let currentPage = 1;

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";

// Fetch Characters

async function fetchCharacters(url = "") {
  try {
    const defaultUrl = "https://rickandmortyapi.com/api/character";
    // console.log(searchUrl);
    const response = await fetch(defaultUrl + url);

    if (!response.ok) {
      throw new Error(response.status);
    }
    const responseData = await response.json();
    cardContainer.innerHTML = "";
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
// Search
searchBar.addEventListener("submit", async (event) => {
  event.preventDefault();
  const searchQuery = event.target.elements.query.value;
  const searchName = `/?name=${searchQuery}`;
  const searchResult = await fetchCharacters(searchName);
  setPaginationMax(searchResult, pagination);
});

// Navigation
setPaginationMax(firstPageCharacterData, pagination);

nextButton.addEventListener("click", async () => {
  const currentPagination = pagination.innerText;
  console.log(currentPagination);
  const currentPage = currentPagination.split("/").push() - 1;
  console.log(currentPage);
  const newPage = currentPage + 1;
  const nextUrl = `/?page=${newPage}`;
  // const addUrl = nextGoToPage(currentPageCharacterData);
  const nextPageData = await fetchCharacters(nextUrl);
  console.log(nextPageData);

  setPaginationMax(nextPageData, pagination);
});

prevButton.addEventListener("click", () => {});
