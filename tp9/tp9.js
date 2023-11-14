function seconnecter() {
    var login = prompt("Donner votre nom d'utilisateur");
    var password = prompt("Entrer votre mot de passe");

    if (login === "admin" && password === "admin") {
        document.write("Bienvenue : " + login);
    } else {
        alert("Accès Refusé");
    }
}

function affichagetab() {
    document.write('<table border="2px" width="30%">');
    for (var i = 0; i <= 5; i++) {
        document.write('<tr><td></td><td></td><td>*</td></tr>');
    }
    document.write('</table>');
}

function affichagetab2() {
    var count = prompt("Combien de lignes souhaitez-vous ?");
    document.write('<table border="2px" width="30%">');
    for (let i = 0; i < count; i++) {
        document.write("<tr><td>" + i + "</td><td>*</td></tr>");
    }
    document.write('</table>');
}

function cdc() {
    var chaine = prompt("Donnez un mot");

    document.write(chaine.toUpperCase() + "<br>");
    document.write(chaine.toLowerCase() + "<br>");
    document.write("La chaine contient " + chaine.length + " caractères" + "<br>");
    document.write("La première lettre est " + chaine.charAt(0) + "<br>");
}
 function swich(){
    var color=prompt ("Entrez une couleur");
    switch (color)
 {
    case "rouge" : document.body.style.background = "red"
    break;
    case "ROUGE" : document.body.style.background = "red"
    break;
    case "bleu" : document.body.style.background = "blue"
    break;
    case "BLEU" : document.body.style.background = "blue"
    break;
    case "vert" : document.body.style.background = "green"
    break;
    case "VERT" : document.body.style.background = "green"
    break;

    default:alert("couleur non definie");
 }

 }

 function AjouterUneLigne() {

    window.location.href = "tp9i.html";
}

function seconnecter2 () {
    window.location.href = "tp9i2.html"
}

function seconnecter3() {
    var maxAttempts = 3;
    var attempts = 0;

    do {
        var id = prompt("Entrez votre nom d'utilisateur");
        var mdp = prompt("Entrez votre mot de passe");

        if (id === "admin" && mdp === "admin") {
            document.write("Bienvenue " + id);
            break;
        } else {
            alert("Accès refusé");
            attempts += 1;
        }
    } while (attempts < maxAttempts);

    if (attempts === maxAttempts) {
        alert("Délai dépassé");
    }
}
