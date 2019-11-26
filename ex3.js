var salMin = prompt("Digite o valor do Salário Mínimo");
var qtdeKw = prompt("Digite a quantidade de Kw");

var valorKw = salMin/700;
var valorTotal = qtdeKw*valorKw;
var valorDesconto = 0.90*valorTotal;

document.write("Valor de 1 Kw: R$ "+ valorKw + "</br>");
document.write("Valor total da conta: R$ "+ valorTotal + "</br>");
document.write("Valor com 10% de desconto: R$ "+ valorDesconto + "</br>");

console.log("Valor de 1 Kw: R$ "+ valorKw);
console.log("Valor total da conta: R$ "+ valorTotal);
console.log("Valor com 10% de desconto: R$ "+ valorDesconto);

alert("Valor de 1 Kw: R$ " + valorKw);
alert("Valor total da conta: R$ "+ valorTotal);
alert("Valor com 10% de desconto: R$ "+ valorDesconto);
