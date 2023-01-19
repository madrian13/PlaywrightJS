const { LoginPage } = require("./LoginPage");
const { SearchPage } = require("./SearchPage");

class PagesManager {
  constructor(page) {
    this.page = page;
    this.loginPage = new LoginPage(this.page);
    this.searchPage = new SearchPage(this.page);
  }
  getLoginPage() {
    return this.loginPage;
  }

  getSearchPage() {
    return this.searchPage;
  }
}

module.exports = { PagesManager };
