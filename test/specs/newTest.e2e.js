import MainPage from "../pages/main.page.js";
import GameDevPage from "../pages/gamedev.page.js";
import GamedevTopratesPage from "../pages/gamedevToprates.page.js";


describe("Webdriverio main page", () => {

	xit("should show addValue command", async () => {
		await browser.url(`https://dou.ua/`);

		await MainPage.clickOnBandBtn()
		await browser.pause(2000)

		await MainPage.clickOnForumBtn()
		await browser.pause(2000)

		await MainPage.clickOnGameDevBtn()
		await browser.pause(2000)

		await GameDevPage.clickOnTopGamesRateLink()

		expect(GamedevTopratesPage.title).toHaveText("Матеріали на тему «топ ігор місяця»")
	});
});