const valorConta = 100;
const percentGorjeta = 15;

const valorGorjeta = valorConta * (percentGorjeta / 100);
const valorTotal = valorGorjeta + valorConta;

console.log(
  "Valor da conta: " +
    valorConta +
    ". Valor gorjeta (15%): " +
    valorGorjeta +
    ". Total a pagar: " +
    valorTotal,
);
