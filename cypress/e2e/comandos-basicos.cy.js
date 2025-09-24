/// <reference types="cypress" />

describe("Comandos básicos", () => {
  it("Acessar uma aplicação", () => {
    cy.visit("https://automationpratice.com.br/login");
  });

  it("Selecionar elementos", () => {
    cy.visit("https://automationpratice.com.br/login");

    // get() - selecionar um elemento
    cy.get("#user");

    // find() - ele vai selecionar um elemento
    // diminuimos o escopo com o get antes
    cy.get("#mc_embed_signup").find(".form-control");

    // contains() - ele vai selecionar um elemento por TEXTO!
    // diminuimos o escopo com o get antes
    cy.get(".footer_one_widget").contains(" Send Mail");
  });

  it("Preencher campo", () => {
    cy.visit("https://automationpratice.com.br/login");

    cy.get("#user").type("eduardo@gmail.com");
    cy.get("#password").type("122355");

    cy.get(".footer_one_widget")
      .contains(" Send Mail")
      .type("eduardo@gmail.com{enter}");
  });

  it("Clicar num elemento", () => {
    cy.visit("https://automationpratice.com.br/login");

    cy.get("#user").type("eduardo@gmail.com");
    cy.get("#password").type("122355");
    cy.get("#btnLogin").click();

    // click por cordenada
    // cy.get('.payment_method').click(180, 80)
  });

  it("Select", () => {
    cy.visit("https://automationpratice.com.br/checkout-one");

    cy.get("#country").select("Afghanistan");
  });

  it("Checkbox/Radio", () => {
    cy.visit("https://automationpratice.com.br/checkout-one");

    cy.get("#materialUnchecked").check();

    cy.get("#materialUnchecked").uncheck();

    cy.get("#css").check();
  });

  it.only("Validar texto", () => {
    cy.visit("https://automationpratice.com.br/login");

    cy.get("#createAccount")
      .should("contain", "Ainda não tem conta?")
      .should("be.visible");
  });
});
