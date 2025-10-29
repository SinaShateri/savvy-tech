/// <reference types="cypress" />

describe('Home page e2e flows', () => {
  beforeEach(() => {
    // ensure a clean slate for the persisted Zustand store
    cy.clearLocalStorage();
    cy.visit('/');
    // cy.wait(3000);
  });

  it('creates, edits and deletes an item', () => {
    // Open create modal
    cy.contains('Create New Item').click();

    // Fill and submit
    cy.get('input[placeholder="Enter title"]').type('Test Item');
    cy.get('input[placeholder="Enter subtitle"]').type('Test subtitle');
    cy.get('button[type="submit"]').contains('Create').click();

    // The new item should appear
    cy.contains('Test Item').should('exist');
    cy.contains('Test subtitle').should('exist');

    // Open edit modal for that item
    cy.contains('Test Item')
      .closest('.group')
      .within(() => {
        cy.contains('Edit').click();
      });

    // Edit modal should prefill the inputs
    cy.get('input[placeholder="Enter title"]').should(
      'have.value',
      'Test Item'
    );
    cy.get('input[placeholder="Enter title"]').clear().type('Updated Item');

    // Submit edit (edit modal uses a submit button)
    cy.get('button[type="submit"]').contains('Edit').click();

    // New title visible, old title gone
    cy.contains('Updated Item').should('exist');
    cy.contains('Test Item').should('not.exist');

    // Open delete modal and confirm deletion
    cy.contains('Updated Item')
      .closest('.group')
      .within(() => {
        cy.contains('Delete').click();
      });

    // Confirm delete inside modal
    cy.get('.mantine-Modal-body').contains('Delete').click();

    cy.contains('Updated Item').should('not.exist');
  });
});
