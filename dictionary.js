/* 

  Cenário: Um jogo 2D.
    1 - Ao iniciar o jogo o usuário poderá movimentar o personagem.
    2 - Ao clicar nas setas do teclado (cima, baixo, lado direito, lado esquerdo) o personagem executa uma ação condizente.
    3 - Se o usuário não clicar em nenhuma tecla, o personagem deve permanecer parado.

  Problemática:
    Com base nesse cenário é necessário criar um código que mapeie o estado do personagem (se esta parada, para cima, baixo e etc).

*/

// Código muito ruim 🤮
var tecla_pressionada = 'cima'

// Para cada possibilidade é preciso criar uma condição.
if ( tecla_pressionada == 'cima' ) {
  console.log('Movendo para cima')
}
else if ( tecla_pressionada == 'baixo' ) {
  console.log('Movendo para baixo')
}
else if ( tecla_pressionada == 'lado_direito' ) {
  console.log('Movendo para lado direito')
}
else if ( tecla_pressionada == 'lado_esquerdo' ) {
  console.log('Movendo para lado esquerdo')
}
else {
  console.log('Parado')
}

// Código ruim 🤢
var tecla_pressionada = 'baixo'

// Para cada possibilidade é preciso criar uma condição.
switch (tecla_pressionada) {
  case 'cima':
    console.log('Movendo para cima')
    break

  case 'baixo':
    console.log('Movendo para baixo')
    break

  case 'lado_direito':
    console.log('Movendo para lado direito')
    break

  case 'lado_esquerdo':
    console.log('Movendo para lado esquerdo')
    break
}

/*
  ---- Eliminando várias verificações com o Dicionário ----

  Para utilizar o dicionário, basta criar um objeto com chave e valor

  Um objeto:
    
    const pessoa = {
      nome: 'Henrique',
      idade: 20
    }

  O que é chave e o que é valor?

    chave:
      nome

    valor:
      'Henrique'

  Cada chave do objeto leva a um valor. Podemos acessar os valores do objeto, chamando uma chave:
    pessoa['nome']
*/

// Código bom 😍

var tecla_pressionada = 'lado_direito'

// Cria um objeto com as possibilidates de teclas
const teclas = {
  cima: 'Movendo para cima',
  baixo: 'Movendo para baixo',
  lado_direito: 'Movendo para o lado direito',
  lado_esquerdo: 'Movendo para o lado esquerdo'
}

// Pede um valor de acordo com a tecla pressionada, se ele não achar retorna Parado
console.log(teclas[tecla_pressionada] || 'Parado') // Movendo para o lado direito

// Código muito bom 🥰

var tecla_pressionada = 'lado_esquerdo'

function retornaEstado(tecla) {
  return (
    {
      cima: 'Movendo para cima',
      baixo: 'Movendo para baixo',
      lado_direito: 'Movendo para o lado direito',
      lado_esquerdo: 'Movendo para o lado esquerdo'
    } [tecla] || 'Parado'
  )
}

console.log(retornaEstado(tecla_pressionada)) //Movendo para o lado esquerdo
