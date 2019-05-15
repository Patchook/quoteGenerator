const generateur = new Generateur;

document.getElementById("valider").addEventListener("click", function(e){ // Évènement Click
	generateur.numberUser = document.getElementById("quote-number").value;


if (generateur.numberUser >= 1 && generateur.numberUser <= 5) {


	document.getElementById("display_number").style.display="none";
	document.getElementById("checkbox_generator").style.display="block";



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
} else { 
console.error("Valeur invalide");
	let wrongValue = document.getElementById("quote-number");
	wrongValue.style.border = "2px solid red";
}
	
}); // Fermeture ligne 3








