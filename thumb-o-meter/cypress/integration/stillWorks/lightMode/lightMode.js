function lightMode() {
  describe("Changing to light mode", () => {
    it("Get the button that controls light mode and clicks it", () => {
      //changes to light mode
      // cy.wait(1000);
      cy.get("button")
        .should("have.class", "chakra-button css-14g9kwn")
        .eq(0)
        .click();
      cy.wait(1000);
    });
  });
}

export default lightMode;
