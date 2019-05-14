class Generateur { 	
	constructor(numberUser) {
		this.numberUser = 0;
	}

	randomItem(items)           // Item aléatoire
	{
	return items[Math.floor(Math.random()*items.length)]; 
	}

	type1() {
	const tab1 = ["En considerant qu'il fût ainsi, ","Malgrès un soleil au declin, ","Au vu de la polution sonore des nuits d'été, "];
	const tab2 = ["il convient d'examiner la plupart des","il serait necessaire d'apprivoisier des","je recommande chaudement de centraliser l'ensemble des"];
	const tab3 = [" revolutions technologique dans l'histoire !"," mesures dans la reglementation des champs de culture."," moutons roses à leur juste titre !"];

	let pieceQuote1 = this.randomItem(tab1);
	let pieceQuote2 = this.randomItem(tab2);
	let pieceQuote3 = this.randomItem(tab3);

	return pieceQuote1 + pieceQuote2 + pieceQuote3;
	}
	type2() {
	const tab4 = ["Compte tenu des circonstances actuelles, ","Dans le but d'en finir avec les rumeurs présente, ","Afin de regler la fragilité contextuelle, "];
	const tab5 = ["il est important de garder à l'esprit chacun des ","nous allons être contraint d'interdire l'ensemble des ","il faut gérer la somme des "];
	const tab6 = ["noix de cocos s'offrant à nous.", "jeunes de 12-14 ans ayant un Zippo.","oncles trop bourrés en repas de famille."]

	let pieceQuote4 = this.randomItem(tab4);
	let pieceQuote5 = this.randomItem(tab5);
	let pieceQuote6 = this.randomItem(tab6);	

	return pieceQuote4 + pieceQuote5 + pieceQuote6;
	}

	display_end() {
	document.getElementById("checkbox_generator").style.display="none";
    document.getElementById("quote").insertAdjacentHTML("beforeEnd", 
		'<br/><input type="button" onclick="document.location.reload(false)" value="Recommencer"/>');
	}


}