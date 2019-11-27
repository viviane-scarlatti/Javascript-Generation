function calcularImposto(){

    var salario = document.getElementById("salario").value;
    //console.log("Salario digitado = " +salario);
    var imposto;

if (salario < 1000) {
    imposto = 0;
    //console.log("Isento de impostos");
}
else {
    if (salario >= 1000 && salario < 2500) {
        imposto = 0.125*salario;
        //console.log("1a faixa de imposto (12.5 %) = R$ " + imposto);

    }
    else {
        if (salario > 2500 && salario < 5000) {
           salario = 0.25*salario;
           //console.log("2a faixa de imposto (0.25 %) = R$ " + imposto);

        }
        else {
               imposto = 1300;
               //console.log("3a faixa de imposto = R$ " + imposto);
            }
        }
    }
    return imposto;
}

function totalizarEExibir() {
    var salarioBruto = document.getElementById("salario").value;
    console.log("salario bruto obtido = "+salarioBruto);
    var imposto = calcularImposto();
    console.log("Imposto devido  = "+imposto);
    var salarioLiquido = salarioBruto - imposto;
    document.getElementById("resultado").innerHTML = "Imposto Devido: R$ " +imposto+ "<br/>" + "Salario Liquido: R$ " + salarioLiquido+"<br/>";
}