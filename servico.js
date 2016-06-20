'use strict';



function executa(query, callback) {
  return callback();
};

function adiciona(query, banco) {
  return banco.usuarioExiste();
}

module.exports = {
  executa: executa,
  adiciona: adiciona
}