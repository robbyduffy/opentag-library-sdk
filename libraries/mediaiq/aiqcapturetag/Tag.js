//:import CurrentSDK

qubit.opentag.LibraryTag.define("mediaiq.aiqcapturetag.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "AiQ data Capture Tag",
		async: true,
		description: "Our clients are AiQ enabled to receive DMP-type functionality, personnel support and hepl their campaigns perform.",
		html: "<img src="https://secure.adnxs.com/px?id=${pixel_id}&seg=${segment_id)]&redir=https%3A%2F%2Fsecure.adnxs.com%2Fgetuid%3Fhttps%3A%2F%2Fpixel.mediaiqdigital.com%2Fpixel%3Fu1%3D${u1}%26u2%3D${u2}%26u3%3D${u3}%26u4%3D${u4}%26u5%3D${u5}%26u6%3D${u6}%26u7%3D${u7}%26u8%3D${u8}%26u9%3D${u9}%26u10%3D${u10}%26u11%3D${u11}%26u12%3D${u12}%26u13%3D${u13}%26u14%3D${u14}%26u15%3D${u15}%26u16%3D${u16}%26u17%3D${u17}%26u18%3D${u18}%26u19%3D${u19}%26u20%3D${u20}%26u21%3D${u21}%26u22%3D${u22}%26u23%3D${u23}%26u24%3D${u24}%26u25%3D${u25}%26pixel_id%3D${pixel_id}%26uid%3D%24UID&t=2" width="1" height="1" />
",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Media iQ",
			description: "Our clients are AiQ enabled to receive DMP-type functionality, personnel support and hepl their campaigns perform.",
			token: "media_iq",
			uv: ""
		}, {
			name: "Media iQ",
			description: "Our clients are AiQ enabled to receive DMP-type functionality, personnel support and hepl their campaigns perform.",
			token: "media_iq",
			uv: ""
		}],
		categories:[
			"DSP"
		]

		/*~config*/
		};
	},
	script: function() {
		/*script*/
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
