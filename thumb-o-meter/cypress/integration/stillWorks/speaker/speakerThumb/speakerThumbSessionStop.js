function speakerStopThumbSession() {
  describe("Check for stop timer button", () => {
    it("Get stop timer button, confirm has correct text and clicks it", () => {
      cy.wait(1000);
      cy.get("div")
        .should("have.class", "skView_container__8oHCA")
        .get("div")
        .should("have.class", "css-gmuwbf")
        .get("div")
        .should("have.class", "skView_container__8oHCA")
        .get("div")
        .should("have.class", "skView_buttons__1X2Y_")
        .get("button")
        .should("have.class", "chakra-button skView_button__1AOqf css-mdlog5")
        .contains("Stop Timer")
        .click();
      cy.wait(2000);
    });
  });
}

export default speakerStopThumbSession;
