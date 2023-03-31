beforeEach(() => {
  cy.intercept('GET', 'https://newsapi.org/v2/**', {
    fixture: 'articles.json'
  });
  cy.visit('localhost:5173/');
});

describe('Index', () => {
  it('renders', () => {
    cy.get('.MuiTypography-h6').should('contain', 'gnNews');
  });
  it('opens the drawer', () => {
    cy.get('[data-testid="MenuIcon"').click();
    cy.get('.MuiDrawer-paper').should('be.visible');
  });
  it('filters the countries', () => {
    cy.get('[data-testid="MenuIcon"').click();
    cy.get('.MuiInputBase-input').type('united');
    cy.get('.MuiListItemText-primary').should('contain', 'United States');
  });
  it('should switch language', () => {
    cy.get('[data-testid="settings-button"').click();
    cy.get('.MuiButtonBase-root').contains('Polski').click();
    cy.get('.MuiMenuItem-root').should('contain', 'Język');
  });
  it('should open the info dialog', () => {
    cy.get('[data-testid="settings-button"').click();
    cy.get('.MuiButtonBase-root').contains('Info').click();
    cy.get('.MuiDialogTitle-root').should('contain', 'Info');
  });
  it('should switch to grid view', () => {
    cy.get('[data-testid="settings-button"').click();
    cy.get('.MuiButtonBase-root').contains('grid').click();
    cy.get('.MuiCardContent-root');
  });
  it('should open article popup', () => {
    cy.get('.MuiListItemButton-root').first().click();
    cy.get('.MuiTypography-h6').should('contain', 'Some title');
  });
});
