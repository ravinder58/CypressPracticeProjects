/// <reference types="cypress"/>

describe("Accomplishment Dashboard", () =>
{

    beforeEach(()=>
    {
        cy.visit("/accomplishments")
    })

    it("should showcase error if information is missing", ()=>
    {
         cy.get(".Accomplishment-input").type("My Basketball accomplishment")
         cy.get("[data-cy='accomplishment-input']").type("I made 10 six pointers in a row ")
         cy.contains("Submit Accomplishment").click();
         //assertion
         cy.get(".Accomplishment-error-container").should('have.text','Complete the items above to continue');
    })

    it("should display validation component if all infomation is input", ()=>
    {
         cy.get(".Accomplishment-input").type("My Basketball accomplishment")
         cy.get("[data-cy='accomplishment-input']").type("I made 10 six pointers in a row ")
         cy.get("[type='checkbox']").click();
         cy.contains("Submit Accomplishment").click();
         //assertion
         cy.contains('This Accomplisment was Successfully Submitted').should('be.visible');
    })

    it("should verify the Goback button functionality", ()=>
    {
   
        cy.get(".Accomplishment-input").type("My Basketball accomplishment")
         cy.get("[data-cy='accomplishment-input']").type("I made 10 six pointers in a row ")
         cy.get("[type='checkbox']").click();
         cy.contains("Submit Accomplishment").click();
         cy.contains("Go Back").click();
         cy.contains('h2','Accomplishment').should('be.visible');
         cy.get(".Accomplishment-input").should('be.empty')
         cy.get("[data-cy='accomplishment-input']").should('have.value',"")
         cy.get("[type='checkbox']").should('not.be.checked');
        


    })






})
