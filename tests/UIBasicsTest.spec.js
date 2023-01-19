const { test, expect } = require("@playwright/test");
const { PagesManager } = require("../page_objects/Pages");
const testdata = JSON.parse(
  JSON.stringify(require("../test_data/search.json"))
);

test("Open playwright site", async ({ page }) => {
  //open browser
  await page.goto("https://playwright.dev");
  const name = await page.innerText(".navbar__title");
  expect(name).toBe("Playwright");
  page.close();
});

test("1st test", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("http://www.google.com");
  console.log(await page.title());
  await expect(page).toHaveTitle("Google");
  page.close();
});

for (const data of testdata) {
  test.only(`Search test for ${data.keyword}`, async ({ page }) => {
    const pages = new PagesManager(page);
    await pages.getSearchPage().goto();
    await expect(page).toHaveTitle("Google");
    await pages.getSearchPage().search(data.keyword);
  });
}
