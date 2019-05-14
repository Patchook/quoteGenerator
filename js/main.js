const generateur = new Generateur;

document.getElementById("valider").addEventListener("click", function(e){
	generateur.numberUser = document.getElementById("quote-number").value;
	document.getElementById("display_number").style.display="none";
	document.getElementById("checkbox_generator").style.display="block";

});

document.getElementById("type1").addEventListener("change", function (e) {
    if (e.target.checked === true) {
    	for (var i = 0; i < generateur.numberUser; i++) {
    		let quoteElt = document.createElement("li");
    		quoteElt.textContent = generateur.type1();
    		document.getElementById("quote").appendChild(quoteElt);
    		
    	} 	
	} 
	    generateur.display_end();
});

document.getElementById("type2").addEventListener("change", function (e) {
    if (e.target.checked === true) {
    	for (var i = 0; i < generateur.numberUser; i++) {
    		let quoteElt = document.createElement("li");
    		quoteElt.textContent = generateur.type2();
    		document.getElementById("quote").appendChild(quoteElt);
    	} 	
	} 
	    generateur.display_end();
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






