/// <reference types="cypress"/>


describe("Locators", () =>

{
 beforeEach(()=>
 {

    cy.visit("/elements");

 })

 it("locating elements with the get",()=> 
 {  // Get all the elements by tag name
    cy.get("button");

    //Get all the elements by class name
    cy.get(".btn-with-class");

    //Get all the elements with specific class
    cy.get("[class='Elements-btn btn-with-class more-btn-classes'")
    cy.get("[class='Elements-btn btn-with-class'")

    //Get all the elements by id
    cy.get("#btn-with-id")
    cy.get("[id='btn-with-id']")

    //Get all the elements by specific attribute
    cy.get("[type='submit']")

    //Get all the buttons by tag name and class
    cy.get("button.Elements-btn")

    //Get all elements by the tag name AND class AND id
    cy.get("button.Elements-btn#btn-with-id")

    //Get all elements by the tag name AND class AND type attribute
    cy.get("button.Elements-btn[type='submit']");

    //Get all elements with specific data test id

     cy.get("[data-cy='btn-id-1']")
   //  cy.getByTestId("btn-id-1");

 })

 it("locating elements with the contain",()=> 
 {
    // Get element by text
    cy.contains("Unique Text");

    // Get element by text when text is not Unique
    
    cy.contains("Not Unique Text")

    //With Selector
    cy.contains("[type='submit']","Not Unique Text")
    cy.contains("form","Not Unique Text")

    // combning the get and contain
    cy.get("[type='submit']").contains("Not Unique Text");

 })

 it("locating elements with the find",()=> 
 {
    // Get element by text
    cy.get("#form-1").find(".btn-1");
    cy.get("#form-1").find(".btn-2");

 })

})

