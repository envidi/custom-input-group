import { InputGroup } from './index';

describe('<InputGroup />', () => {
  context('720p resolution', () => {
    beforeEach(() => {
      // run these tests as if in a desktop
      // browser with a 720p monitor
      cy.viewport(1280, 720);
    });

    it('renders', () => {
      // see: https://on.cypress.io/mounting-react
      cy.mount(<InputGroup />);
      cy.viewport(360, 640);
    });
  });

  context('iphone-5 resolution', () => {
    it('renders', () => {
      // see: https://on.cypress.io/mounting-react
      cy.mount(<InputGroup />);
      cy.viewport(200, 640);
    });
  });
});
