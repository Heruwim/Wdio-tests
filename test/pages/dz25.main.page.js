class Dz25MainPage {
	get signUpLink() { return $('div.flex-1 a[href = "/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home"]') };
	get h2Link() { return $('h2[class="color-fg-default mb-3 h3-mktg col-lg-8 mx-md-auto px-3"]') };
	get startFreeTrialLink() { return $('a[class="btn-mktg btn-large-mktg btn-muted-mktg"]') };
	get subscribeLink() { return $('a[class="btn-mktg mb-4 btn-muted-mktg"]') };
	get pricingLink() { return $('a[class="HeaderMenu-link no-underline px-0 px-lg-2 py-3 py-lg-2 d-block d-lg-inline-block"]') };
	get burgerButton() { return $('button[class="js-details-target Button--link Button--medium Button d-lg-none color-fg-inherit p-1"]') };
	get searchButton() { return $('button[class="header-search-button placeholder input-button form-control d-flex flex-1 flex-self-stretch flex-items-center no-wrap width-full py-0 pl-2 pr-0 text-left border-0 box-shadow-none"') };
	get searchInput() { return $('#query-builder-test') };
	get searchValue() { return $('#query-builder-test-result-act') };

	async clickOnElement(value) {
		await value.click();
	}
	async scrollToObject(value, display = "start") {
		await value.scrollIntoView({ block: display });
	}
	async isVisible(value) {
		let isVisible = await value.isDisplayedInViewport();
		console.log("Is object displayed in viewport: " + isVisible);
	}
	async isClickableObject(value) {
		let isClickable = await value.isClickable();
		console.log("Is object is clickable: " + isClickable);
	}
	async setSearchlValue() {
		await this.searchInput.setValue("act")
	}


}

export default new Dz25MainPage()