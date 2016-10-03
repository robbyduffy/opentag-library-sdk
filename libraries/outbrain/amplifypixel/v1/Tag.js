//:import CurrentSDK

qubit.opentag.LibraryTag.define("outbrain.amplifypixel.v1.Tag", {
	getDefaultConfig: function () {
    return {
      /*config*/
      name: "amplifypixel",
      async: true,
      description: "Outbrain : get your content featured on the world's top media sites.",
      html: "",
      locationDetail: "",
      isPrivate: false,
      url: "",
      usesDocWrite: false,
      upgradeable: true,
      parameters: [{
          name:"amplify_pixel_id",
          description:"Amplify pixel id",
          token:"amplify_pixel_id",
          uv:"universal_variable.outbrain.amplify_pixel_id"
      }]
      /*~config*/
    };
	},
	script: function() {
	/*script*/

        var src = "//amplifypixel.outbrain.com/pixel?mid=" + this.valueForToken("amplify_pixel_id");

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
