function calcul_moyenne(){
    var n1= prompt("Donnerr la premiere note: ");
    var n2= prompt("Donner la deuxieme note: ");
    var n3= prompt("Donner la troisieme note: ");

    var somme = Number(n1)+Number(n2)+Number(n3);

    document.write ("Voici la somme: "+somme+ "<Hr>");
    var moyenne= somme/3;

    document.write("Voici la moyenne: "+moyenne+"<br>");

    if (moyenne<10)
    document.write("Vous etes redoublant");
else 
document.write("Voues etes admis");
    

}

function test_age() {
    var age = prompt("Quel est votre âge ?");

    if (age >= 18) {
        alert("Vous êtes majeur.");
    } else {
        alert("Vous êtes mineur.");
    }
}
function affiche_nom_prenom() {
    var nom = prompt("Entrez votre nom :");
    var prenom = prompt("Entrez votre prénom :");

    var message = "Nom : " + nom + "\nPrénom : " + prenom;
    
    alert(message);
}
function change_couleur() {
    var colors = ["red", "green", "blue", "orange", "purple"];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    document.body.style.backgroundColor = randomColor;
}

