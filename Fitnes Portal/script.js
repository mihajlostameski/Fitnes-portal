function popust() {
	let kod = document.getElementById("specijalnikod");
	kod.firstChild.nodeValue = "Kod: MSPOČNI2323";
	kod.style.color = "#ff0000";
	kod.style.fontSize = "2em";
}

document.getElementById("forma").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    let porukaElement = document.getElementById("poruka");
    porukaElement.textContent = "Hvala Vam! Kontaktiraćemo Vas uskoro";
    porukaElement.style.color = "green";
});

