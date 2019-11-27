var N = prompt("Digite um valor inteiro: ");


for(valor=1; valor<=N; valor++) {
    if(valor % 2 == 0)
    {
       document.write(valor + " ^2 = " + (valor*valor) + "<br/>" );
}
}