function send_formular() {
    // Sélectionner l'élément input et récupérer sa valeur
    
    var prenom = document.getElementById("prenom").value;
    var nom = document.getElementById("nom").value;
    var adresse = document.getElementById("adresse").value;
    var ville = document.getElementById("ville").value;
    var email = document.getElementById("email").value;
    var liste_id= JSON.parse(localStorage.getItem('liste_id')); 
    
    console.log(liste_id.length)
    // Afficher la valeur
    if(prenom == "" || nom == "" || adresse==""|| ville==""|| email=="") 
    {
      
     alert("Vous avez oublier de remplir tout les champs");
      
    }
    else{
      console.log("formulaire envoyé")
      let formular = JSON.stringify({
          contact :
        {
          firstName: prenom,
          lastName: nom,
          address: adresse ,
          city: ville,            
          email: email
        },
          products : liste_id
        })
      
      fetch(" http://localhost:3000/api/teddies/order", {
        method: "POST",
        body: formular,
    
        headers: {
        'Content-Type': 'application/json'
        },
        
        }).then(response => {

          
          if (response.ok) {
              response.json()
                  .then(function (res) {
                    console.log(res.orderId);
                    window.localStorage.setItem('commande_id', res.orderId);
                    document.location.href="./confirmation_commande.html"
                    
                   
                  })
                  .catch(error => {
                      console.error(error);
                  });
          } else {
              console.error('server response : ' + response.status);
          }
      }).catch(error => {
          console.error(error);
      });
      

        
        
     
    }
    
  
    
}