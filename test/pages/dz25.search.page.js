class Dz25SearchPage {
	get searchResults() { return $('a[class="Link__StyledLink-sc-14289xe-0 fIqerb"]') };

	async checkLinksForActKeyword() {
		await expect(this.searchResults).toHaveHrefContaining('act')
	}

}
export default new Dz25SearchPage()