describe("Todo test!", () => {
  beforeEach("Port should be 3000", () => {
    cy.visit("/");
  });

  it("Todo should be Title: inside h1 tag having class as title", () => {
    cy.get("h1.title").contains("Todo...");
  });

  it("Input box should be there to accept Title with class as inputTitle", () => {
    cy.get("input.inputTitle").should("exist");
  });

  it('Second Input box should have a placeholder "Add Task..."', () => {
    cy.get("input.inputBody").should("have.attr", "placeholder", "Add Task...");
  });

  it("Input box should be there to accept task with class as inputBody", () => {
    cy.get("input.inputBody").should("exist");
  });

  it("Add button should have text ADD", () => {
    cy.get(".addBtn").should("have.text", "Add");
  });

  it("Add button should have color as rgb(255, 255, 255);", () => {
    cy.get(".addBtn").should("have.css", "color", "rgb(255, 255, 255)");
  });

  it('should render the todo list inside div having classname as "todoItem"', () => {
    cy.get(".container").should("exist");
  });

  it("Typing to the Title: input box shouls work correctly", () => {
    const text = "Testing";
    cy.get(".inputTitle").type(text).should("have.value", text);
  });

  it("Typing to the Task: input box shouls work correctly", () => {
    const text = "Aditya";
    cy.get(".inputBody").type(text).should("have.value", text);
  });
  it("Pagination button should have text Prev", () => {
    cy.get(".prev").should("have.text", "Prev");
  });
});
