//:import CurrentSDK

qubit.opentag.LibraryTag.define("uplift.platform.v1.Tag", {
	getDefaultConfig: function () {
		return {
			/*config*/
		name: "UpLift Platform Tag",
		async: true,
		description: "UpLift Platform Tag provides analytics tooling to help understand customer payment behaviors and to empower merchants to grow consumer loyalty, generate new marketing dollars, and increase conversion.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [
			{
				name: "Account-ID",
				description: "The Account ID (e.g. UP-12345678-1) is a unique, partner specific identifier. It is provided to you by UpLift Inc. during the on-boarding with UpLift platform.",
				token: "partner_account_id",
				uv: ""
			}, {
				name: "Partner-Domain",
				description: "Partner domain (e.g. example.com) is the root domain for the partner's website hosting the pages with the tag.",
				token: "partner_domain",
				uv: ""
			}
		]
			/*~config*/
		};
	},
	script: function() {
	/*script*/
		(function(u,p,l,i,f,t,o,b,j){u['UpLiftPlatformObject']=f;u[f]=u[f]||function(){(u[f].q=u[f].q||[]).push(arguments)},u[f].l=1*new Date();b=p.createElement(l),j=p.getElementsByTagName(l)[0];b.async=1;b.src=i+'?id='+t;j.parentNode.insertBefore(b,j);u[f]('create',t,o)})(window,document,'script','//cdn.uplift-platform.com/a/up.js','up',this.valueForToken('partner_account_id'),this.valueForToken('partner_domain'));up('send','pageview');
	/*~script*/
	},
	pre: function() {
	/*pre*/
	/*~pre*/
	},
	post: function() {
	/*post*/
	/*~post*/
	}
});
