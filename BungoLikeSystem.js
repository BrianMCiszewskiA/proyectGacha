//class BungoGacha extends GachaSystem{
	const ssrCards = [];
	const srCards = [];
	const rCards = [];
	//pendiente rellenar cartas
	function throwGacha(){
		number = getRandomInt(1,100);

		if(number <= 3){
			return getCardFromRarity(ssrCards);
		} else if (number <=30){
			return getCardFromRarity(srCards);
		} else {
			return getCardFromRarity(rCards);
		}
	}
	function rarityThrow(){
		//en bungo no te aseguran una sr en alguna tirada, sino q cobran 10 y tiras 11
		return throwGacha();
	}
	function addSSRCard(card){
		ssrCards.push(card);
	}
	function addSRCard(card){
		srCards.push(card);
	}
	function addRCard(card){
		rCards.push(card);
	}
//}