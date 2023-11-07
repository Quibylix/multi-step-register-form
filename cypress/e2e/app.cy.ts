describe("general app test", () => {
  it("should have the title 'Multi-step Register Form'", () => {
    cy.visit("/");

    cy.title().should("eq", "Multi-step Register Form");
  });
});
