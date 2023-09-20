import Dz25MainPage from "../pages/dz25.main.page.js";
import dz25OrganizationsPage from "../pages/dz25.organizations.page.js";
import Dz25SignUpPage from "../pages/dz25.signup.page.js";
import Dz25ResourcesGitHabPage from "../pages/dz25.resources.page.js";
import Dz25SearchPage from "../pages/dz25.search.page.js"
import Dz25PricingPage from "../pages/dz25.pricing.page.js";

describe("GitHub main page", () => {

	xit("should show addValue command", async () => {
		await browser.url(`https://github.com`);

		let emailValue = "superAQA@gmail.com";
		let passwordValue = "SuperPassword45978";
		let logindValue = "MegaAQA";
		let notificationDistributionInput = "y";

		await Dz25MainPage.clickOnElement(Dz25MainPage.signUpLink);
		await Dz25SignUpPage.waitingForAppearance();
		expect(Dz25SignUpPage.greetingText1).toHaveText("Welcome to GitHub!");
		expect(Dz25SignUpPage.greetingText2).toHaveText("Let’s begin the adventure");
		await browser.pause(2000);

		Dz25SignUpPage.emailInput(emailValue)
		await browser.pause(2000);
		Dz25SignUpPage.clickOnContinueButton();

		Dz25SignUpPage.passwordInput(passwordValue);
		await browser.pause(2000);
		Dz25SignUpPage.clickOnContinueButton();

		await browser.pause(2000);
		Dz25SignUpPage.loginInput(logindValue);
		await browser.pause(2000);
		Dz25SignUpPage.clickOnContinueButton();

		Dz25SignUpPage.notificationDistributionInput(notificationDistributionInput);
		await browser.pause(2000);
		Dz25SignUpPage.clickOnContinueButton();
		await browser.pause(4000);

	});

	xit("should show start a free enterprise trial test", async () => {
		await browser.url(`https://github.com`);
		const headerText = "The place for anyone from anywhere to build anything";
		const h1Text = 'Pick your trial plan';

		Dz25MainPage.scrollToObject(Dz25MainPage.h2Link, "center");
		await browser.pause(2000);
		expect(Dz25MainPage.h2Link).toHaveText(headerText);
		Dz25MainPage.isVisible(Dz25MainPage.startFreeTrialLink);
		Dz25MainPage.clickOnElement(Dz25MainPage.startFreeTrialLink);
		dz25OrganizationsPage.isTextAvailable(dz25OrganizationsPage.h1Link, h1Text);
		Dz25MainPage.clickOnElement(dz25OrganizationsPage.EnterpriseCloudLink);
	});


	xit("should show start test3", async () => {
		await browser.url(`https://github.com`);

		const expectedUrl = 'https://resources.github.com/newsletter/';
		const expectedHeader = 'Subscribe to our developer newsletter';
		const expectedSubscribeHeader = 'Thanks for subscribing!';
		let emailValue = "superAQA@gmail.com";

		Dz25MainPage.scrollToObject(Dz25MainPage.subscribeLink);
		Dz25MainPage.isClickableObject(Dz25MainPage.subscribeLink);
		await browser.pause(1000);
		Dz25MainPage.clickOnElement(Dz25MainPage.subscribeLink);
		await browser.pause(1000);
		Dz25ResourcesGitHabPage.compareUrlWithExpected(expectedUrl);
		await browser.pause(1000);
		Dz25ResourcesGitHabPage.isTextAvailable(Dz25ResourcesGitHabPage.h1Link, expectedHeader);
		await browser.pause(1000);
		Dz25ResourcesGitHabPage.scrollToObject(Dz25ResourcesGitHabPage.sectionCountry, "center");
		await browser.pause(1000);
		Dz25ResourcesGitHabPage.emailInput(emailValue);
		await browser.pause(2000);
		Dz25ResourcesGitHabPage.clickOnElement(Dz25ResourcesGitHabPage.sectionCountry);
		await browser.pause(2000);
		Dz25ResourcesGitHabPage.clickOnElement(Dz25ResourcesGitHabPage.countryInputValue);
		await browser.pause(2000);
		Dz25ResourcesGitHabPage.clickOnElement(Dz25ResourcesGitHabPage.checkbox);
		await browser.pause(2000);
		Dz25ResourcesGitHabPage.clickOnElement(Dz25ResourcesGitHabPage.subscribeButton);
		await browser.pause(2000);
		Dz25ResourcesGitHabPage.isTextAvailable(Dz25ResourcesGitHabPage.subscriptionСonfirmation, expectedSubscribeHeader)
		await browser.pause(4000);
	});

	xit("should show start test4", async () => {
		await browser.url(`https://github.com`);
		Dz25MainPage.clickOnElement(Dz25MainPage.burgerButton);
		await browser.pause(1000);
		Dz25MainPage.clickOnElement(Dz25MainPage.searchButton);
		await browser.pause(1000);
		Dz25MainPage.setSearchlValue();
		await browser.pause(1000);
		Dz25MainPage.clickOnElement(Dz25MainPage.searchValue);
		await browser.pause(4000);
		Dz25SearchPage.checkLinksForActKeyword();
		await browser.pause(3000);
	});

	it("should show start test5", async () => {
		await browser.url(`https://github.com`);
		Dz25MainPage.clickOnElement(Dz25MainPage.burgerButton);
		await browser.pause(1000);
		Dz25MainPage.clickOnElement(Dz25MainPage.pricingLink);
		await browser.pause(1000);
		Dz25PricingPage.isVisible();
		await browser.pause(1000);
		Dz25PricingPage.scrollToObject()
		await browser.pause(1000);
		Dz25PricingPage.clickOnElement(Dz25PricingPage.compareAllFeaturese)
		await browser.pause(1000);
		Dz25PricingPage.isTextAvailable();
		await browser.pause(3000);
	});
});