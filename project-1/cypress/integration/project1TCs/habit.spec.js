
/// <reference types="cypress"/>


describe("habit dashboard", () =>
{

    beforeEach(()=>
    {
        cy.visit("/habits")
    })
    
    it("should display modal when add button is clicked" ,() =>
    {
        cy.get("#habit-add-btn").contains("Add").click();
        cy.contains("Add a new habit").should("be.visible");
        
    })

    it("should display habit card when new habit is added" ,() =>
    {
        cy.get("#habit-add-btn").contains("Add").click();
        cy.get('.form-control').type('Reading the books');
        cy.contains("[type='button']","Save Changes").click();
        cy.contains("Reading the books").should("be.visible").and("have.class","HabitCard__habit-container");

    })

    it("should toggle icon when habit card is clicked" ,() =>
    {
        cy.get("#habit-add-btn").click();
        cy.get('.form-control').type('Reading the books');
        cy.contains("[type='button']","Save Changes").click();
        //assertion
        cy.get("[src='/static/media/close.fa7e5ead.svg']").should('be.visible');
        //assertion
        cy.contains("Reading the books").click();
        cy.get("[src='/static/media/check.9e8832df.svg']").should('be.visible');

    })
})