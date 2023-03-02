let principal = document.getElementById("id_principal");

//FIELDSET choix de la difficulté

let choice = document.createElement("fieldset");
choice.id = "choice";
principal.appendChild(choice);

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