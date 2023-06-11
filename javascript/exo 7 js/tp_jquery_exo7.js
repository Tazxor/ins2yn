$(document).ready(function(){
    // création du formulaire de QCM
    var str = "";
    for (let i = 1; i <= 5 ; i++) {
        str += '<p id="question'+i+'">Question ' + i + '</p>';
        for (let j = 1; j <= 3; j++){
            str += '<input type="radio" id="q' + i + 'r' + j + 
            '" name="q' + i + 
            '" value="' + j +'" /><label>Réponse ' + j + '</label><br>';
        }
        str += '<br>';
    }
    str += '<input type="submit" id="corr" value="Corriger" />';
    $("#qcm").html(str);
    // Tableau des réponses correctes
    var bonnesReponses = [1,1,1,1,1];
    // Tableau des choix de l'utilisateur
    var rep = [];
    // fonction récupération des choix
    function recupReponse(i,j){
        if($("input[id=q"+i+"r"+j+"]").is(':checked')){
            return j;
        }
        return 0;
    }
    // fonction de correction
    function corrige(){
        var note = 0;
        // la variable corriger(VRAI/FAUX) pour vérifier 
        // si l'utilisateur à bien répondu à tout les questions 
        var corriger = ($("input:radio:checked").length == 5);
        for (let i = 1; i <= 5; i++){
            for (let j = 1; j <= 3; j++){
                if(recupReponse(i,j) != 0){
                    rep.push(recupReponse(i,j));
                }
            }
        }

    }
});