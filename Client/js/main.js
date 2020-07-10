document.addEventListener("DOMContentLoaded",()=>{ 
  
    //Acces à l'api
    fetch("http://localhost:3000/api/teddies")
    .then(function (response) {
        response.json()
            .then(function (value) {
               
                // Nombre d'ours dans l'api 
                nombre_ours = value.length ;
                
                //Analyse de la page pour la suite et le nombre de boucle d'affichage des ours   
                var position_page =  document.querySelector('title').innerText;

                //fonction mise en place pour ul et li
                
                if(position_page == "Page d'accueil"){
                    
                    nombre_ours = value.length;
                   
                } 
                if(position_page == "Produits"){
                    
                    nombre_ours = 1;
                } 
                if(position_page == "Panier" || position_page == "Confirmation commande"){
                    
                    var value = JSON.parse(localStorage.getItem('liste_id')); 
                    nombre_ours = value.length ;
                    if (nombre_ours == 0 && position_page == "Panier" ){

                        document.querySelector('form').style.display = "none";
                        document.getElementById("Conteneur_liste_ours").style.display = "none";
                        
                    }
                    
                } 
                mise_en_place(position_page);

                
                
            }
        ) 
        });
  
});

function mise_en_place(position_page){  
    //Acces à l'api
    fetch("http://localhost:3000/api/teddies")
    .then(function (response) {
        response.json()
            .then(function (value) {
                
                // variable du clic pour avoir le numero de l'ours selectionné
                
                var price_total = 0 ;
                if(position_page == "Page d'accueil" ||position_page =="Produits" ||position_page == "Panier"){
                    
                    //création boucle ou on crée les ul qui vont contenir les ours
                    
                    for (let i = 0; i < nombre_ours; i++) { 
                        var ul = document.createElement('ul');
                        document.getElementById("Conteneur_liste_ours").appendChild(ul);
                        ul.id = "liste_ours" + i;
                        ul.className = "liste_ours" ;
                    }
                    
                   

                    
                 //création boucle ou on affiche les données des ours dans des li  
                for (let i = 0; i < nombre_ours; i++) { 
                        
                        //Noms des ours initialisation
                        var li_name = document.createElement('li');
                        li_name.className = "name_ours";

                        //Prix des ours initialisation
                        var li_price = document.createElement('li');
                        li_price.className = "price_ours";

                        //Images des ours initialisation
                        var li_image = document.createElement('li');
                        li_image.className = "picture_ours" ;
                        
                        var img = document.createElement("img");

                        //Couleurs des ours initialisation
                        var li_color = document.createElement('li');
                        li_color.className = "color_ours";
                        //

                        //Descriptions des ours initialisation
                        var li_description = document.createElement('li');
                        li_description.className = "description_ours";
                    

                    //Chargement des données des ours par rapport à la page
                    
                    if(position_page == "Page d'accueil"){
                        affichage_ours_index(value,i,img,li_name,li_price,li_image,li_color,li_description);
                       
                    } 
                    if(position_page == "Produits"){
                        var data = localStorage.getItem('data');  
                        affichage_ours_confirmation(data,value,i,img,li_name,li_price,li_image,li_color,li_description);
                     
                    } 
                    if(position_page == "Panier"){
                        var liste_id_local= JSON.parse(localStorage.getItem('liste_id')); 
                        
                        
                        var numero_ours_panier = trouver_ours(liste_id_local,i);
                        affichage_ours_panier(value,i,img,li_name,li_price,li_color,li_image,li_description,numero_ours_panier);
                        
                    } 
                    
                }     
                        
                } 


                // On affiche le reste de la page html / tout hors des ours
                
                if(position_page == "Panier"){  
                    calcul_prix_panier(value,nombre_ours,numero_ours_panier,price_total);
                    
                    affichage_panier(nombre_ours);
                    
                }
                if(position_page == "Confirmation commande"){
                    calcul_prix_panier(value,nombre_ours,numero_ours_panier,price_total);
                    
                    var liste_id_local = JSON.parse(localStorage.getItem('liste_id'));  
                    
                    for (let i = 0; i < nombre_ours; i++) { 
                        
                        
                        var numero_ours_panier = trouver_ours(liste_id_local,i);
                       
                        affichage_confirmation_commande_ours(numero_ours_panier,value);;
                        
                    }
                    affichage_confirmation_commande(nombre_ours);
                    
                }
                
                
    
            }
        )}
    )};