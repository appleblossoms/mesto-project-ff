const cardTemplate = document.querySelector('#card-template');
const cardList = document.querySelector('.places__list');

function makeCard(card, deleteCard) {
    const cardElement = cardTemplate.content.cloneNode(true);
    const cardImage = cardElement.querySelector('.card__image');
    const deleteButton = cardElement.querySelector('.card__delete-button');
    const cardTitle = cardElement.querySelector('.card__title');

    cardImage.src = card.link;
    cardImage.alt = card.name;
    cardTitle.textContent = card.name;

    deleteButton.addEventListener('click', deleteCard);

    return cardElement;
}

function deleteCard(evt) {
    const deletedCard = evt.target.closest('.card');
    deletedCard.remove();
}

initialCards.forEach(function (card) {
    const displayedCard = makeCard(card, deleteCard);
    cardList.append(displayedCard);
});