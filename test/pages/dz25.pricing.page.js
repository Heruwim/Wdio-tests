class Dz25PricingPage {
	get headline() { return $('h1[class="h2-mktg"]') };
	get headlineCompareFeatures() { return $('h1[class="h1"]') };
	get compareAllFeaturese() { return $('a[class="d-flex flex-column flex-items-center flex-justify-center h5-mktg"]') };

	async isVisible() {
		let displayedInViewport = await this.headline.isDisplayedInViewport()
		console.log("Is headline displayed in viewport: " + displayedInViewport)
	}
	async clickOnElement(value) {
		await value.click();
	}
	async scrollToObject() {
		await this.compareAllFeaturese.scrollIntoView()
	}

	async isTextAvailable() {
		await expect(this.headlineCompareFeatures).toHaveText("Compare features");
	}

}
export default new Dz25PricingPage()