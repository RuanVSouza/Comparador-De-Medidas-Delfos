/// 

describe('', () => {
    //Comparar temperaturas
    it('Verificar temperatura', () => {
        cy.visit("https://www.windy.com/?-3.711,-38.540,5")

        let Temperaturas = cy.GetTemperatura()
        //Para encontrar o resultado mais facilmente no meio dos logs
        cy.log("*******************************")
        cy.log("*******************************")
        cy.log("*******************************")
        cy.log("*******************************")
        cy.log("*******************************")
        cy.log("*******************************")
        cy.log("*******************************")
        cy.log("*******************************")
        cy.log("*******************************")
        cy.log("*******************************")
        cy.log("*******************************")
        cy.log("*******************************")
        cy.log("*******************************")
        cy.log("*******************************")
        cy.log("*******************************")
        cy.log("*******************************")
        cy.log("*******************************")
    });

    //Comparar Energias(Kv)
    it('Verificar Energia(Kv)', () => {
      cy.visit("https://www.windy.com/?-3.711,-38.540,5")
      let Temperaturas = cy.GetEnergiaKT()
      cy.log("*******************************")
      cy.log("*******************************")
      cy.log("*******************************")
      cy.log("*******************************")
      cy.log("*******************************")
      cy.log("*******************************")
      cy.log("*******************************")
      cy.log("*******************************")
      cy.log("*******************************")
      cy.log("*******************************")
      cy.log("*******************************")
      cy.log("*******************************")
      cy.log("*******************************")
      cy.log("*******************************")
      cy.log("*******************************")
      cy.log("*******************************")
  });
});
