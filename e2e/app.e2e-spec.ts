import { JunctionOura2016Page } from './app.po';

describe('junction-oura-2016 App', function() {
  let page: JunctionOura2016Page;

  beforeEach(() => {
    page = new JunctionOura2016Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
