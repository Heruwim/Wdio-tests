class Dz25SignUpPage{
	get emailInputValue(){return $('#email')}
	get passwordInputValue(){return $('#password')}
	get loginInputValue(){return $('#login')}
	get notificationInputValue(){return $('#opt_in')}
	get greetingText1() {return $('*[class="text-mono text-gray-light-mktg"]')}
	get greetingText2() {return $('*[class="text-mono text-gray-light-mktg"] br')}
	get continueButton() {return $('#email-container button')}
	get continueButton2() {return $('#password-container button[class="js-continue-button signup-continue-button form-control px-3 width-full width-sm-auto mt-4 mt-sm-0"]')}
	get continueButton3() {return $('#username-container button[class="js-continue-button signup-continue-button form-control px-3 width-full width-sm-auto mt-4 mt-sm-0"]')}
	get continueButton4() {return $('#opt-in-container button[class="js-continue-button signup-continue-button form-control px-3 width-full width-sm-auto mt-4 mt-sm-0"]')}

	async waitingForAppearance(){
		await this.emailInputValue.waitForExist()
	}

	async emailInput(value){
		await this.emailInputValue.setValue(value)
	}

	async passwordInput(value){
		await this.passwordInputValue.setValue(value)
	}

	async loginInput(value){
		await this.loginInputValue.setValue(value)
	}
	async notificationDistributionInput(value){
		await this.notificationInputValue.setValue(value)
	}

	async clickOnContinueButton(){
		if(await this.continueButton.isClickable()){
			await this.continueButton.click()
		}else if(await this.continueButton2.isClickable()){
			await this.continueButton2.click()
		}else if(await this.continueButton3.isClickable()){
			await this.continueButton3.click()
		}else{
			await this.continueButton4.click()
		}
	}

}

export default new Dz25SignUpPage()