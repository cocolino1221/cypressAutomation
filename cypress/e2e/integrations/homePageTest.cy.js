/// <reference types="cypress" />
import { url } from 'inspector';
import HomePage from '../../pages/HomePage';
describe('Test homepage', () => {
  const homePage = new HomePage();
  it('Open page', () => {
    homePage.Open();
    homePage
      .homepageText()
      .should(
        'have.text',
        'Words are like spices. Too many is worse than too few, but spice a dish with love and it pleases every plate.',
      );
  }),
    it('Type in restaurant search field', () => {
      homePage.Open();
      homePage.searchBar().type('pronto');
    });
    it('Test add location field ', () => {
      homePage.Open();
      homePage.addLocationField().type(' Baia Mare');
    })
});
