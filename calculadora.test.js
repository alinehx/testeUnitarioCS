'use strict';

var assert = require('assert'),
  calculadora = require('./calculadora');



describe('Teste arquivo calculadora', function () {
  
  it('Deve retornar Operação não encontrada, para operacao de mod, %', function (done) {
  	
  	var resultado = calculadora.calculadora('%', 9, 3);
    assert.deepEqual(resultado, 'Operação não encontrada');
    done();

  });



  describe('Teste metodo soma', function () {

    it('Deve retornar 8', function (done) {      
      var resultado = calculadora.calculadora('+', 5, 3);
      assert.deepEqual( resultado, 8);
      done();

    });

    it('Deve retornar 0, numero1 = A e numero2 = 3', function (done) {

      var resultado = calculadora.calculadora('+', 'A', 3);
      assert.deepEqual( resultado, 0);
      done();	

    });

    it('Deve retornar 0, numero1 = 4 e numero2 = B', function (done) {

      var resultado = calculadora.calculadora('+', 4, 'A');
      assert.deepEqual( resultado, 0);
      done();	
      
    });

  });

  describe('Teste metodo subtracao', function () {
    
    it('Deve retornar 1', function (done) {
     
      var resultado = calculadora.calculadora('-', 7, 6);
      assert.deepEqual( resultado, 1);
      done();

    });

    it('Deve retornar 0, numero1 = C e numero2 = 1', function (done) {

      var resultado = calculadora.calculadora('-', 'C', 1);
      assert.deepEqual( resultado, 0);
      done();	

    });

    it('Deve retornar 0, numero1 = 10 e numero2 = W', function (done) {

      var resultado = calculadora.calculadora('-', 10, 'W');
      assert.deepEqual( resultado, 0);
      done();	
      
    });

  });

  describe('Teste metodo divisao', function () {
    
    it('Deve retornar 7', function (done) {
      
      var resultado = calculadora.calculadora('/', 14, 2);
      assert.deepEqual( resultado, 7);
      done();

    });

    it('Deve retornar 0, numero1 = D e numero2 = 3', function (done) {

      var resultado = calculadora.calculadora('/', 'D', 3);
      assert.deepEqual( resultado, 0);
      done();	

    });

    it('Deve retornar 0, numero1 = 15 e numero2 = X', function (done) {

      var resultado = calculadora.calculadora('/', 15, 'X');
      assert.deepEqual( resultado, 0);
      done();	
      
    });

     it('Deve retornar 0, numero1 = 15 e numero2 = 0', function (done) {

      var resultado = calculadora.calculadora('/', 15, 0);
      assert.deepEqual( resultado, 0);
      done();	
      
    });


  });


  describe('Teste metodo multiplicacao', function () {
    
    it('Deve retornar 15', function (done) {
     
      var resultado = calculadora.calculadora('*', 5, 3);
      assert.deepEqual( resultado, 15);
      done();

    });


     it('Deve retornar 0, numero1 = M e numero2 = 1', function (done) {

      var resultado = calculadora.calculadora('*', 'M', 1);
      assert.deepEqual( resultado, 0);
      done();	

    });

    it('Deve retornar 0, numero1 = 3 e numero2 = Y', function (done) {

      var resultado = calculadora.calculadora('*', 3, 'Y');
      assert.deepEqual( resultado, 0);
      done();	
      
    });

  });






})