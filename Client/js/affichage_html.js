// Recuperation et affichage des ours

function affichage_ours_index(value,i,img,li_name,li_price,li_image,li_color,li_description){  
                     
    
    // affichage des données dans tout les li
    li_name.innerHTML = value[i].name;
    document.getElementById("liste_ours"+i).appendChild(li_name);  

    li_price.innerHTML = "Prix : " + value[i].price + " £";
    document.getElementById("liste_ours"+i).appendChild(li_price);

    document.getElementById("liste_ours"+i).appendChild(li_image);
    img.src = value[i].imageUrl
                    
    var img_ours = document.getElementsByClassName("picture_ours")[i];
    img_ours.appendChild(img);

    li_color.innerHTML = "Couleurs proposées : " +value[i].colors;
    document.getElementById("liste_ours"+i).appendChild(li_color);

    li_description.innerHTML = "Description de l'ours : " +value[i].description;
    document.getElementById("liste_ours"+i).appendChild(li_description);

    // création bouton dans la liste 
    var li_confirmation = document.createElement('li');
    li_confirmation.className = "li_confirmation_ours" ;

    var btn_confirmation = document.createElement("button"); 
    btn_confirmation.className = "btn_confirmation_ours" ;
    
    var a_confirmation = document.createElement("a"); 
    
    document.getElementById("liste_ours"+i).appendChild(li_confirmation);

    document.getElementsByClassName("li_confirmation_ours")[i].appendChild(btn_confirmation);
    document.getElementsByClassName("btn_confirmation_ours")[i].appendChild(a_confirmation);

    
    a_confirmation.innerHTML = "Confirmer le choix de cette ours";
    a_confirmation.setAttribute("href", "produit.html");

    click_confirmation();
                        
}                       
                       

// ecriture texte pour page produit

function affichage_ours_confirmation(data,value,i,img,li_name,li_price,li_image,li_color,li_description){                          
                        
    var data = localStorage.getItem('data'); 

     // affichage des données dans tout les li


    li_name.innerHTML = value[data].name;
    document.getElementById("liste_ours"+i).appendChild(li_name);  

    li_price.innerHTML = "Prix : " + value[data].price + " £";
    document.getElementById("liste_ours"+i).appendChild(li_price);

    document.getElementById("liste_ours"+i).appendChild(li_image);
    img.src = value[data].imageUrl
                    
    var img_ours = document.getElementsByClassName("picture_ours")[i];
    img_ours.appendChild(img);

    

    li_description.innerHTML = "Description de l'ours : " +value[data].description;
    document.getElementById("liste_ours"+i).appendChild(li_description);

    
   

    // Question sur le choix de la couleur de l'ours
    document.getElementById("liste_ours"+i).appendChild(li_color);
    
    var label = document.createElement('label');
    label.innerHTML = "Qu'elle couleur pour votre ours désirez vous ?"
    label.setAttribute("for", "choose_color");
    label.id = "label_color";
    document.getElementsByClassName("color_ours")[i].appendChild(label);

    // Création de la liste déroulante
    var select = document.createElement('select');
    select.id = "select_color";
    document.getElementById("label_color").appendChild(select);
    
    // Création de la liste des couleurs
    const str_data = new String(value[data].colors);
    const color_data = str_data.split(',');
    document.getElementById("liste_ours"+i).appendChild(li_color);

    //Affichage des couleurs dans la liste déroulante
    for (let i = 0; i < color_data.length; i++){
        var option = document.createElement('option');
        option.setAttribute("value", "color"+i);
        option.innerHTML = color_data[i];
        document.getElementById("select_color").appendChild(option);
    }

    //Bouton pour ajouter un ours au panier

    var li_ajout_panier = document.createElement('li');
    li_ajout_panier.id = "li_ajout_panier" ;

    var btn_ajout_panier = document.createElement("button"); 
    btn_ajout_panier.id= "btn_ajout_panier" ;
    var a_ajout_panier = document.createElement("a"); 

    document.getElementById("liste_ours"+i).appendChild(li_ajout_panier);

    document.getElementById("li_ajout_panier").appendChild(btn_ajout_panier);

    document.getElementById("btn_ajout_panier").appendChild(a_ajout_panier);

    
    a_ajout_panier.id = "a_ajout_panier";
    a_ajout_panier.innerHTML = "Ajouter au panier";
    a_ajout_panier.setAttribute("href", "panier.html");
    
    //clic
    document.getElementById("a_ajout_panier").onclick = function() {ajout_panier(value),click_couleur(value)};
    
}
             

function affichage_ours_panier(value,i,img,li_name,li_price,li_color,li_image,li_description,numero_ours_panier){
    var couleur_liste = JSON.parse(localStorage.getItem('couleur_liste'));  
  
    
     // affichage des données dans tout les li
    
    li_name.innerHTML = value[numero_ours_panier].name;
    document.getElementById("liste_ours"+i).appendChild(li_name);  

    li_price.innerHTML = "Prix : " + value[numero_ours_panier].price + " £";
    document.getElementById("liste_ours"+i).appendChild(li_price);

    
                    
    document.getElementById("liste_ours"+i).appendChild(li_image);
     img.src = value[numero_ours_panier].imageUrl;
    var img_ours = document.getElementsByClassName("picture_ours")[i];
    img_ours.appendChild(img);

  
    li_color.innerHTML = "Couleurs choisi : " + couleur_liste[i];
    document.getElementById("liste_ours"+i).appendChild(li_color);

    li_description.innerHTML = "Description de l'ours : " +value[numero_ours_panier].description;
    document.getElementById("liste_ours"+i).appendChild(li_description);


      
    //Bouton pour supprimer un ours du panier
    
    var li_supprimer_ours_panier = document.createElement('li');
    li_supprimer_ours_panier.className = "li_supprimer_ours_panier" ;

    var btn_supprimer_ours_panier = document.createElement("button"); 
    btn_supprimer_ours_panier.className= "btn_supprimer_ours_panier" ;
    btn_supprimer_ours_panier.id= "btn_supprimer_ours_panier" + i ;

    var a_supprimer_ours_panier = document.createElement("a"); 

    document.getElementById("liste_ours"+i).appendChild(li_supprimer_ours_panier);
    document.getElementsByClassName("li_supprimer_ours_panier")[i].appendChild(btn_supprimer_ours_panier);
    document.getElementsByClassName("btn_supprimer_ours_panier")[i].appendChild(a_supprimer_ours_panier);
    
    
    a_supprimer_ours_panier.innerHTML = "Supprimer du panier";
    a_supprimer_ours_panier.setAttribute("href", "panier.html");
    a_supprimer_ours_panier.setAttribute("onclick", "click_supprimer()");


}
function affichage_confirmation_commande_ours(numero_ours_panier,value){
 
    // Affichage ours commandés
    var p  = document.createElement("p"); 
    p.innerHTML = "Article commandé : " + value[numero_ours_panier].name + " <br/> Prix de l'article : " + value[numero_ours_panier].price;
    document.querySelector("section").appendChild(p);

}


// affichage du reste du html


function affichage_panier(nombre_ours){
    if(nombre_ours != 0)
    {
        // Bouton pour supprimer tout les ours du paniers
        var btn_supprimer_panier = document.createElement("button"); 
        btn_supprimer_panier.id= "btn_supprimer_panier" ;
        document.getElementById("Conteneur_liste_ours").appendChild(btn_supprimer_panier);

        var a_supprimer_panier = document.createElement("a"); 
        a_supprimer_panier.innerHTML = "Supprimer tout les produits du panier";
        a_supprimer_panier.setAttribute("href", "panier.html");
        document.getElementById("btn_supprimer_panier").appendChild(a_supprimer_panier);

        // Affichage du nombre d'ours dans le panier
        var liste_id = JSON.parse(localStorage.getItem('liste_id')); 
        var h2  = document.createElement("h2"); 
        h2.innerHTML = "Vous avez " + liste_id.length + " ours dans votre panier.";
        document.getElementById("panier_header").appendChild(h2);

        suppression_panier(btn_supprimer_panier);

        // affichage du prix total du panier
        var prix_panier= JSON.parse(localStorage.getItem('prix_panier')); 
        var p  = document.createElement("p"); 
        p.innerHTML = "Le prix total du panier est de : " + prix_panier;
        
        document.getElementById("Conteneur_liste_ours").appendChild(p);
        
    }
    // Si 0 ours dire que le panier est vide
    else{
        var p  = document.createElement("p"); 
        p.innerHTML = "Vous avez aucun ours dans votre panier";
        document.querySelector("section").appendChild(p);

    }
    
    if (nombre_ours < 1 ){
                    
        document.querySelector('footer').style.position = "absolute";
        document.querySelector('footer').style.bottom = "0";
    }
}



function affichage_confirmation_commande(nombre_ours){

    if(nombre_ours != 0){
        // Prix de tout le pannier affichage
        var prix_panier= JSON.parse(localStorage.getItem('prix_panier')); 
        var p  = document.createElement("p"); 
        p.innerHTML = "Le prix total du panier est de : " + prix_panier;
        document.querySelector("section").appendChild(p);
    }
    if(nombre_ours < 9){
        footer = document.querySelector('footer');
        footer.id = "footer_fixé"
    }

    // Affichage de l'id commande
    var commande_id = localStorage.getItem('commande_id'); 
    var p  = document.createElement("p"); 
    p.innerHTML = "L'id de votre commande est " + commande_id;
    document.querySelector("section").appendChild(p);


    // Reset de toute les données du panier
    var prix_panier = [];
    localStorage.setItem('prix_panier', JSON.stringify(prix_panier));   
    var couleur_liste = [];
    localStorage.setItem('couleur_liste', JSON.stringify(couleur_liste)); 
    var liste_ours_panier = [];
    localStorage.setItem('liste_id', JSON.stringify(liste_ours_panier)); 
}