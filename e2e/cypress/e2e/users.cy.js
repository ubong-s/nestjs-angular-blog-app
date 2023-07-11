describe('Users page', () => {
  it('should load user table', () => {
    cy.visit('/');
    cy.get('[routerlink="users"]').click();
    cy.get('[role="table"]');
  });

  it('should load display right column names', () => {
    cy.visit('/users');
    cy.contains('Id');
    cy.contains('Name');
    cy.contains('Email');
    cy.contains('Username');
  });

  it('should filter users by Username', () => {
    cy.visit('/users');
    cy.get('label').click().type('ubong');
    cy.get('[role="table"]').find('[role="row"]').should('have.length', 4);
  });
});
