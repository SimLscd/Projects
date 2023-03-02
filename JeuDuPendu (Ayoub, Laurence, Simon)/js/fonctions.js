//CHOIX DIFFICULTE

let radio = document.querySelectorAll('input[name="choix"]');
let difficult;

choice.addEventListener("click",chooseDifficulty);
function chooseDifficulty(){
    for(let i=0 ; i<radio.length; i++){
        if(input1.checked === true){
            difficult = "facile";
        }
        if(input2.checked === true){
            difficult = "moyen";
        }
        if(input3.checked === true){
            difficult = "difficile";
        }
    }
}

//UTILISER handler.style.display = "none"; pour supprimer l'affichage