describe("general app test", () => {
  it("should have the title 'Multi-step Register Form'", () => {
    cy.visit("/");

    cy.title().should("eq", "Multi-step Register Form");
  });

  it("should display a form with inputs for the name and the email", () => {
    cy.visit("/");

    cy.get("form").should("exist");
    cy.get("input[name=name]").should("exist");
    cy.get("input[name=email]").should("exist");
  });
});
