describe("Central de Atendimento ao Cliente TAT", () => {
  beforeEach(() => {
    cy.visit("./src/index.html");
  });

  it("verifica o título da aplicação", () => {
    cy.title().should("eq", "Central de Atendimento ao Cliente TAT");
  });

  it("preenche os campos obrigatórios e envia o formulário", () => {
    cy.clock();
    cy.get("#firstName").type("João");
    cy.get("#lastName").type("Pedro");
    cy.get("#email").type("joaopedro@gmail.com");
    cy.get("#phone").type("11999999999");
    cy.get("#open-text-area").type(
      "Texto longo o suficiente para preencher o campo de texto da aplicação.",
      { delay: 0 },
    );
    cy.contains("button", "Enviar").click();
    cy.get(".success").should("be.visible");

    cy.tick(3000);
    cy.get(".success").should("not.be.visible");
  });

  it("exibe mensagem de erro ao submeter o formulário com um email com formatação inválida", () => {
    cy.get("#firstName").type("João");
    cy.get("#lastName").type("Pedro");
    cy.get("#email").type("joaopedro@gmail,com");
    cy.get("#phone").type("11999999999");
    cy.get("#open-text-area").type(
      "Texto longo o suficiente para preencher o campo de texto da aplicação.",
      { delay: 0 },
    );
    cy.contains("button", "Enviar").click();

    cy.get(".error").should("be.visible");
  });

  it("preenche o campo telefone com valor não-numérico e confirma que o mesmo continua vazio", () => {
    cy.get("#phone").type("valor não-numérico");
    cy.get("#phone").should("have.value", "");
  });

  it("exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário", () => {
    cy.get("#firstName").type("João");
    cy.get("#lastName").type("Pedro");
    cy.get("#email").type("joaopedro@gmail.com");
    cy.get("#open-text-area").type(
      "Texto longo o suficiente para preencher o campo de texto da aplicação.",
      { delay: 0 },
    );
    cy.get("#phone-checkbox").check();
    cy.contains("button", "Enviar").click();
    cy.get(".error").should("be.visible");
  });

  it("preenche e limpa os campos nome, sobrenome, email e telefone", () => {
    cy.get("#firstName").type("João").should("have.value", "João");
    cy.get("#lastName").type("Pedro").should("have.value", "Pedro");
    cy.get("#email")
      .type("joaopedro@gmail.com")
      .should("have.value", "joaopedro@gmail.com");
    cy.get("#phone").type("11999999999").should("have.value", "11999999999");
    cy.get("#firstName").clear().should("have.value", "");
    cy.get("#lastName").clear().should("have.value", "");
    cy.get("#email").clear().should("have.value", "");
    cy.get("#phone").clear().should("have.value", "");
  });

  it("exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios", () => {
    cy.clock();
    cy.contains("button", "Enviar").click();
    cy.get(".error").should("be.visible");
    cy.tick(3000);
    cy.get(".error").should("not.be.visible");
  });

  it("envia o formuário com sucesso usando um comando customizado", () => {
    cy.clock();
    const data = {
      firstName: "João",
      lastName: "Pedro",
      email: "joaopedro@gmail.com",
      phone: "11999999999",
      text: "Texto longo o suficiente para preencher o campo de texto da aplicação.",
    };

    cy.fillMandatoryFieldsAndSubmit(data);

    cy.get(".success").should("be.visible");
    cy.tick(3000);
    cy.get(".success").should("not.be.visible");
  });

  it("seleciona um produto (YouTube) por seu texto", () => {
    cy.get("#product").select("youtube").should("have.value", "youtube");
  });

  it("seleciona um produto (Mentoria) por seu valor (value)", () => {
    cy.get("#product").select("mentoria").should("have.value", "mentoria");
  });

  it("seleciona um produto (Blog) por seu índice", () => {
    cy.get("#product").select(1).should("have.value", "blog");
  });

  it("marca cada tipo de atendimento", () => {
    cy.get('input[type="radio"]').each((typeOfService) => {
      cy.wrap(typeOfService).check().should("be.checked");
    });
  });

  it("marca ambos checkboxes, depois desmarca o último", () => {
    cy.get('input[type="checkbox"]')
      .check()
      .should("be.checked")
      .last()
      .uncheck()
      .should("not.be.checked");
  });

  it("seleciona um arquivo da pasta fixtures", () => {
    cy.get("#file-upload")
      .selectFile("cypress/fixtures/example.json")
      .should((input) => {
        expect(input[0].files[0].name).to.equal("example.json");
      });
  });

  it("seleciona um arquivo simulando um drag-and-drop", () => {
    cy.get("#file-upload")
      .selectFile("cypress/fixtures/example.json", { action: "drag-drop" })
      .should((input) => {
        expect(input[0].files[0].name).to.equal("example.json");
      });
  });

  it("seleciona um arquivo utilizando uma fixture para a qual foi dada um alias", () => {
    cy.fixture("example.json").as("sampleFile");
    cy.get("#file-upload")
      .selectFile('@sampleFile')
      .should((input) => {
        expect(input[0].files[0].name).to.equal("example.json");
      });
  });

  it("verifica que a política de privacidade abre em outra aba sem a necessidade de um clique", () => {
    cy.contains('a', 'Política de Privacidade').should('have.attr', 'href', 'privacy.html').and('have.attr', 'target', '_blank');
  });
  
    it("acessa a página da política de privacidade removendo o target e então clicando no link", () => {
    cy.contains('a', 'Política de Privacidade').invoke('removeAttr', 'target').click();
    cy.contains('h1', 'Política de Privacidade').should('be.visible');
  });

  it('exibe e oculta as mensagens de sucesso e erro usando .invoke()', () => {
  cy.get('.success')
    .should('not.be.visible')
    .invoke('show')
    .should('be.visible')
    .and('contain', 'Mensagem enviada com sucesso.')
    .invoke('hide')
    .should('not.be.visible')
  cy.get('.error')
    .should('not.be.visible')
    .invoke('show')
    .should('be.visible')
    .and('contain', 'Valide os campos obrigatórios!')
    .invoke('hide')
    .should('not.be.visible')
})

    it('preenche o campo da área de texto usando o comando invoke', () => {
      cy.get('#firstName').invoke('val', 'Texto usando invoke').should('have.value', 'Texto usando invoke');
    })
   
    it('faz uma requisição HTTP', () => {
      cy.request('https://cac-tat-v3.s3.eu-central-1.amazonaws.com/index.html').as('getRequest').its('status').should('eq', 200);
      cy.get('@getRequest').its('statusText').should('eq', 'OK');
      cy.get('@getRequest').its('body').should('include', 'CAC TAT');
    })

    it('encontra o gato escondido', () => {
      cy.get('#cat').invoke('show').should('be.visible');
      cy.get('#title').invoke('text', 'CAT TAT').should('have.text', 'CAT TAT');
      cy.get('#subtitle').invoke('text', 'Eu amo gatos').should('have.text', 'Eu amo gatos');
    })
  
});
