//seteo del system
const cardCollection = [];
addSSRCard(new Card("dazai", "dazai.png", "dazai"));
addSRCard(new Card("atsushi", "atsushi.png", "atsushi"));
addRCard(new Card("odasaku", "odasaku.png", "odasaku"));
//--------------------------------
function showThrow(){
	card = oneThrow();
	addCardToCollection(card);
	addGachaImageToResults(card);
	acceptResultButton();
	hideThrowButtons();
}
function showElevenThrow(){
	cards = elevenThrow();
	for(i=0; i<11; i++){
		addCardToCollection(cards[i]);
		addGachaImageToResults(cards[i]);
	}
	acceptResultButton();
	hideThrowButtons();
}
function showCollection(){//tal vez eventualmente hacerla colapsable, o ponerlo en otra pestaña tipo "mi perfil"
	emptyScreen("myCollection");
	where = document.getElementById("myCollection");
	for(i=0; i<cardCollection.length; i++){
		card = cardCollection[i];
		image = createImage(card.image, card.nameId, card.name);
		where.appendChild(image);
	}
	closeCollectionButton();
}
//---------------------------------------

function addCardToCollection(card){
	//momentaneamente va a ser la coleccion temporal, en un futuro podria ser con un sistema de usuarios
	cardCollection.push(card);
}

function addGachaImageToResults(card){
	where = document.getElementById("gachaResult");
	image = createImage(card.image, card.nameId, card.name);
	where.appendChild(image)
}

function acceptResultButton(){
	where = document.getElementById("gachaResult");
	button = createButton("Aceptar", "emptyResultScreen()");
	where.appendChild(button);
}


function closeCollectionButton(){
	where = document.getElementById("myCollection");
	button = createButton("Close", "emptyScreen('myCollection')");
	where.appendChild(button);
}

function emptyResultScreen(){
	emptyScreen("gachaResult");
	showThrowButtons();
}

function hideThrowButtons(){
	document.getElementById("gachaButtons").setAttribute("class", "hidden");
}

function showThrowButtons(){
	document.getElementById("gachaButtons").setAttribute("class", "visible");
}
//---------------------------------------
function createImage(img, id, alt){
	let image = document.createElement("img");
	image.setAttribute("src", img);
	image.setAttribute("alt", alt);
	image.setAttribute("id", id)
	image.setAttribute("width", "10%")
	image.setAttribute("height", "10%")
	return image
}

function createButton(text, action) {
  let button = document.createElement("button");
  let t = document.createTextNode(text);
  button.appendChild(t);
  button.setAttribute("onclick", action);
  return button;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function emptyScreen(id){
	document.getElementById(id).innerHTML = "";
}