import { PodcasterPage } from './app.po';

describe('podcaster App', function() {
  let page: PodcasterPage;

  beforeEach(() => {
    page = new PodcasterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
