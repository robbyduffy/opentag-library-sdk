//:import CurrentSDK

qubit.opentag.LibraryTag.define("taboola.pixelretargeting.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Pixel",
		async: true,
		description: "Taboola retargeting pixel",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
		  name: "Taboola Client ID",
		  description: "clientid-sc format",
		  token: "client_id",
		  uv: ""
		}, {
		  name: "Marketing type for retargeting",
		  description: "example : product_page_visitor",
		  token: "marketing_type_retargeting",
		  uv: ""
		}],
		categories:[
		  "Retargeting pixel"
		]
		/*~config*/
	  };
  },
  script: function() {
	  /*script*/

	  // @doc https://www.taboola.com/advertiser-help-center/generate-taboola-javascript-tracking-code-image-pixel

	  var encoded_page_url = encodeURIComponent(window.location);

	  var src = "//trc.taboola.com/" +
		  this.valueForToken("client_id") +
		  "/log/3/mark?marking-type=retargeting_";
	  src += this.valueForToken("marketing_type_retargeting");
	  src += "&item-url=" + encoded_page_url;

	  var img = new Image();
	  img.src = src;

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
