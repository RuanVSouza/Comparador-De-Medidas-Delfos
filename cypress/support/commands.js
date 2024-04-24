//Comando personalizado para saber a maior temperatura
Cypress.Commands.add('GetTemperatura', () => {
  cy.get('.w-now > big').then(($temp) => {
    //Criando numero randomico
    var tempParamMax = 26
    var tempParamMin = 20
    let parametro = Math.floor(Math.random() * (tempParamMax - tempParamMin) + tempParamMax)
    // Obter o conteúdo textual do elemento
    const temperaturaString = $temp.text();
    // Remover o símbolo de grau usando Regex
    const retirandoEspecial = temperaturaString.replace(/°|º/g, "");
    //Transformando a string em numero para não haver problemas com utilizações futuras
    const temperaturaNumero = parseFloat(retirandoEspecial);
    //Desobrindo quem é a maior temperatura com base no parametro(numero random) e a temperatura extraida do site
    cy.verificarMaior(temperaturaNumero, parametro, "Temperatura")
  })
})

//Comando personalizado para saber a maior energia
Cypress.Commands.add('GetEnergiaKT',() => {
  cy.get('.ws-wind').then(($energia) => {
    //Criando numero randomico
    var tempParamMax = 5
    var tempParamMin = 3
    let parametro = Math.floor(Math.random() * (tempParamMax - tempParamMin) + tempParamMax)
    const energiaString = $energia.text();
    const retirandoCaracteres = energiaString.replace(/"/, '').replace(/kt/g, "")
    const energiaNumero = parseFloat(retirandoCaracteres)
    cy.verificarMaior(energiaNumero, parametro, "Energia")
  });
})

/**
 * @description Comparador de medidas com 2 parâmetros a serem comparados e 1 unidade de medida(string)
 * @param {number} x - Primeiro parâmetro (utilizado para retornar os valores do Windy)
 * @param {number} y - Segundo parâmetro (utilizado para retornar os valores randômicos solicitados)
 * @param {string} z - Terceiro parâmetro (utilizado como string para diferenciar as unidades de medida e tornar reutilizável)
 * 
 */
Cypress.Commands.add('verificarMaior', (x, y, z) => {
  if(x > y) {
    cy.log("CASO 1 (" + z + " Windy maior): " + z + " Windy: " + x + " |||| " + z + " do parametro era: " + y);
  }else if( x < y){
    cy.log("Caso 2 (" + z + " randomica maior): "+ z + " Parametro: " + y + " ||||" + z + " Windy era: " + x);
  } else{
    cy.log("As "+ z + "s são iguais.,"+ z + " do Windy: " + x + " |||| "+ z + " do parametro: " + y);
  }
})
