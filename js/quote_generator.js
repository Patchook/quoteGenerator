function randomItem(items)           // Item aléatoire
{
  
	return items[Math.floor(Math.random()*items.length)];
     
}

	const tab1 = ["En considerant qu'il fût ainsi, ","Malgrès un soleil au declin, ","Au vu de la polution sonore des nuits d'été, "];
	const tab2 = ["il convient d'examiner la plupart des","il serait necessaire d'apprivoisier des","je recommande chaudement de centraliser l'ensemble des"];
	const tab3 = [" revolutions technologique dans l'histoire !"," mesures dans la reglementation des champs de culture."," moutons roses à leur juste titre !"];
	const tab4 = ["Compte tenu des circonstances actuelles, ","Dans le but d'en finir avec les rumeurs présente, ","Afin de regler la fragilité contextuelle, "];
	const tab5 = ["il est important de garder à l'esprit chacun des ","nous allons être contraint d'interdire l'ensemble des ","il faut gérer la somme des "];
	const tab6 = ["noix de cocos s'offrant à nous.", "jeunes de 12-14 ans ayant un Zippo.","oncles trop bourrés en repas de famille."]

	pieceQuote1 = randomItem(tab1);
	pieceQuote2 = randomItem(tab2);
	pieceQuote3 = randomItem(tab3);
	pieceQuote4 = randomItem(tab4);
	pieceQuote5 = randomItem(tab5);
	pieceQuote6 = randomItem(tab6);

class Generateur { 		

	type1() {
	return pieceQuote1 + pieceQuote2 + pieceQuote3;
	}
	type2() {
	return pieceQuote4 + pieceQuote5 + pieceQuote6;
	}

}

const generateur = new Generateur;
console.log(generateur.type1());



document.getElementById("type1").addEventListener("change", function (e) {
    if (e.target.checked === true) {
    	
    }
});

// if (choiceUser === 1) {}
/*while (numberUser === NaN || numberUser === null || numberUser > 5 || numberUser < 1) { // Corriger !== Number (si la saisie est un String)
	console.error("Veuillez rentrez un chiffre entre 1 et 5");
	numberUser = prompt("Combien de citations souhaitez-vous générer ? (De 1 à 5)"); 
} 
if (numberUser >= 1 && numberUser <= 5) {
for (let i = 0; i < numberUser; i++) { //numberUser[i]
	console.log(generateur.type1());
	}
}*/

//if (choiceUser === 2) {}






