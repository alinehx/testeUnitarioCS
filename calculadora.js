'use strict';

function validaEntradaNumero(numero1, numero2) {
  if( isNaN(numero1) || isNaN(numero2) ) {
    return false;
  }
  return true;
}

function soma (numero1, numero2) {
  if( validaEntradaNumero(numero1, numero2) ) {
    return numero1 + numero2;
  }
  return 0;
}

function subtracao(numero1, numero2) {
  if ( validaEntradaNumero(numero1, numero2) ) {
    return numero1 - numero2;
  }
  return 0;
}

function divisao(numero1, numero2) {
	if( validaEntradaNumero(numero1, numero2) && numero2 !==0) {
      return numero1 / numero2;
	}
	return 0;
}

function multiplicacao(numero1, numero2) {
  if ( validaEntradaNumero (numero1, numero2)) {
    return numero1 * numero2;
  }
  return 0;
}




function calculadora(operacao, numero1, numero2) {
  switch (operacao) {
    case '+':      
      return soma(numero1, numero2);    
    case '-':
      return subtracao(numero1, numero2);     
    case '*': 
      return multiplicacao(numero1, numero2);      
    case '/':
      return divisao(numero1, numero2);      
    default:
      return 'Operação não encontrada';
  }
}


module.exports = {
  calculadora:calculadora
}





