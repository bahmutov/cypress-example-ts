describe('App', () => {
  it('works', () => {
    cy.wrap('hello').should('equal', 'hello')
  })
})
