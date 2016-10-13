var filter="";

function determineFilter() {
    if (document.getElementById("Baked").checked){
        filter+=" bake ";
    }
    if( document.getElementById("Fried").checked){
        filter+=" fried ";
    }
    if (document.getElementById("Refrigerated").checked){
        filter+=" refrigerate ";
    }
    if (document.getElementById("Frozen").checked){
        filter+=" frozen ";
    }
    if (document.getElementById("Grilled").checked){
        filter+="grilled";
    }
    if(document.getElementById("Uncooked").checked){
        filter+="uncooked";
    }

}

