var num = prompt("Entre com um valor inteiro");
var htmlgerado = "";
var nLinha = 0; 

for (i=1; i <= num; i++) {
    if (i % 2 != 0) {
      
        var cssLinha = "linha"+nLinha;
        htmlgerado += "<div class='row " +cssLinha+ "'> ";
        htmlgerado += "   <div class='col-md-12'> "+i+"</div>";
        htmlgerado += "</div>";

        if (nLinha == 3){
            nLinha = 0;
        }
 
    }
}

    document.getElementById("numerosimpares").innerHTML = htmlgerado;