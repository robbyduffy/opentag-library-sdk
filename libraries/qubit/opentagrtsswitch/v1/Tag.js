//:import CurrentSDK

qubit.opentag.LibraryTag.define("qubit.opentagrtsswitch.v1.Tag", {
	getDefaultConfig: function () {
		return {
			/*config*/
		name: "Opentag RTS Switch",
		async: false,
		description: "",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [

	]
			/*~config*/
		};
	},
	script: function() {
	/*script*/
		qubit.opentag.Ping.useNewPingSource = true;
		qubit.opentag.Ping.newPingServerUrl = "opentag-stats.qubit.com/ping";
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
