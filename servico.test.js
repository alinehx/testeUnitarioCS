'use strict';

var chai = require('chai'),   
  sinon = require('sinon'),
  servico = require('./servico');

chai.should();

describe('Teste Servico', function () {

  it('Deve chamar o callback do metodo executa - spy', function () {
  	
    var spy = sinon.spy();
    servico.executa('query', spy);
    spy.called.should.be.true;

  });

  it('Deve chamar o metodo adiciona e retornar falso', function () {
    
    var banco = {
      usuarioExiste: function () {
        return true;
      }
    };

  	var stub = sinon.stub(banco);
  	stub.usuarioExiste.returns(false);

  	var resultado = servico.adiciona('query', stub);
  	resultado.should.be.false;

  });

  it('Deve chamar o metodo usuarioExiste', function () {
    var banco = {
      usuarioExiste: function () {
        return true;
      }
    };

    var mockObjeto = sinon.mock(banco);

    var expectativa = mockObjeto.expects('usuarioExiste').once();

    servico.adiciona('query', banco);

    expectativa.verify();
  });

});


