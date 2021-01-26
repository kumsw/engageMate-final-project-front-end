//speaker setting a seesion on thumbometer page

function speakerThumbSession() {
  //get question dropdown
  describe("Check for question dropdown", () => {
    it("Get question drop down", () => {
      cy.wait(1000);
      cy.get("div")
        .should("have.class", "skView_container__8oHCA")
        .get("div")
        .should("have.class", "chakra-select__wrapper css-42b2qy")
        .eq(0);
      cy.get("select")
        .should("have.class", "chakra-select skView_select__39swe css-ts6fv")
        .eq(0);
      cy.get("option").eq(0).contains("Select Question");
    });

    it("Setting a custom question", () => {
      //set custom question
      cy.get("div")
        .should("have.class", "skView_container__8oHCA")
        .get("div")
        .should("have.class", "chakra-select__wrapper css-42b2qy")
        .eq(0);
      cy.get("select")
        .should("have.class", "chakra-select skView_select__39swe css-ts6fv")
        .eq(0)
        .select("Set a custom question.")
        .should("have.value", "custom");
      cy.get("input")
        .should("have.class", "chakra-input css-1kzfnz9")
        .eq(0)
        .type("Testing?");
      cy.wait(1000);
    });
  });

  //get custom timer and type in 100
  describe("Check for timer dropdown", () => {
    it("Get timer drop down", () => {
      cy.wait(1000);
      cy.get("div")
        .should("have.class", "skView_container__8oHCA")
        .get("div")
        .should("have.class", "chakra-select__wrapper css-42b2qy")
        .eq(1);
      cy.get("select")
        .should("have.class", "chakra-select skView_select__39swe css-ts6fv")
        .eq(1);
      cy.get("option").eq(5).contains("Timer Amount");
    });

    it("Setting a custom timer", () => {
      //trying to select timer
      cy.get("div")
        .should("have.class", "skView_container__8oHCA")
        .get("div")
        .should("have.class", "chakra-select__wrapper css-42b2qy")
        .eq(1);
      cy.get("select")
        .should("have.class", "chakra-select skView_select__39swe css-ts6fv")
        .eq(1)
        .select("Set a custom time.")
        .should("have.value", "custom");
      cy.get("input")
        .should("have.class", "chakra-input css-1kzfnz9")
        .eq(1)
        .type(100);
      cy.wait(1000);
    });
  });

  //get start timer button
  describe("Check for start timer button", () => {
    it("Get start timer button and click it", () => {
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
        .should("have.class", "chakra-button skView_button__1AOqf css-ywjnlx")
        .contains("Start Timer")
        .click();
      cy.wait(1000);
    });
  });
}

export default speakerThumbSession;
