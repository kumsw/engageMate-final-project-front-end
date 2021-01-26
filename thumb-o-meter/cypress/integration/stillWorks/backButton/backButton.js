//back button pressed to get to feature menu

function backButton() {
  describe("Pressing back button to get to feature menu", () => {
    it("Get the back button, confirms has correct text and clicks it", () => {
      cy.get("a").find("button").contains("Back").click();
    });
  });
}

export default backButton;
