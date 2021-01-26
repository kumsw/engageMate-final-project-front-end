//check quiz feature on feature menu

function checkingForQuizFeature() {
  describe("Checking feature menu of app for Live Quiz", () => {
    it("Check for live quiz heading under icon by p tag and contains correct text", () => {
      cy.wait(1500);
      cy.get("section")
        .eq(2)
        .find("p")
        .should("have.id", "theQuiz")
        .contains("Live Quiz");
    });

    it("Get the live quiz link and click the link", () => {
      cy.wait(1500);
      cy.get("section").eq(2).find("a").click();
    });

    it("Get heading on live quiz page and confirm has 'Live Quiz' as text", () => {
      cy.wait(1000);
      cy.get("h2")
        .should(
          "have.class",
          "chakra-heading heading_container__2B5Og css-zey6tx"
        )
        .contains("Live Quiz");
    });
  });
}

export default checkingForQuizFeature;
