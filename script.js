var numero;
numero = prompt("Digite qualquer número entre 10 e 100, por favor!");

if((numero<10) || (numero>100)){
  alert("Valor indisponível... Por favor, insira outro valor!")
}
else{
  for(contador=1; contador<=numero; contador++){
    document.write(contador + "<br>")
  }
}
