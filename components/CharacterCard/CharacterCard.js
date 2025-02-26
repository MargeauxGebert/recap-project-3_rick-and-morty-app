export function createCharacterCard() {}

export default function CharacterCard(newCharakterData) {
  //console.log(newCharakterData);
  const imgSource = newCharakterData.image;
  const newName = newCharakterData.name;
  const newStatus = newCharakterData.status;
  const newSpecies = newCharakterData.species;
  const newEpisode = newCharakterData.episode.length;
  //console.log(newEpisode);
  const listItem = document.createElement("li");
  listItem.classList.add("card");
  listItem.innerHTML = `

<div class="card__image-container">
  <img
    class="card__image"
    src="${imgSource}"
    alt="${newName}"
  />
  <div class="card__image-gradient"></div>
</div>
<div class="card__content">
  <h2 class="card__title">${newName}</h2>
  <dl class="card__info">
    <dt class="card__info-title">Status</dt>
    <dd class="card__info-description">${newStatus}</dd>
    <dt class="card__info-title">Species</dt>
    <dd class="card__info-description">${newSpecies}</dd>
    <dt class="card__info-title">Occurrences</dt>
    <dd class="card__info-description">${newEpisode}</dd>
  </dl>
</div>
`;
  return listItem;
}
