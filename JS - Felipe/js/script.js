alert("Óla, seja bem-vindo!!"); // primeira saída // 
nome = prompt("Digite seu nome");
idade = parseInt(prompt("Digite sua idade"));
altura = parseFloat(prompt("Digite sua altura"));
fuma = prompt("Você fuma?");

document.write(`Óla ${nome}, você tem ${idade} anos e tem ${altura} de altura. <br> 
fuma? : ${fuma} <br>`);  // segunda saída //


n1 = parseInt(prompt('Digite um número'));
n2 = parseInt(prompt('Digite outro número'));
document.write(`O dobro de ${n1} é ${2*n1} <br>`);
document.write(`A soma de ${n1} + ${n2} é ${n1+n2} <br>`);

let num = 9;
document.write(`antecessor de ${n1} é ${n1 - 1} <br>`)
document.write(`susesor de ${n1} é ${n1 + 1}`)

console.log(`${nome}`); // Terceira saída //

document.getElementById("h1") .innerHTML="JavaScript"; // Quarta saída //