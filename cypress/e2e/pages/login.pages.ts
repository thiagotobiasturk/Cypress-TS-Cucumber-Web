// cypress/pageobjects/LoginPage.ts

export default class LoginPage {
    
    private usernameInput = '#username';
    private passwordInput = '#password';
    private submitButton = '#submit';
    private messageInput = ('.post-title');
    private messageerrorInput ='#error'
    
    visit() {
      cy.visit('https://practicetestautomation.com/practice-test-login/'); 
    }
    
    enterCredentials(username, password) {
      cy.get('input[name="username"]').type(username);
      cy.get('input[name="password"]').type(password);
    }

    fillUsername() {
      cy.get(this.usernameInput).type('student');
    }
  
    fillPassword() {
      cy.get(this.passwordInput).type('Password123');
    }
  
    submit() {
      cy.get(this.submitButton).click();
    }

    LoggedInSuccesfully() {
      cy.get(this.messageInput);
    }

    Unsuccessfullogin() {
      cy.get(this.messageerrorInput);
    } 

    
  }
  