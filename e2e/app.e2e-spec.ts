import { WardawgzPage } from './app.po';

describe('wardawgz App', function() {
  let page: WardawgzPage;

  beforeEach(() => {
    page = new WardawgzPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
