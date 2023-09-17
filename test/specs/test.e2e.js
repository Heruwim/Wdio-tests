import {expect} from '@wdio/globals'

skip describe("Webdriwerio main page", () => {

	xit("should have correct title", async() => {
		await browser.url(`https://webdriver.io`);

		const title = await browser.getTitle()

		console.log(title);
		await expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO')
	});

	xit("should show addValue comand", async () => {
		await browser.url(`https://the-internet.herokuapp.com/login`);
	
		let input = await $("#username")
	
		await input.addValue("hello")
		await browser.pause(2000)
	
		await input.addValue(123)
		await browser.pause(2000)
	
		await expect(input).toHaveValue("hello123")
	});

	xit("should show setValue comand", async () =>{
		await browser.url(`https://the-internet.herokuapp.com/login`);

		let input = await $("#username")
		await input.setValue("world")
		await browser.pause(2000)

		console.log(await input.getValue())
		await expect(input).toHaveValue("world")
	});

	xit("should show click comand", async () =>{
		await browser.url(`	`);

		let loginButton = await $('.radius')
		await browser.pause(2000)
		await loginButton.click()
		await browser.pause(4000)

		let inputUsername = await $("#username")
		await inputUsername.addValue("tomsmith")
		await browser.pause(2000)

		let inputPassword = await $("#password")
		await inputPassword.addValue("SuperSecretPassword!")
		await browser.pause(2000)

		await loginButton.click();
		await browser.pause(4000)
	});

	xit("should show getAttribute comand", async () =>{
			await browser.url(`https://dou.ua/search`);

			let inputSearch = await $('#gsc-i-id1')
			let attr = await inputSearch.getAttribute("aria-label")
			console.log("Placeholder attribute is: " + attr)

			await inputSearch.setValue("Cat")
			attr = await inputSearch.getValue()
			await browser.pause(2000)
			console.log("Value attribute is: " + attr)
		});

	xit("should show getLocation comand", async () =>{
				await browser.url(`https://dou.ua`);
				
				let inputSearch = await $('#txtGlobalSearch')
				let location = await inputSearch.getLocation()
				console.log ("Location is: " + location)

				let xLocation = await inputSearch.getLocation("x")
				console.log("Location by x is: " + xLocation)
	});

	xit("should show getText comand", async () =>{
		await browser.url(`https://webdriver.io`);
		
		let subtitle = await $('.hero__subtitle')
		console.log("Subtitle text is: " + await subtitle.getText())
	});


											//ДЗ

	xit("should show click comand", async () =>{
		await browser.url(`https://webdriver.io/`);
	
		let burgerButton = await $('.navbar__toggle')
		await browser.pause(2000)
		await burgerButton.click()
		await browser.pause(2000)

		const menuLinks = await $('.menu__list')
		const apiLink = await menuLinks.$$('li')[1].$('a');
		await browser.pause(2000)
  		await apiLink.click()		
		await browser.pause(2000)
	});

	xit("should show toHaveUrl comand", async () =>{
		await browser.url(`https://webdriver.io/docs/api`);
		const expectedUrl = 'https://webdriver.io/docs/api/';
		await expect(browser).toHaveUrl(expectedUrl)
	});
	
	xit("should show toHaveText comand", async () =>{
		await browser.url(`https://webdriver.io/docs/api`);
		const h1Element = await browser.$('h1');
		await expect(h1Element).toHaveText('Introduction')
	});

	xit("should show toHaveAttribute comand", async () =>{
		await browser.url(`https://webdriver.io/docs/api`);
		  const link = await $('=WebDriver')
		  await expect(link).toHaveAttribute('href', '/docs/api/webdriver')
		
	});

	xit("should show setValue and clearValue comands", async () =>{
		await browser.url(`https://webdriver.io/docs/api`);
		  let searchButton = await $('.DocSearch')
		  await searchButton.click()
		  await browser.pause(2000)

		  let searchInput = await $('.DocSearch-Input')
		  await searchInput.setValue('all is done')
		  await browser.pause(4000)
		  await searchInput.clearValue()
		  await browser.pause(2000)		  
	});

	xit("should show if an element clickable", async () =>{
		await browser.url(`https://webdriver.io`);
		
		const blogButton = await $('.button[href = "/docs/gettingstarted"]')
		let clickable = await blogButton.isClickable()
		console.log("Is clickable: " + clickable)
	});

	xit("should show if an element is displaed", async () =>{
		await browser.url(`https://webdriver.io`);
	
		const blogButton = await $('.button[href = "/docs/gettingstarted"]')
		let displaed = await blogButton.isDisplayed()
		console.log("Is displaed: " + displaed)
	});

	xit("should show if an element is visible", async () =>{
		await browser.url(`https://webdriver.io`);
	
		const blogButton = await $('.button[href = "/docs/gettingstarted"]')
		let displayedInViewport = await blogButton.isDisplayedInViewport()
		console.log("Is blog button displayed in viewport: " + displayedInViewport)

		const footer = await $('.footer__link-item[href="/docs/gettingstarted"]')
		let footerIsDisplayedInViewport = await footer.isDisplayedInViewport()
		console.log("Is footer displayed in viewport: " + footerIsDisplayedInViewport)
	});

	xit("should show if an element is enabled", async () =>{
		await browser.url(`https://webdriver.io`);

		const getStartedButton = await $('.button[href = "/docs/gettingstarted"]')
		let isEnabled = await getStartedButton.isEnabled()
		console.log("Is get started button is enabled: " + isEnabled)	
	});

	xit("should show if an element is focused", async () =>{
		await browser.url(`https://webdriver.io`);
	
		const getStartedButton = await $('.button[href = "/docs/gettingstarted"]')
		let isFocused = await getStartedButton.isFocused()
		console.log("Is get started button is focused before click: " + isFocused)
		await browser.pause(2000)
		await getStartedButton.click()
		console.log("Is get started button is focused after click: ")
		await browser.pause(2000)
	});

	xit("should show movement to element action", async () =>{
		await browser.url(`https://webdriver.io`);

		const getStartedLink = await $('.footer__link-item[href="/docs/gettingstarted"]')
		await browser.pause(2000)
		await getStartedLink.scrollIntoView()
		await browser.pause(2000)		
	});

	xit("should show save screenshot command", async () =>{
		await browser.url(`https://webdriver.io`);
	
		const getStartedLink = await $('.footer__link-item[href="/docs/gettingstarted"]')
		await browser.pause(2000)
		await getStartedLink.scrollIntoView()
	 	await browser.pause(2000)
		await getStartedLink.saveScreenshot('linkScreenshot.png')
	});

	xit("should switch to another window", async () =>{
		await browser.url(`https://webdriver.io`);
	
		await browser.newWindow(`https://google.com`)
		await browser.pause(2000)

		await browser.switchWindow(`https://webdriver.io`)
		await browser.pause(2000)
	});

	xit("should show waitUntil comand", async () =>{
		await browser.url(`https://webdriver.io`);
	
		await browser.waitUntil(async () => {
			return $('.button[href = "/docs/gettingstarted"]').isDisplayed();
		}, 5000, "Button is not displayed")
	});

	xit("should get html for certain elements", async () =>{
		await browser.url(`https://webdriver.io`);
	
		const outerHTML = await $('.dropdown__menu').getHTML()
		console.log("outerHtml: " + outerHTML)

		const innerHTML = await $('.dropdown__menu').getHTML(false)
		console.log("innerHTML: " + innerHTML)
	});

										//ДЗ-2

	xit("should show click comand", async () =>{
		await browser.url(`https://webdriver.io/`);
	
		let burgerButton = await $('.navbar__toggle')
		await browser.pause(2000)
		await burgerButton.click()
		await browser.pause(2000)
		let linkAPI = await $('nav li a[href = "/docs/api"]')
		await browser.pause(2000)
		await linkAPI.click()
		await browser.pause(2000)
	});

	xit("should show movement to element action", async () =>{
		await browser.url(`https://webdriver.io/docs/api`);
		const getStartedLink = await $('footer a[href="/blog"]')
		await browser.pause(2000)
		await getStartedLink.scrollIntoView()
		await browser.pause(2000)		
		});

	xit("should show if an element is visible", async () =>{
		await browser.url(`https://webdriver.io/docs/api`);
			
		let scrollProtocol = await $('nav[aria-label="Docs pages navigation"]')
		await browser.pause(2000)
		await scrollProtocol.scrollIntoView()
		await browser.pause(2000)
		let linkProtocol = await $('nav[aria-label="Docs pages navigation"] a')
		let displayedInViewport = await linkProtocol.isDisplayedInViewport()
		console.log("Is link displayed in viewport: " + displayedInViewport)		
	});

	xit("should show if an element clickable", async () =>{
		await browser.url(`https://webdriver.io/docs/api`);
				
		let scrollProtocol = await $('nav[aria-label="Docs pages navigation"]')
		await browser.pause(2000)
		await scrollProtocol.scrollIntoView()
		await browser.pause(2000)
		let linkProtocol = await $('nav[aria-label="Docs pages navigation"] a')
		let clickable = await linkProtocol.isClickable()
		console.log("Is clickable: " + clickable)
		let outerHTML = scrollProtocol.getHTML()
		console.log("outerHtml: " + outerHTML)
		linkProtocol.click()
		await browser.waitUntil(async () => {
			const h2Element = await $('h2.anchor.anchorWithStickyNavbar_LWe7#webdriver-protocol');
			return await h2Element.isDisplayed();
		 }, {
			timeout: 4000,
			timeoutMsg: 'Элемент не появился после клика на ссылке',
		 });
		 await browser.pause(4000)
		});
//--------------------------------------------------
	});