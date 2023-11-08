describe("general app test", () => {
  it("should have the title 'Multi-step Register Form'", () => {
    cy.visit("/");

    cy.title().should("eq", "Multi-step Register Form");
  });

  it("should display a form with inputs for the name and the email", () => {
    cy.visit("/");

    cy.get("form[data-cy='step-1-form'").should("exist");
    cy.get("input[name=name]").should("exist");
    cy.get("input[name=email]").should("exist");
  });

  it("should display the second form when the first form is submitted", () => {
    cy.visit("/");

    cy.get("input[name=name]").should("exist");
    cy.get("input[name=email]").should("exist");

    cy.get("form[data-cy='step-1-form'").submit();

    cy.get("form[data-cy='step-1-form'").should("have.css", "display", "none");
    cy.get("form[data-cy='step-2-form'").should("have.css", "display", "block");
  });

  it("should display some options for the user to select in the second form", () => {
    cy.visit("/");

    cy.get("form[data-cy='step-1-form'").submit();

    cy.get("form[data-cy='step-2-form'").should("exist");
    cy.get("label[data-cy='step-2-form__label']").should("have.length", 3);
  });
});
