// retrouver le numéro de l'ours par rapport à son id
function trouver_ours(liste_id_local,i){
    
    if (liste_id_local[i] == "5be9c8541c9d440000665243"){
        var numero_ours_panier = 0;
    }
    if (liste_id_local[i] == "5beaa8bf1c9d440000a57d94"){
        var numero_ours_panier = 1;
    }
    if (liste_id_local[i] == "5beaaa8f1c9d440000a57d95"){
        var numero_ours_panier = 2;
    }
    if (liste_id_local[i] == "5beaabe91c9d440000a57d96"){
        var numero_ours_panier = 3;
    }
    if (liste_id_local[i] == "5beaacd41c9d440000a57d97"){
        var numero_ours_panier = 4;
    }
    
    return numero_ours_panier ;
}

// Ajouter un ours dans le panier
function ajout_panier(value){
    
     
    var data = JSON.parse(localStorage.getItem('data')); 
    var liste_id = JSON.parse(localStorage.getItem('liste_id'));  
    
    if(liste_id === null ){
        var liste_id  = [];
        localStorage.setItem('liste_id', JSON.stringify(liste_id));  
        
     }
    
    
    liste_id.push(value[data]._id);
    
    localStorage.setItem('liste_id', JSON.stringify(liste_id)); 
}

//Calcul le prix du panier
function calcul_prix_panier(value,nombre_ours,numero_ours_panier,price_total){

    for (let i = 0; i < nombre_ours; i++) { 
        var liste_id_local= JSON.parse(localStorage.getItem('liste_id')); 
        var numero_ours_panier = (trouver_ours(liste_id_local,i));
        price_total += Number.parseInt(value[numero_ours_panier].price);
        localStorage.setItem('prix_panier', JSON.stringify(price_total)); 
    }  
}

//Supprimer tout les ours du panier
function suppression_panier(btn_supprimer_panier){
    
    btn_supprimer_panier.onclick = function() {
        var liste_vide = [];
       localStorage.setItem('liste_id', JSON.stringify(liste_vide));   
       
       localStorage.setItem('couleur_liste', JSON.stringify(liste_vide));   
       
   }; 
}