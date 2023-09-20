class Dz25ResourcesGitHabPage {
	get h1Link() { return $('#hero-section-brand-heading') };
	get sectionCountry() { return $('#FormControl--country') };
	get emailInputValue() { return $('input[type="email"]') };
	get selectInputValue() { return $('select[class="Primer_Brand__Select-module__Select___Jqn1f Select Primer_Brand__Select-module__Select--medium___kckBr"]') };
	get countryInputValue() { return $('select option[value="UA"]') };
	get checkbox() { return $('input[type="checkbox"]') };
	get subscribeButton() { return $('button[class="Primer_Brand__Button-module__Button___lDruK Primer_Brand__Button-module__Button--primary___xIC7G Primer_Brand__Button-module__Button--size-medium___EyCyw mt-4"]') };
	get subscriptionСonfirmation() { return $('h1[class="Primer_Brand__Heading-module__Heading___IVpmp Primer_Brand__Heading-module__Heading--1___Ufc7G Primer_Brand__Hero-module__Hero-heading___QuVBH"]') };


	async compareUrlWithExpected(expectedUrl) {
		await expect(browser).toHaveUrl(expectedUrl);
	}
	async isTextAvailable(linkValue, expectedTextValue) {
		await expect(linkValue).toHaveText(expectedTextValue);		
	}
	async emailInput(emailValue){
		await this.emailInputValue.setValue(emailValue)
	}
	async setCountrylValue(){
		await this.sectionCountry.setValue(this.countryInputValue)
	}
	async clickOnElement(value) {
		await value.click();
	}
	async scrollToObject(value, display = "start") {
		await value.scrollIntoView({block: display});
	}

}


export default new Dz25ResourcesGitHabPage()