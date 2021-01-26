function darkMode() {
  describe("Demonstrating changing to dark mode", () => {
    it("Get the button that controls dark mode and clicks it", () => {
      //changing to dark mode
      // cy.wait(1000);
      cy.get("button")
        .should("have.class", "chakra-button css-j47tpi")
        .eq(0)
        .click();
      // cy.wait(1000);
    });
  });
}

export default darkMode;
