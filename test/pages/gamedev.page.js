class GameDevPage {

	get companyGameDevsRateLink() {return $('//*[text()="Рейтинг найбільших гемдев-компаній"]')}
	get topGamesRateLink() {return $('//*[text()="Топ ігор місяця"]')}

	async clickOnTopGamesRateLink(){
		await this.topGamesRateLink.click()
	}
}

export default new GameDevPage()