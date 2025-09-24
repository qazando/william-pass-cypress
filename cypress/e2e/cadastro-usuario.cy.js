/// <reference types="cypress" />

import { faker } from "@faker-js/faker";
// const home_page = require("../support/pages/home_page");
// const cadastro_page = require("../support/pages/cadastro_page");

describe("Cadastro de usuário", () => {
  beforeEach(() => {
    cy.visit("/register");
  });

  it.only("Cadastro de usuário acessando pela home", () => {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();

    cy.acessarAplicacao();
    cy.acessarCadastro();

    cy.preencherNome(firstName, lastName);
    cy.preencherEmail(firstName, lastName);
    cy.preencherSenha(8);
    cy.registrar();
    cy.validarCadastroSucesso(firstName, lastName);
  });

  it("Cadastro de usuário com sucesso", () => {
    const name = faker.person.fullName();

    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();

    cy.get("#user").type(`${firstName} ${lastName}`);
    cy.get("#email").type(
      faker.internet.email({
        firstName: firstName.toLowerCase(),
        lastName: lastName.toLocaleLowerCase(),
        provider: "gmail.com",
      })
    );
    cy.get("#password").type(faker.internet.password({ length: 8 }));
    cy.get("#btnRegister").click();

    cy.get("#swal2-title").should("have.text", "Cadastro realizado!");

    cy.get("#swal2-html-container").should(
      "have.text",
      "Bem-vindo " + `${firstName} ${lastName}`
    );
    
  });

  it("Cadastro de usuário com sucesso 2", () => {
    const firstName = "Automação";
    const lastName = Math.floor(Math.random() * 999);

    cy.get("#user").type(`${firstName}${lastName}`);
    cy.get("#email").type(`automacao${lastName}@minhaempresa.com`);
    cy.get("#password").type(faker.internet.password({ length: 8 }));
    cy.get("#btnRegister").click();

    cy.get("#swal2-title").should("have.text", "Cadastro realizado!");

    cy.get("#swal2-html-container").should(
      "have.text",
      "Bem-vindo " + `${firstName}${lastName}`
    );
  });

  it("Cadastro de usuário com nome vazio", () => {
    cy.get("#email").type(`automacao@minhaempresa.com`);
    cy.get("#password").type(faker.internet.password({ length: 8 }));
    cy.get("#btnRegister").click();
    cy.get("#errorMessageFirstName").should(
      "have.text",
      "O campo nome deve ser prenchido"
    );
  });

  it("Cadastro de usuário com email vazio", () => {
    const name = faker.person.fullName();

    cy.get("#user").type(name);
    cy.get("#password").type(faker.internet.password({ length: 8 }));
    cy.get("#btnRegister").click();
    cy.get("#errorMessageFirstName").should(
      "have.text",
      "O campo e-mail deve ser prenchido corretamente"
    );
  });

  it("Cadastro de usuário com email inválido", () => {
    const name = faker.person.fullName();

    cy.get("#user").type(name);
    cy.get("#email").type("automacao");
    cy.get("#password").type(faker.internet.password({ length: 8 }));
    cy.get("#btnRegister").click();
    cy.get("#errorMessageFirstName").should(
      "have.text",
      "O campo e-mail deve ser prenchido corretamente"
    );
  });

  it("Cadastro de usuário com senha vazia", () => {
    const name = faker.person.fullName();

    cy.get("#user").type(name);
    cy.get("#email").type(`automacao@minhaempresa.com`);
    cy.get("#btnRegister").click();
    cy.get("#errorMessageFirstName").should(
      "have.text",
      "O campo senha deve ter pelo menos 6 dígitos"
    );
  });

  it("Cadastro de usuário com senha menor que 6 digitos", () => {
    const name = faker.person.fullName();

    cy.get("#user").type(name);
    cy.get("#email").type(`automacao@minhaempresa.com`);
    cy.preencherSenha(4);
    cy.get("#btnRegister").click();
    cy.get("#errorMessageFirstName").should(
      "have.text",
      "O campo senha deve ter pelo menos 6 dígitos"
    );
  });
});
