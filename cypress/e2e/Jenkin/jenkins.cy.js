describe("Tests for Jenkins Practice", function () {
  it("Mochawsome", function () {
    cy.visit("https://app-traxidy.thedemo.co/login/");
    cy.get('[placeholder="Email Address"]').type("aram.zahedi@247labs.com");
    cy.get('[type="password"]').type("123456");
    cy.get('[type="submit"]').click();
  });
});
