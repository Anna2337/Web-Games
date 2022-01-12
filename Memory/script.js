// массив объекта 
const cardsArr  = [
	{imageName:"1", imagePath: "img/1.png"},
	{imageName:"2", imagePath: "img/2.png"},
	{imageName:"3", imagePath: "img/3.png"},
	{imageName:"4", imagePath: "img/4.png"},
	{imageName:"5", imagePath: "img/5.png"},
	{imageName:"6", imagePath: "img/6.png"},
	{imageName:"7", imagePath: "img/7.png"},
	{imageName:"8", imagePath: "img/8.png"},
	{imageName:"9", imagePath: "img/9.png"},
	{imageName:"10", imagePath: "img/10.png"},
	{imageName:"1", imagePath: "img/1.png"},
	{imageName:"2", imagePath: "img/2.png"},
	{imageName:"3", imagePath: "img/3.png"},
	{imageName:"4", imagePath: "img/4.png"},
	{imageName:"5", imagePath: "img/5.png"},
	{imageName:"6", imagePath: "img/6.png"},
	{imageName:"7", imagePath: "img/7.png"},
	{imageName:"8", imagePath: "img/8.png"},
	{imageName:"9", imagePath: "img/9.png"},
	{imageName:"10", imagePath: "img/10.png"}
]

// выполнение сортировки массива
// передать функцию сравнения
cardsArr.sort(function() {return 0.5 - Math.random()});
console.log(cardsArr);

// обращение к элементам html страницы
const span = document.querySelector("#span");
const cardsDiv = document.querySelector(".cardsDiv");
const messageDiv = document.querySelector(".messageDiv");

// создаем игровое поле из карточек
function createBoard() {
	for (let i = 0; i < cardsArr.length; i++) {
		const imgCard = document.createElement("IMG");
		imgCard.setAttribute("id", String(i));
		imgCard.setAttribute("src", "img/blank.png");
		imgCard.addEventListener("click", flipCard);
		cardsDiv.appendChild(imgCard);
	}
}

createBoard();

let cardsChosenArr = [];
let cardsChosenArrId = [];
let nofopenedCardsArr = [];

// проверка соответвий 
function checkForMatch() {
	const cards = document.querySelectorAll("img");
	const id1 = cardsChosenArrId[0];
	const id2 = cardsChosenArrId[1];

 if (cardsChosenArrId[0] === cardsChosenArrId[1] && id1 !== id2) {
	messageDiv.innerHTML = "Совпало!";
	cards[id1].setAttribute("src", "img/3.png");
	cards[id2].setAttribute("src", "img/3.png");
	// удаляем событие onclick
	cards[id1].removeEventListener("click", flipCard);
	cards[id2].removeEventListener("click", flipCard);
	nofopenedCardsArr.push(cardsChosenArr);
 } else {
	cards[id1].setAttribute("src", "img/blank.png");
	cards[id2].setAttribute("src", "img/blank.png");
	messageDiv.innerHTML = "Цветочки не совпадают";
 }

 cardsChosenArr = [];
 cardsChosenArrId = [];
// выводим в тег спан количество открытых карточек 
span.textContent = String(nofopenedCardsArr.length);

if (nofopenedCardsArr.length === cardsArr.length / 2) {
	messageDiv.innerHTML = "Ты выйграл!"};
}

function flipCard() {
	let cardId = this.getAttribute("id");
	cardsChosenArr.push(cardsArr[cardId].imageName);
	cardsChosenArrId.push(cardId);
	this.setAttribute("src", cardsArr[cardId].imagePath);

	// Задержка выбора карточки 
	if (cardsChosenArr.length === 2) {
		setTimeout(checkForMatch, 800);
	}
}

const end  = "Вы проиграли!"

var inc=0;
function myFunction() {
	if (inc >= 30){
		inc=0;
		alert(end);
	}
	else {
		inc+=1;
	}
	span.innerHTML = (inc);
}
