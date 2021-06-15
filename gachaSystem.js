//esto es solo el sistema de tiradas, el sistema especifico con sus cartas y rarezas deberia ser un archivo aparte, probablemente una clase "gacha" y las subclases de tipos especificos.
//class GachaSystem{
	//constructor(){}

	function oneThrow(){
		//tirada de una carta 
		return throwGacha();
	}

	function elevenThrow(){
		//tirada de once cartas, una debe tener una rareza mas alta
		const cards = [];
		for(i=0; i<10; i++){
			cards.push(throwGacha());
		};
		cards.push(rarityThrow());
		return cards;
	}
	
	function getCardFromRarity(rarity){
		//rarity es un set de cartas dentro del "allCards"
		return rarity[getRandomInt(0, (rarity.length -1))]
	}

	//throwGacha();
	//rarityThrow();
//}