console.clear();

 const searchBar = document.querySelector('[data-js="search-bar"]');

 searchBar.addEventListener("submit", (event) => {
    event.preventDefault();
   const inputSearch = event.target.elements;
   inputSearch.name.value;
   console.log(inputSearch.name.value);
})