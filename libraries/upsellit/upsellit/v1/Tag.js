//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("upsellit.upsellit.v1.Tag", {
	getDefaultConfig: function () {
    return {
      /*config*/
      name: "Upsellit",
      async: true,
      description: ".",
      html: "",
      locationDetail: "",
      isPrivate: false,
      url: "",
      usesDocWrite: true,
      upgradeable: true,
      parameters: [{
        name: "Launch Tag",
        description: "",
        token: "launch_tag"
      }]
      /*~config*/
    };
	},
	script: function() {
		/*script*/
			var USI_headID = document.getElementsByTagName("head")[0];
			var USI_dynScript = document.createElement("script");
			USI_dynScript.setAttribute('type','text/javascript');
			USI_dynScript.src = '//www.upsellit.com/active/' + 
              this.valueForToken("launch_tag") + '.jsp';
			USI_headID.appendChild(USI_dynScript);
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
