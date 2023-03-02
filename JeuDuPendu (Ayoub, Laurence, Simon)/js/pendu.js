let grille = null;
let nom = "";
let lettre = "";
let nomProfil = "";
let tabJoueurs=[];
let scorePartie = [];

function accueil(){

    document.body.style.backgroundColor = "black";
    document.body.style.backgroundImage = `url("images/desktopAccueilCopie.jpg")`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";

    let container = document.getElementById("idContainer");

    //FIELDSET choix de la difficulté

    let choice = document.createElement("fieldset");
    choice.id = "choice";
    container.appendChild(choice);

    let legend = document.createElement("legend");
    legend.innerText = "Choisissez la difficulté :";
    choice.appendChild(legend);

    let easy = document.createElement("div");
    easy.id = "choix1";
    easy.className = "choix";
    choice.appendChild(easy);

    let middle = document.createElement("div");
    middle.id = "choix2";
    middle.className = "choix";
    choice.appendChild(middle);

    let hard = document.createElement("div");
    hard.id = "choix3";
    hard.className = "choix";
    choice.appendChild(hard);

    let input1 = document.createElement("input");
    input1.type = "radio";
    input1.id = "id_facile";
    input1.name = "choix";
    input1.value = "facile";
    easy.appendChild(input1);

    let label1 = document.createElement("label");
    label1.htmlFor = "id_facile";
    label1.innerText = "Facile";
    easy.appendChild(label1);

    let input2 = document.createElement("input");
    input2.type = "radio";
    input2.id = "id_moyen";
    input2.name = "choix";
    input2.value = "moyen";
    middle.appendChild(input2);

    let label2 = document.createElement("label");
    label2.htmlFor = "id_moyen";
    label2.innerText = "Moyen";
    middle.appendChild(label2);

    let input3 = document.createElement("input");
    input3.type = "radio";
    input3.id = "id_difficile";
    input3.name = "choix";
    input3.value = "difficile";
    hard.appendChild(input3);

    let label3 = document.createElement("label");
    label3.htmlFor = "id_difficile";
    label3.innerHTML = "Difficile";
    hard.appendChild(label3);

    let containBtnScore = document.createElement("div");
    containBtnScore.id = "containBtnScore";
    container.appendChild(containBtnScore);

    let btnScore = document.createElement("div");
    btnScore.innerText = "SCORE";
    btnScore.id = "btnScore";
    containBtnScore.appendChild(btnScore);

    btnScore.addEventListener("click", scoreBtn);


    if(JSON.parse(localStorage.getItem("classement"))!=null){
        tabJoueurs = JSON.parse(localStorage.getItem("classement"));
    }

    let getScore = JSON.parse(localStorage.getItem("classement"));

    function scoreBtn(){
        container.removeChild(choice);
        container.removeChild(containBtnJouer);
        container.removeChild(containBtnScore);

        document.body.style.backgroundImage = "none";
        document.body.style.backgroundSize = "none";
        document.body.style.background = `url("https://images7.alphacoders.com/400/400623.jpg")`;
        
        let classement=document.createElement("div");
        classement.id = "classement";
        container.appendChild(classement);

        let tabResult = document.createElement("table");
        classement.appendChild(tabResult);

        let headResult = document.createElement("thead");
        tabResult.appendChild(headResult);

        let surnom = document.createElement("th");
        surnom.innerText = "Nom";
        headResult.appendChild(surnom);

        let scoreResult = document.createElement("th");
        scoreResult.innerText = "Score";
        headResult.appendChild(scoreResult);

        let TimeResult = document.createElement("th");
        TimeResult.innerText = "Temps";
        headResult.appendChild(TimeResult);

        let MoyenneResult = document.createElement("th");
        MoyenneResult.innerText = "Score Moyen";
        headResult.appendChild(MoyenneResult);

        let bodyResult = document.createElement("tbody");
        tabResult.appendChild(bodyResult);

        for (let i=0;i<tabJoueurs.length;i++){
            console.log(tabJoueurs);
            ligne = tabResult.insertRow(i);
            nomResult =  ligne.insertCell(0);
            nomResult.innerText = `${getScore[i].name}`;
            scoreResult =  ligne.insertCell(1);
            scoreResult.innerText = `${getScore[i].score}`;
            tempsProfil = ligne.insertCell(2);
            tempsProfil.innerText = `${getScore[i].temps}`;
            moyenneProfil = ligne.insertCell(3);
            moyenneProfil.innerText = `${getScore[i].moyenne}`;
        }

        let cadreRetour = document.createElement("div");
        cadreRetour.id = "cadreRetour";
        container.appendChild(cadreRetour);

        let retour = document.createElement("button");
        retour.id = "retour";
        retour.innerText = "Retour";
        retour.addEventListener("click",reback);
        cadreRetour.appendChild(retour);

        function reback(){
            container.removeChild(classement);
            container.removeChild(cadreRetour);
            accueil();
        }
    }

    let containBtnJouer = document.createElement("div");
    containBtnJouer.id = "containBtnJ";
    container.appendChild(containBtnJouer);

    let btnPlay = document.createElement("button");
    btnPlay.innerText = "JOUER";
    btnPlay.id = "btnJouer";
    containBtnJouer.appendChild(btnPlay);

    //CHOIX PSEUDONYME

    let userName = document.createElement("form");

    let divUserName = document.createElement("div");
    divUserName.id = "user_name";
    userName.appendChild(divUserName);
    choice.appendChild(userName);

    let pseudo = document.createElement("label");
    pseudo.htmlFor = "usr_name";
    pseudo.innerText = "Votre Pseudo :";
    divUserName.appendChild(pseudo);

    let inputPseudo = document.createElement("input");
    inputPseudo.type = "text";
    inputPseudo.id = "usr_name";
    inputPseudo.size = "15";
    inputPseudo.maxLength = "14"; 
    divUserName.appendChild(inputPseudo);

    //CHOIX DIFFICULTE

    btnPlay.addEventListener("click",chooseDifficulty);
    btnPlay.addEventListener("mousedown",bgButton);
    btnPlay.addEventListener("mouseup",bgButton2);

    function bgButton(){
        btnPlay.style.backgroundColor = "yellow";
        btnPlay.style.transform = "translate(5px,10px)";
        btnPlay.style.boxShadow = "none";
    }

    function bgButton2(){
        btnPlay.style.backgroundColor = "";
        btnPlay.style.transform = "translate(-5px,-10px)";
        btnPlay.style.boxShadow = "5px 10px rgb(16, 117, 105)";
    }

    function chooseDifficulty(){
        if(inputPseudo.value.length != 0){
            if(input1.checked){
                let difficulte = "facile";
                nomProfil = inputPseudo.value;
                container.removeChild(choice);
                container.removeChild(containBtnJouer);
                container.removeChild(containBtnScore);
                launch(difficulte);
            }else if(input2.checked ){
                let difficulte = "moyen";
                nomProfil = inputPseudo.value;
                container.removeChild(choice);
                container.removeChild(containBtnJouer);
                container.removeChild(containBtnScore);
                launch(difficulte);
            }else if(input3.checked){
                let difficulte = "difficile";
                nomProfil = inputPseudo.value;
                container.removeChild(choice);
                container.removeChild(containBtnJouer);
                container.removeChild(containBtnScore);
                launch(difficulte);
            }else alert("Choisissez une difficulté");
        }else alert("Veuillez entrer votre Pseudo");
    }

    //UTILISER handler.style.display = "none"; pour supprimer l'affichage
    function launch(difficulte){
        let partie = 1;
        let temps = 0;
        let score = 0;
        let erreurs_commises=0;
        let erreurs_autorisees=10;
        let verif = true;
        
        document.body.style.backgroundImage = "none";
        document.body.style.backgroundSize = "none";
        document.body.style.backgroundColor = "black";

        const myAudio = document.createElement('audio');

        let header = document.createElement("header");
        header.id = "tete";
        container.appendChild(header);

        let coupRestants = document.createElement("h2");
        coupRestants.id = "erreurs";
        coupRestants.innerText = `Echecs restants : ${erreurs_autorisees}`
        header.appendChild(coupRestants);

        let timer = document.createElement("h2");
        timer.id = "timer";
        header.appendChild(timer);

        let scene = document.createElement("div");
        scene.id = "containerImg";
        container.appendChild(scene);

        let texte = document.createElement("div");
        texte.className = "texte";
        scene.appendChild(texte);

        let reponse = document.createElement("h2");
        reponse.id = "reponse";
        texte.appendChild(reponse);

        let motHTML = document.createElement("h2");
        motHTML.id = "mot";
        texte.appendChild(motHTML);

        //------------------Récupération du mot--------------------//
        let random = Math.floor(Math.random()*mot[difficulte].length);
        let mot_a_trouver = mot[difficulte][random];

        let longueur = mot_a_trouver.length;
        console.log(mot_a_trouver);
        let motcache = [];
        function play(){
            if(motcache.length===0){
                for(let i=0;i<longueur;i++){
                    motcache[i]= "_";
                }
            }
            motHTML.innerText = motcache.join(" ");
        }
        //-----------Variable de notre motcache html avec les caractères collées-------------------//
        console.log(motcache.length);
        console.log(motcache);

        let chrono = setInterval(()=>{
            let millisecondes = parseInt(temps%100,10);
            let secondes = parseInt(temps/100%60,10);
            let minutes = parseInt(temps/100/60%60,10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            secondes = secondes < 10 ? "0" + secondes : secondes;
            millisecondes = millisecondes < 10 ? "0" + millisecondes : millisecondes;

            let resultat = `${minutes}:${secondes}:${millisecondes}`;
            
            timer.innerText = resultat;
            temps++;
        },10);

        //-------------------Grille des lettres-----------------------//
        let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let length=alphabet.length;

        function createColorBox(length){
            
            grille = document.createElement("div");
            grille.className = "grille";
            container.appendChild(grille);

            for(let i=1;i<=length;i++){
                nom=document.createElement("div");
                nom.className = "box";
                nom.id = alphabet[i-1];
                nom.innerText = alphabet[i-1];
                nom.addEventListener("click",lettres);
                grille.appendChild(nom);
            }

            play();

        }

        document.addEventListener('keyup',lettres);

        function lettres(e){
            if(partie===1){
                if(e.type === "keyup"){
                    lettre = e.key.toUpperCase();
                }
                if(e.type === "click"){
                    lettre = e.target.innerText;
                }
                let elemt = document.getElementById(lettre);
                console.log(elemt);
                if((elemt.style.backgroundColor !=="green") && (elemt.style.backgroundColor !== "red")){
                    if(mot_a_trouver.includes(lettre)){
                        verif=true;
                        score = erreurs_autorisees-erreurs_commises;
                        elemt.style.backgroundColor = "green";
                        reponse.style.color = "green";
                        for(let i=0;i<longueur;i++){
                            if(mot_a_trouver[i]===lettre){
                                motcache[i] = lettre;
                            }
                        }
                    }else{
                        verif=false;
                        erreurs_commises++;
                        score = erreurs_autorisees-erreurs_commises;
                        elemt.style.backgroundColor = "red";
                        scene.style.background = `url("images/background${erreurs_commises}.png")`;
                        scene.style.backgroundSize = "contain";
                        scene.style.backgroundRepeat = "no-repeat";
                        scene.style.backgroundPosition = "center";
                        coupRestants.innerText = `Echecs Restants : ${score}`;
                        reponse.style.color = "red";
                    }
                    console.log(motcache);
                    checkMot();
                }
            }
        }

        function checkMot(){
            let mot_trouve = motcache.join("");
            if(erreurs_commises<erreurs_autorisees && mot_trouve!=mot_a_trouver){
                if(verif===false){
                    reponse.innerText = "C'est faux";
                    myAudio.src = 'audio/Homer_Simpson_Doh.mp3';
                    myAudio.play();               
                }else{
                    reponse.innerText = "C'est juste";
                    myAudio.src = 'audio/Homer_Simpson_Woo-hoo.mp3';
                    myAudio.play();
                }
                play();
            }else if(erreurs_commises===erreurs_autorisees){
                motHTML.innerText = motcache.join(" ");
                clearInterval(chrono);
                reponse.innerText="";
                myAudio.src = 'audio/ta-gueule.mp3';
                myAudio.play();
                setTimeout(()=>{
                    motHTML.style.color = "black";
                    motHTML.innerText=`${mot_a_trouver}`;
                    scene.style.background = `url("images/background11.png")`;
                    scene.style.backgroundSize = "contain";
                    scene.style.backgroundRepeat = "no-repeat";
                    scene.style.backgroundPosition = "center";
                    setTimeout(()=>{
                        reponse.style.color = "black";
                        reponse.innerText=`Temps: ${timer.innerText} Score: ${score}`;
                    },1500)
                },1000)
                exit();
            }else{
                motHTML.innerText = motcache.join(" ");
                clearInterval(chrono);
                reponse.innerText="";
                myAudio.src = 'audio/salutbandedenuls.mp3';
                myAudio.play();
                setTimeout(()=>{
                    motHTML.style.color = "black";
                    scene.style.background = `url("images/background12.png")`;
                    scene.style.backgroundSize = "contain";
                    scene.style.backgroundRepeat = "no-repeat";
                    scene.style.backgroundPosition = "center";
                    setTimeout(()=>{
                        reponse.style.color = "black";
                        reponse.innerText=`Temps: ${timer.innerText} Score: ${score}`;
                    },1500)
                },1000)
                exit();
            }
        }

        createColorBox(length);
        function exit(){
            //Mémoire stockage site
            //Créer une sauvegarde de profil et l'enregistrait dans le local storage:
            let tempsfinal = timer.innerText;
            let scoreProfil = score;
            let scoreMoyen = 0;
            scorePartie.push(scoreProfil);
            for(k in scorePartie){
                scoreMoyen += scorePartie[k];
            }
            scoreMoyen /= scorePartie.length;
            let profil = {name : nomProfil , score : scoreProfil , temps : tempsfinal, moyenne : scoreMoyen };
            tabJoueurs.push(profil);
            let tabJoueursStr = JSON.stringify(tabJoueurs);
            localStorage.setItem( "classement" , tabJoueursStr);

            //Récupérer une sauvegarde de profil et l'utiliser pour l'afficher dans notre classement accueil :

            partie=0;
            container.removeChild(grille);

            cadreButton = document.createElement("div");
            cadreButton.className = "listButton";
            container.appendChild(cadreButton);

            reset = document.createElement("button");
            reset.id = "reset";
            reset.innerText = "Rejouer";
            cadreButton.appendChild(reset);
            reset.addEventListener("click",replay);
        }

        function replay(){
            console.log(header);
            container.removeChild(header);
            container.removeChild(scene);
            container.removeChild(cadreButton);
            accueil();
        }
    }
}

accueil();
