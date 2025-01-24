describe('My First Test', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(true)
    })
  })

describe('Login Scenario', () => {
    it('Test1 - Valid Login', () => {

    })
    it('Test2 - Invalid Login', () => {

    })
})

describe('Launch application', () => {
    it('This will launch app', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index')
        cy.get(input[name='username']).type('test')
        cy.get
    })
})