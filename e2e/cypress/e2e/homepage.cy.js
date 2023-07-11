describe('Homepage', () => {
  it('shuould load successfully', () => {
    cy.visit('/');
  });

  it('should contain right spelled texts', () => {
    cy.visit('/');
    cy.contains('Users');
    cy.contains('Admin');
    cy.contains('login');
    cy.get('mat-select').click();
    cy.contains('Register');
  });
});
