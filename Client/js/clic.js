function click_confirmation(){
    
    //fonction pour reperer les clics et afficher le bon ours
    const btns = document.querySelectorAll('button');
    const btns_liste = [...document.querySelectorAll("button")];
      
    // Boucle pour verifier les clics
    for (const btn of btns) {
    btn.addEventListener('click', function() {
              
      localStorage.setItem('data', btns_liste.indexOf(btn));
       
      
          
    });
  }
}

function click_supprimer(){
  var btns = document.querySelectorAll('button');
  const btns_liste = [...document.querySelectorAll("button")];
  var verif = "true";
  // Boucle pour verifier les clics
  for (const btn of btns) {
  btn.addEventListener('click', function() {
    
    localStorage.setItem('data2', btns_liste.indexOf(btn));
    if(verif == "true"){
      console.log()
      
      var liste_id = JSON.parse(localStorage.getItem('liste_id')); 
      var couleur_liste = JSON.parse(localStorage.getItem('couleur_liste')); 
      
      var pos = btns_liste.indexOf(btn), n = 1;
      liste_id.splice(pos,n);
      couleur_liste.splice(pos,n);
    
      localStorage.setItem('couleur_liste', JSON.stringify(couleur_liste)); 
      localStorage.setItem('liste_id', JSON.stringify(liste_id)); 
      verif =false;
    }
  });
  
  
  }
  
  //fonction pour reperer les clics et afficher le bon ours
  
}

function click_couleur(){
    
   var verif = JSON.parse(localStorage.getItem('couleur_liste'));  

   if(verif === null){
    
    var couleur_liste = [];
    localStorage.setItem('couleur_liste', JSON.stringify(couleur_liste));  
   }
  else{
    
    var couleur_liste = JSON.parse(localStorage.getItem('couleur_liste')); 
    
    }
  
    var couleur_choisi = document.getElementById("select_color").options[document.getElementById('select_color').selectedIndex].text;
  couleur_liste.push(couleur_choisi);
  
  localStorage.setItem('couleur_liste', JSON.stringify(couleur_liste)); 
  
  
  
}







