const body = document.body;
const startButton = document.getElementById('start');
const levelButtons = document.querySelectorAll('.levels__item');
const cardTable = document.createElement('div');
const mainScreen = document.getElementById('wrapper');

function returnToMainScreen() {
  body.appendChild(mainScreen);
  cardTable.innerHTML = '';
  cardTable.remove();
};

function chooseLevel(level) {
  levelButtons.forEach((item) => item.classList.remove('levels__item_active'));
  level.target.classList.add('levels__item_active');
};

levelButtons.forEach((item) => item.addEventListener('click', chooseLevel));

function startGame() {
  let selectedLevel = document.querySelector('.levels__item_active').getAttribute('id');
  let currentNumberOfCards = item  =>  item;
  let numberOfCards = currentNumberOfCards(selectedLevel);

  cardTable.classList.add('card-table');
  mainScreen.remove();
  body.appendChild(cardTable);

  let card = () => {
    function createCards() {
      let cardWrap = document.createElement('div');
      cardWrap.classList.add('card-wrapper');
      let cardBack = document.createElement('img');
      let cardLooser = document.createElement('img');
      cardBack.classList.add('card-backside');
      cardLooser.classList.add('looser-card');
      cardBack.src = 'Pictures/card_back.png';
      cardLooser.src = 'Pictures/loser_card.png';
      cardTable.append(cardWrap);
      cardWrap.append(cardLooser);
      cardWrap.append(cardBack);
    };
    createCards();
  };
  
  function createTable(level) {
    switch (level) {
      case 'simple':
        for (let i = 0; i < 3 ; i++) {
          card(selectedLevel);
        };
        numberOfCards = 3;
        break;
      case 'middle':
        for (let i = 0; i < 6 ; i++) {
          card(selectedLevel);
        };
        numberOfCards = 6;
        break;
      case 'difficult':
        for (let i = 0; i < 10 ; i++) {
          card(selectedLevel);
        };
        numberOfCards = 10;
        break;
        };

  const cards = document.querySelectorAll('.card-wrapper');

  let winnerCard = Math.floor(Math.random() * numberOfCards);

  for (let i = 0; i < numberOfCards; i++ ) {
    if (i === winnerCard) { 
      cards[i].firstElementChild.src = 'Pictures/winner_card.png';
    };
  };

  function flipCard() {
    this.classList.toggle('flipped');
    let allCards = document.querySelectorAll('.card-wrapper');
    allCards.forEach((item) => item.addEventListener('click', returnToMainScreen));
  };

  cards.forEach((card) => card.addEventListener('click', flipCard));
  };

  createTable(selectedLevel);
};

startButton.addEventListener('click', startGame);