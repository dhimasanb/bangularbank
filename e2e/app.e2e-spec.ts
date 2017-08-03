import { BangularbankPage } from './app.po';

describe('bangularbank App', () => {
  let page: BangularbankPage;

  beforeEach(() => {
    page = new BangularbankPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
