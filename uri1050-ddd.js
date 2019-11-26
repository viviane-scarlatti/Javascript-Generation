var ddd = prompt("Por favor, digite o DDD do telefone");
switch(ddd){
    case '61':
        document.getElementById("uf").innerHTML="Brasilia";
        break;
    case '71':
        document.getElementById("uf").innerHTML="Salvador";
        break;
    case '11':
        document.getElementById("uf").innerHTML="Sao Paulo";
        break;
    case '21':
        document.getElementById("uf").innerHTML="Rio de Janeiro";
        break;
    case '32':
        document.getElementById("uf").innerHTML="Juiz de Fora";
        break;
    case '19':
        document.getElementById("uf").innerHTML="Campinas";
        break;
    case '27':
        document.getElementById("uf").innerHTML="Vitoria";
        break;
    case '31':
        document.getElementById("uf").innerHTML="Belo Horizonte";
        break;
    default:
        document.getElementById("uf").innerHTML="DDD Nao econtrado";
        break;
}
/*if (ddd == 61){
    document.getElementById("uf").innerHTML="Brasilia";
}
else{
    if (ddd == 71){
        document.getElementById("uf").innerHTML="Salvador";
    }
    else{
        if (ddd == 11){
            document.getElementById("uf").innerHTML="Sao Paulo";
        }
        else{
            if (ddd == 21){
                document.getElementById("uf").innerHTML="Rio de Janeiro";
            }
            else{
                if (ddd == 32){
                    document.getElementById("uf").innerHTML="Juiz de Fora";
                }
                else{
                    if (ddd == 19){
                        document.getElementById("uf").innerHTML="Campinas";
                    }
                    else{
                        if (ddd == 27){
                            document.getElementById("uf").innerHTML="Vitoria";
                        }
                        else{
                            if (ddd == 31){
                                document.getElementById("uf").innerHTML="Belo Horizonte";
                            }
                            else{
                                document.getElementById("uf").innerHTML="DDD Desconhecido";
                            }
                        }
                    }
                }
            }
        }
    }
}*/