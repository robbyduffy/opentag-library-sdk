//:import CurrentSDK

qubit.opentag.LibraryTag.define(
	"googleanalytics.googleanalyticseventtracking.v2.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "Google Analytics Event Tracking",
			async: true,
			description: "Allow the tracking of custom events on the page through Google Analytics. NOTE: This module does not load in Google Analytics, it simply allows for event tracking. The main GA script should be added separately.",
			html: "",
			locationDetail: "",
			isPrivate: false,
			url: "",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "Event Category",
				description: "Required. The name you supply for the group of objects you want to track.",
				token: "category",
				uv: ""
			}, {
				name: "Event Action",
				description: "Required. A string paired with each category. Used to define the type of interaction.",
				token: "action",
				uv: ""
			}, {
				name: "Event Label",
				description: "An optional string to provide additional dimensions to the event data.",
				token: "label",
				uv: ""
			}],
		categories:[
			"Web Analytics"
		]

			/*~config*/
		};
		},
		script: function() {
			/*script*/
			alert(ga);
			ga('send','event', {
				eventCategory: this.valueForToken("category"), 
				eventAction: this.valueForToken("action”), 
				eventLabel: this.valueForToken("label”)
			});
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
