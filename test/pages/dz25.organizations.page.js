class Dz25OrganizationsPage {
	get h1Link() { return $('div h1[class="d-none d-md-block mt-0 mb-3 text-center h1 lh-condensed-ultra "]') };
	get EnterpriseCloudLink() { return $('a[href="/account/enterprises/new?ref_cta=Enterprise%2520Cloud&ref_loc=choose_an_enterprise_plan&ref_page=%2Forganizations%2Fenterprise_plan%3Fref_cta%3DStart%2Ba%2Bfree%2Benterprise%2Btrial%26ref_loc%3DHome%2Bcampaign%2Bfooter%26ref_page%3D%252F"]') };

	async isTextAvailable(linkValue, textValue) {
		await expect(linkValue).toHaveText(textValue);
	}
}
export default new Dz25OrganizationsPage