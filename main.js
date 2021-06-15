//seteo del system
const cardCollection = [];
addSSRCard(new Card("dazai", "dazai", "dazai"));
addSRCard(new Card("atsushi", "atsushi", "atsushi"));
addRCard(new Card("odasaku", "odasaku", "odasaku"));
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

function emptyResultScreen(){
	document.getElementById("gachaResult").innerHTML = "";
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