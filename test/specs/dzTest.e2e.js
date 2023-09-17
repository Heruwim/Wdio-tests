import {expect} from '@wdio/globals'

skip describe("Webdriwerio main page", () => {

xit("should show negative check of the email field empty value", async () =>{
	await browser.url(`https://github.com/`);

	let signUpLink = await $('div.flex-1 a[href = "/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home"]')
	await signUpLink.click()
	await browser.pause(3000)

	let emailInput = await $('#email')	  
	await emailInput.setValue("")
	const continueButton = await $('button[class = "js-continue-button signup-continue-button form-control px-3 width-full width-sm-auto mt-4 mt-sm-0"]')
	await continueButton.click()
	const errorMessage = await $("#email-err");
	await expect(errorMessage).toHaveText("The email address must be filled in")		
});

xit("should show negative check of the email field invalid value", async () =>{
	await browser.url(`https://github.com/`);

	let signUpLink = await $('div.flex-1 a[href = "/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home"]')
	await signUpLink.click()
	await browser.pause(3000)

	let emailInput = await $('#email')	  
	await emailInput.setValue("bestQA.gmail.com")
	const continueButton = await $('button[class = "js-continue-button signup-continue-button form-control px-3 width-full width-sm-auto mt-4 mt-sm-0"]')
	await continueButton.click()
	const errorMessage = await $("#email-err");
	await expect(errorMessage).toHaveText("Email is invalid or already taken")		
});

xit("should show Negative check of the Username or email address field", async () =>{
	await browser.url(`https://github.com/`);

	let signUpLink = await $('div.flex-1 a[href = "/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home"]')
	await signUpLink.click()
	await browser.pause(3000)
	let signInLink = await $('a[href="/login?return_to=https%3A%2F%2Fgithub.com%2Fsignup%3Fref_cta%3DSign%2Bup%26ref_loc%3Dheader%2Blogged%2Bout%26ref_page%3D%252F%26source%3Dheader-home"]')
	await signInLink.click()
	await browser.pause(2000)
	let emailInput = await $('#login_field')	  
	await emailInput.setValue("bestQAgmail.com")
	let passwordInput = await $('#password')	  
	await passwordInput.setValue("qwerty123")
	const continueButton = await $('input[type="submit"]')
	await continueButton.click()
	const errorMessage = await $('div[class="js-flash-alert"]');
	await expect(errorMessage).toHaveText("Incorrect username or password.")
	await browser.pause(2000)		
});

xit('should show Checking the "Codespaces" link in the "Product" Main Menu', async () =>{
	await browser.url(`https://github.com/`);

	const burgerButton = await $('button[class="js-details-target Button--link Button--medium Button d-lg-none color-fg-inherit p-1"]')
	await burgerButton.click()
	await browser.pause(1000)
	const menuButton = await $('button[class="HeaderMenu-link border-0 width-full width-lg-auto px-0 px-lg-2 py-3 py-lg-2 no-wrap d-flex flex-items-center flex-justify-between js-details-target"]')
	await menuButton.click()
	await browser.pause(1000)
	const subMenuButton = await $('ul[class="list-style-none f5"] a[href="/features/codespaces"]')
	await subMenuButton.click()
	await browser.pause(1000)
	const expectedUrl = 'https://github.com/features/codespaces';
	await expect(browser).toHaveUrl(expectedUrl)		
});

xit('should show checking the "LinkedIn" Link in the social media section in the website footer', async () =>{
	await browser.url(`https://github.com/`);
	const linkedinLink = await $('a[href="https://www.linkedin.com/company/github"]')
	linkedinLink.scrollIntoView()
	await browser.pause(2000)
	await linkedinLink.click()
	const expectedUrl = 'https://www.linkedin.com/company/github';
	await expect(browser).toHaveUrl(expectedUrl)
});
});