//check hand feature on feature menu

function checkingForHandFeature() {
  describe("Checking feature menu of app for Raise A Hand and navigating to page", () => {
    it("Check for Raise A Hand heading under icon by p tag and contains correct text", () => {
      cy.wait(1500);
      cy.get("section")
        .eq(1)
        .find("p")
        .should("have.id", "theHand")
        .contains("Raise a Hand");
    });

    it("Get the raise a hand link and click the link", () => {
      cy.wait(1500);
      cy.get("section").eq(1).find("a").click();
    });

    it("Get heading on Raise A Hand page and confirm has 'Raise Hand' as text", () => {
      cy.wait(1000);
      cy.get("h2")
        .should(
          "have.class",
          "chakra-heading heading_container__2B5Og css-zey6tx"
        )
        .contains("Raise Hand");
    });
  });
}

export default checkingForHandFeature;
