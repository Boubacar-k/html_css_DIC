function calc() {
    let prix = document.getElementById("product").value;
    let quantite = document.getElementById("number").value;
    prix = parseInt(prix);
    quantite = parseInt(quantite);
    let montant = prix + quantite;
    window.alert("prix = "+prix+" yen montant = "+quantite+" total = "+montant+" yen")
}