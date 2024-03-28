import {AppComponent} from "./app.component";

describe('Appcomponent', () => {
  it('should display the component', () => {
    cy.mount(AppComponent);
  });
});
