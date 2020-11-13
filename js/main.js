// global classes vvv
let board = document.querySelector(".container-fluid");
let miniBoard = document.querySelector(".history-container")
let formControl = document.querySelector(".form-control");
let cardGroup = [];

// dealer vvv
let buttonEx = document.querySelector("#randomBtn");
buttonEx.addEventListener("click", () => {
    if (formControl.value !== '') {
        cardMaker(formControl.value);
    }
});

// sorter vvv
let buttonSort = document.querySelector("#sorterBtn");
buttonSort.addEventListener("click", () => {
    sortCard(cardGroup);
    cardGroup = [];
});

const sortCard = (cardGroup) => {
    let wall = cardGroup.length - 1;
    while (wall > 0) {
        let i = 0;
        while (i < wall) {
            if (cardGroup[i].number > cardGroup[i + 1].number) {
                let aux = cardGroup[i];
                cardGroup[i] = cardGroup[i + 1];
                cardGroup[i + 1] = aux;
            }
            i++;
            let cardDeck = document.createElement("div");
            cardGroup.forEach((item) => {
                let card2 = document.createElement("div");
                let numbers = document.createElement("h1");
                numbers.innerHTML = item.number;
                numbers.classList.add(item.suit);
                card2.appendChild(numbers);
                card2.classList.add("card");
                card2.classList.add("minimizer");
                cardDeck.appendChild(card2);
                cardDeck.classList.add("row");
                miniBoard.appendChild(cardDeck);
            });
        }
        wall--;
    }
}

// maker vvv
const cardMaker = (e) => {
    console.log("card Maker");
    board.innerHTML = '';
    for (let i = 0; i < e; i++) {
        let card = document.createElement("div");
        let numbers = document.createElement("h1");
        let numberOfNumbers = Numbers();
        let suits = Shuffler();
        numbers.innerHTML = numberOfNumbers;
        numbers.classList.add(suits);
        card.appendChild(numbers);
        card.classList.add("card");
        board.appendChild(card);
        let savedCards = {
            number: numberOfNumbers,
            suit: suits
        }
        cardGroup.push(savedCards);
    }
};

// shuffler vvv
const Shuffler = () => {

    let symbols = ['the-number-heart', 'the-number-spades', 'the-number-diamonds', 'the-number-clubs'];

    let symbolsIndex = Math.floor(Math.random() * symbols.length);

    return symbols[symbolsIndex];
}

const Numbers = () => {

    let numbers = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

    let numbersIndex = Math.floor(Math.random() * numbers.length);

    return numbers[numbersIndex];
}
