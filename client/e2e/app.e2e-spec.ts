import { RestaurantChooserPage } from './app.po';

describe('restaurant-chooser App', () => {
  let page: RestaurantChooserPage;

  beforeEach(() => {
    page = new RestaurantChooserPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
