/*fonction permetant de caché le contenu  l'experience professionelle*/
function hidenExpPro(){

    /* si la div invisible est caché la montré ... sinon la laisser caché */

    if(document.getElementById("invisible").style.display =="none"){ // document getElementbyId("") permet de ciblé un element HTML, style.diplay  permet de  modifier propriété display de style
        document.getElementById("invisible").style.display = "block";

    }else{
        document.getElementById("invisible").style.display = "none";
    }

}

/*fonction permetant de caché le contenu des diplome */
function hidenDiplome(){

    if(document.getElementById("invisible2").style.display =="none"){
        document.getElementById("invisible2").style.display = "block";
    }else{
        document.getElementById("invisible2").style.display = "none";
    }

}

/*fonction permetant de caché le contenue des competence*/
function hidenCompetence(){

    if(document.getElementById("invisible3").style.display =="none"){
        document.getElementById("invisible3").style.display = "block";
    }else{
        document.getElementById("invisible3").style.display = "none";
    }

}

