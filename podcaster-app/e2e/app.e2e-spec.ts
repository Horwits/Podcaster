import { PodcasterAppPage } from './app.po';

describe('podcaster-app App', function() {
  let page: PodcasterAppPage;

  beforeEach(() => {
    page = new PodcasterAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
