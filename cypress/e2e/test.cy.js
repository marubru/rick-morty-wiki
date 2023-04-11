describe('the app', () => {
  it('filter the ticktock user', () => {
    const gender = '.content > :nth-child(1)'
    const location = '.content > :nth-child(2)'
    const origin = '.content > :nth-child(3)'
    const species = '.content > :nth-child(4)'

    cy.visit('https://react-projects-psi.vercel.app')
    cy.get('[class*="Search_input"]').type('Ticktock')
    cy.get('[class*="Search_btn"]').click()
    cy.get('[class*="Card_content__"] > :nth-child(2) > .fs-5').contains('Gaia')
    cy.get('[class*="Card_card"]').click()
    cy.get(gender).contains('Genderless')
    cy.get(location).contains('Gaia')
    cy.get(origin).contains('Gaia')
    cy.get(species).contains('Humanoid')
  })
})